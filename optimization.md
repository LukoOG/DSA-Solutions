# Language-Specific Optimization Notes

A running document of interesting optimization differences I've discovered across Python, Rust, TypeScript, and Go while solving the same problems in multiple languages. The same algorithm doesn't always perform the same way across languages — compiler design, runtime overhead, and built-in hardware instruction mappings all play a role.

---

## Case Study: XOR of Array Equal to K — Popcount

**Problem:** [2997. Minimum Number of Operations to Make Array XOR Equal to K](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/)

The second half of this problem reduces to counting the number of set bits (popcount) in an integer. There are several ways to do this and the fastest approach is not the same across languages.

### The Approaches

**Brian Kernighan's Algorithm**

count = 0
while xor != 0:
xor &= xor - 1
count++

Clears the lowest set bit on each iteration, so it only loops as many times as there are set bits. Elegant and efficient in most compiled languages.

**Bitwise Shift**

count = 0
while xor > 0:
count += xor & 1
xor >>= 1

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

*More case studies will be added as I encounter them.*