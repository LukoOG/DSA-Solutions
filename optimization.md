# Language-Specific Optimization Notes

A running document of interesting optimization differences I've discovered across Python, Rust, TypeScript, and Go while solving the same problems in multiple languages. The same algorithm doesn't always perform the same way across languages — compiler design, runtime overhead, and built-in hardware instruction mappings all play a role.

---

## Case Study: XOR of Array Equal to K — Popcount

**Problem:** [2997. Minimum Number of Operations to Make Array XOR Equal to K](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/)

The second half of this problem reduces to counting the number of set bits (popcount) in an integer. There are several ways to do this and the fastest approach is not the same across languages.

### The Approaches

**Brian Kernighan's Algorithm**
```python
count = 0
while xor != 0:
    xor &= xor - 1
    count++
```
Clears the lowest set bit on each iteration, so it only loops as many times as there are set bits. Elegant and efficient in most compiled languages.

**Bitwise Shift**
```python
count = 0
while xor > 0:
    count += xor & 1
    xor >>= 1
```
Checks each bit position one at a time. Always runs 32 iterations regardless of how many bits are set — less efficient than Kernighan for sparse bit patterns.

**Built-in Popcount**
Most languages expose a direct popcount function that maps to the `POPCNT` CPU instruction — a single hardware instruction that counts set bits in one clock cycle.

---

### What I Found

**Go** — Brian Kernighan's algorithm works well here. The Go compiler doesn't always auto-vectorize manual bit loops into `POPCNT`, so `math/bits.OnesCount()` is technically faster, but the difference is negligible for 32-bit integers.

**Python** — Brian Kernighan's is noticeably slower than `int.bit_count()`. Python's interpreter overhead makes every loop iteration expensive — each `&=` and `-` operation goes through the Python object model. `bit_count()` bypasses all of that and calls the C-level `POPCNT` instruction directly. For a 32-bit integer this is a significant relative speedup.

```python
# Slower in Python
count = 0
while xor != 0:
    xor &= xor - 1
    count += 1

# Faster in Python
count = xor.bit_count()
```

**Rust** — the manual Kernighan loop is already fast since Rust compiles to native machine code, but `count_ones()` is still preferred. The Rust compiler maps it directly to the `POPCNT` instruction and it also signals intent more clearly to anyone reading the code. The compiler may or may not optimise a manual loop to `POPCNT` depending on context — `count_ones()` guarantees it.

```rust
// Idiomatic and guaranteed POPCNT
let count = xor.count_ones();
```

**TypeScript / JavaScript** — no direct `POPCNT` built-in. `Math.clz32()` exists for leading zeros but not popcount. Brian Kernighan's is the standard approach here. For this problem's constraints it's fast enough.

---

### The Broader Lesson

> The fastest algorithm on paper isn't always the fastest in practice. Runtime overhead, interpreter design, and compiler optimisation capabilities all affect which implementation wins. Always prefer built-ins when they map to a hardware instruction — they're faster, shorter, and more readable.

---

---

## Case Study: Reverse Degree of a String — Loop and Allocation Overhead

**Problem:** [3498. Reverse Degree of a String](https://leetcode.com/problems/reverse-degree-of-a-string/)

A simple single-pass string problem that reveals surprising differences in how each language handles loop constructs and character access under the hood.

---

### The Approaches

**Destructured assignment + for...of (TypeScript — unoptimized)**
```typescript
function reverseDegree(s: string): number {
    let [sum, idx] = [0, 1]
    for (const ch of s) {
        sum += idx * (123 - ch.charCodeAt(0))
        idx += 1
    }
    return sum
}
```

**Direct index access (TypeScript — optimized)**
```typescript
function reverseDegree(s: string): number {
    let sum = 0;
    for (let i = 1; i <= s.length; i++) {
        sum += i * (123 - s[i-1].charCodeAt(0))
    }
    return sum
}
```

---

### What I Found

**TypeScript / JavaScript** — Two hidden costs in the unoptimized version:

- `let [sum, idx] = [0, 1]` — array destructuring allocates a temporary array on the heap before immediately discarding it. For a hot path this is unnecessary GC pressure. Two separate `let` declarations are cheaper.
- `for (const ch of s)` — iterating a string with `for...of` in JavaScript allocates a **new string object** for each character on every iteration since strings are immutable objects. Direct index access with `s[i]` avoids that allocation entirely since it reads from the existing string buffer.

**Go** — Direct index access `s[i]` reads raw bytes from the underlying array without allocation, same reasoning as TypeScript. A `range` loop over a string in Go actually decodes UTF-8 runes on each iteration which adds overhead for ASCII-only problems — byte indexing is faster when you know the input is ASCII.

```go
// Faster for ASCII — direct byte access, no rune decoding
for i := 1; i <= len(s); i++ {
    sum += i * (123 - int(s[i-1]))
}
```

**Rust** — Manual index loops are discouraged in Rust not just for style but for performance. Iterator methods like `.iter().enumerate()` give the compiler additional guarantees — most notably that bounds checks can be eliminated since the iterator tracks its own position safely. A manual index loop requires bounds checking on every access unless the compiler can prove it's safe, which it can't always do. `.as_bytes()` is also preferred over `.chars()` for ASCII strings since it avoids UTF-8 decoding overhead.

```rust
// Idiomatic and compiler-friendly — bounds checks eliminated
for (i, &b) in s.as_bytes().iter().enumerate() {
    sum += (i as i32 + 1) * (123 - b as i32)
}
```

**Python** — `for ch in s` is the idiomatic and fastest way to iterate a string in Python. Unlike JavaScript, Python's `for...in` on a string does not allocate new string objects per iteration in CPython — characters are returned as views into the existing string object. Enumerate is also zero-cost compared to a manual counter.

---

### The Broader Lesson

> The same loop construct carries different costs in different languages. What looks like equivalent code can differ significantly in allocation behaviour, bounds checking, and compiler optimisation opportunities. Prefer index access in JS/Go for ASCII strings, iterator methods in Rust for compiler guarantees, and trust Python's `for...in` — it's already optimised at the C level.

---

---

## Case Study: Valid Parentheses — Option Type vs Explicit Empty Check

**Problem:** [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

When popping from a stack and validating the result, most languages require two separate checks — one for an empty stack and one for a value mismatch. Rust's `Option` type collapses both into a single expression.

---

### The Problem

When encountering a closing bracket, two things can go wrong:
1. The stack is empty — no opener to match against
2. The top of the stack doesn't match the expected closer

In most languages these are handled as two separate conditions:

**Python**
```python
if not stack or stack[-1] != expected:
    return False
stack.pop()
```

**Go**
```go
if len(stack) == 0 || stack[len(stack)-1] != c {
    return false
}
stack = stack[:len(stack)-1]
```

Both require an explicit empty check before accessing the top element, otherwise you risk an index error or panic.

---

### The Rust Approach

Rust's `Vec::pop()` returns `Option<T>` — `Some(value)` if the stack has an element, `None` if it's empty. This means both failure cases map to the same condition:

```rust
if stack.pop() != Some(c) {
    return false
}
```

- Empty stack → `pop()` returns `None` → `None != Some(c)` → `true` → return false ✅
- Wrong closer → `pop()` returns `Some(wrong)` → `Some(wrong) != Some(c)` → `true` → return false ✅
- Correct closer → `pop()` returns `Some(c)` → `Some(c) != Some(c)` → `false` → continue ✅

The element is also consumed by `pop()` in the same operation — no separate pop step needed unlike Python and Go where the pop and the check are two lines.

---

### The Broader Lesson

> Rust's `Option` type isn't just a null-safety mechanism — it's a tool for collapsing multiple failure conditions into a single comparison. Wherever you would write `if empty or mismatch` in another language, Rust lets you write `if pop() != Some(expected)`. Fewer branches means fewer bugs and cleaner intent.

This pattern generalises to any situation where you pop from a stack and validate the result — linked list operations, expression parsers, backtracking algorithms, and more.

---

## Case Study: Minimum Add to Make Parentheses Valid — `.chars()` vs `.as_bytes()` in Rust

**Problem:** [921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)  
**Also seen in:** [3498. Reverse Degree of a String](https://leetcode.com/problems/reverse-degree-of-a-string/)

When iterating over a string in Rust, the default instinct is `.chars()`. For ASCII-only inputs, `.as_bytes()` is consistently faster and gives the compiler more to work with.

---

### The Difference

**`.chars()`** — decodes the string as UTF-8 on every iteration, yielding `char` values (4 bytes each in Rust). UTF-8 decoding adds overhead since multi-byte characters must be handled even when the input is guaranteed to be single-byte ASCII.

**`.as_bytes()`** — treats the string as a raw byte slice `&[u8]`, yielding `u8` values (1 byte each). No decoding step, no multi-byte handling, direct memory access.

```rust
// .chars() — UTF-8 decoded, char = 4 bytes
for c in s.chars() {
    if c == '(' { ... }
}

// .as_bytes() — raw bytes, u8 = 1 byte, no decoding
for &c in s.as_bytes() {
    match c {
        b'(' => { ... }
        _    => { ... }
    }
}
```

---

### Why It's Faster

- No UTF-8 boundary checking per character
- `u8` is 1 byte vs `char` which is 4 bytes — better cache utilisation
- The compiler can apply SIMD vectorisation more aggressively on a flat byte slice than on a decoded char iterator
- Tighter loop body enables more aggressive inlining and unrolling

---

### When to Use It

Safe to use whenever the input is guaranteed ASCII — which covers the majority of LeetCode string problems:
- Parentheses strings `( )`
- Lowercase letter strings `a-z`
- Digit strings `0-9`
- Mixed ASCII like `a-z`, `A-Z`, `0-9`

**Do not use** when the input may contain non-ASCII Unicode characters — `.as_bytes()` would split multi-byte characters across iterations and produce incorrect results. Use `.chars()` in those cases.

---

### Pattern

```rust
// For ASCII-only inputs — prefer this
for &b in s.as_bytes() {
    match b {
        b'a'..=b'z' => { ... }
        b'0'..=b'9' => { ... }
        b'('        => { ... }
        _           => { ... }
    }
}
```

Byte literals use the `b'x'` syntax. Byte ranges use `b'a'..=b'z'`. Both are checked at compile time with no runtime cost.

---

### The Broader Lesson

> In Rust, string iteration is not free. `.chars()` is the safe default for Unicode correctness but carries decoding overhead. For problems where the input is guaranteed ASCII — which is most competitive programming problems — `.as_bytes()` is the correct choice: faster, smaller memory footprint, and more compiler-friendly. Always match the abstraction level to what the input actually requires.

*More case studies will be added as I encounter them.*