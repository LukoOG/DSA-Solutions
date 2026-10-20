# Language-Specific Optimization Notes

A running document of interesting optimization differences I've discovered across Python, Rust, TypeScript, and Go while solving the same problems in multiple languages. The same algorithm doesn't always perform the same way across languages — compiler design, runtime overhead, and built-in hardware instruction mappings all play a role.

Where a case study says "measured", the numbers are best-of-several runs on an Apple Silicon (arm64) Mac — Python 3.14 and Node 24. They show relative differences on one machine, not universal constants.

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
Checks each bit position one at a time, so it loops once per bit up to the highest set bit — `5` (`101`) takes 3 iterations, but any value with bit 31 set takes 32, no matter how few bits are actually set. Kernighan only loops once per *set* bit, which wins for sparse bit patterns.

**Built-in Popcount**
Most languages expose a popcount built-in. Where the CPU supports it — `POPCNT` on x86-64, `CNT` on ARM — the compiler or runtime can turn it into a single hardware instruction. Where it can't, it falls back to a branchless bit trick that still runs in constant time.

---

### What I Found

**Go** — Brian Kernighan's algorithm works well here. The Go compiler won't turn a hand-written bit loop into `POPCNT`, but `math/bits.OnesCount32()` is a compiler intrinsic that uses the hardware instruction when the CPU has it — so it's the faster and clearer choice, even if the difference is small at this problem's input sizes.

**Python** — Brian Kernighan's is far slower than `int.bit_count()` (Python 3.10+). Python's interpreter overhead makes every loop iteration expensive — each `&=` and `-` operation goes through the Python object model. `bit_count()` does the whole count in C in a single call, skipping all of that per-iteration overhead.

Measured over 100,000 random 32-bit integers:

| Approach | Time |
| --- | --- |
| Bitwise shift loop | 154 ms |
| Kernighan loop | 87 ms |
| `int.bit_count()` | 2.8 ms |

`bit_count()` is about 30× faster than Kernighan and 55× faster than the shift loop.

```python
# Slower in Python
count = 0
while xor != 0:
    xor &= xor - 1
    count += 1

# Faster in Python
count = xor.bit_count()
```

**Rust** — the manual Kernighan loop is already fast since Rust compiles to native machine code, but `count_ones()` is still preferred: it states intent, and it lets the compiler pick the best implementation for the target. That is **not** always `POPCNT`. Checking the generated assembly:

- On ARM (e.g. Apple Silicon), `count_ones()` compiles to the `CNT` instruction.
- On a baseline x86-64 target, it compiles to a branchless bit trick — constant time, but no `POPCNT` — because older x86-64 CPUs don't have the instruction.
- On x86-64 with the feature enabled (`-C target-cpu=native` or `-C target-feature=+popcnt`), it becomes a single `POPCNT`.

A manual loop may or may not be recognised and replaced by the optimiser; `count_ones()` always gets the best option available for the CPU you're building for.

```rust
// Idiomatic; a single instruction wherever the target supports one
let count = xor.count_ones();
```

**TypeScript / JavaScript** — no direct `POPCNT` built-in. `Math.clz32()` exists for leading zeros but not popcount. Brian Kernighan's is the standard approach here. For this problem's constraints it's fast enough.

---

### The Broader Lesson

> The fastest algorithm on paper isn't always the fastest in practice. Runtime overhead, interpreter design, and compiler optimisation capabilities all affect which implementation wins. Prefer built-ins: they can map to a hardware instruction where the target supports one, and they're shorter and clearer either way. In interpreted languages the gap is dramatic, because a built-in replaces a whole interpreted loop with one call into C.

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

**Char codes by index (TypeScript — fastest)**
```typescript
function reverseDegree(s: string): number {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += (i + 1) * (123 - s.charCodeAt(i))
    }
    return sum
}
```

---

### What I Found

**TypeScript / JavaScript** — I expected two hidden costs in the unoptimized version, and measuring showed only one of them is real:

- `let [sum, idx] = [0, 1]` — destructuring creates a temporary array, but V8's optimizing compiler removes it once the function is hot. Measured, it made **no difference**. Two plain `let`s are still simpler to read.
- `for (const ch of s)` — this is the real cost. `for...of` runs the string iterator protocol on every step, handling surrogate pairs and producing a one-character string each time. (V8 caches one-character strings for ASCII, so it isn't allocating a new object per character — it's the per-step iterator work that adds up.)
- `s[i].charCodeAt(0)` still builds that one-character string before reading its code. `s.charCodeAt(i)` reads the code unit straight from the string, which halves the time again.

Measured on a 1,000,000-character ASCII string:

| Version | Time |
| --- | --- |
| Destructuring + `for...of` | 8.2 ms |
| Plain `let` + `for...of` | 8.2 ms |
| Index + `s[i].charCodeAt(0)` | 2.6 ms |
| Index + `s.charCodeAt(i)` | 1.3 ms |

**Go** — Direct index access `s[i]` reads a raw byte from the underlying array. A `range` loop over a string decodes UTF-8 runes on each iteration; Go has a fast path for ASCII, so the overhead is small, but byte indexing skips the decode entirely when you know the input is ASCII.

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

**Python** — `for ch in s` is the idiomatic and fastest way to iterate a string in Python. Each step does produce a one-character string, but CPython keeps a cache of these for Latin-1 characters, so for ASCII input it hands back the same cached objects rather than allocating new ones. `enumerate()` is at least as fast as incrementing a counter by hand, and clearer.

---

### The Broader Lesson

> The same loop construct carries different costs in different languages, and the cost isn't always where you expect it — I guessed destructuring was slow and it wasn't; the iterator was. Measure before optimising. For ASCII strings: read char codes by index in JS, bytes by index in Go, iterator methods in Rust for compiler guarantees, and trust Python's `for...in` — it's already optimised at the C level.

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

When iterating over a string in Rust, the default instinct is `.chars()`. For ASCII-only inputs, `.as_bytes()` skips work you don't need and gives the compiler more to work with.

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

- No UTF-8 decoding per character — `.chars()` has to check each byte to see whether a character continues into the next ones
- Each step compares a `u8` directly instead of first assembling a 4-byte `char` value
- A plain byte-slice loop gives the compiler a better chance to vectorise with SIMD than a decoding iterator does
- A tighter loop body enables more aggressive inlining and unrolling

(The string's memory is the same either way — `.chars()` doesn't copy it — so the gain is less work per step, not better cache use.)

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

Byte literals use the `b'x'` syntax and byte ranges use `b'a'..=b'z'`. Both are compile-time constants, so each arm is a plain integer comparison.

---

### The Broader Lesson

> In Rust, string iteration is not free. `.chars()` is the safe default for Unicode correctness but carries decoding overhead. For problems where the input is guaranteed ASCII — which is most competitive programming problems — `.as_bytes()` is the better choice: less work per character and more compiler-friendly. Always match the abstraction level to what the input actually requires.

*More case studies will be added as I encounter them.*