# Number of 1 Bits

**Platform:** LeetCode — [Problem 191](https://leetcode.com/problems/number-of-1-bits/)  
**Difficulty:** Easy  
**Topic:** Bit Manipulation

---

## Problem

Given a positive integer `n`, return the number of set bits (1s) in its binary representation. This is also known as the Hamming weight.

**Example:**

Input: n = 11
Output: 3
Reason: 11 in binary is 1011, which has three 1 bits


---

## Approach — Three Iterations

### Solution 1 — Division and Remainder (Rust)
The most explicit approach. Repeatedly divide by 2 and check the remainder — a remainder of 1 means the current least significant bit is set. Count those remainders until `n` reaches zero.

### Solution 2 — Bitwise Shift
A cleaner version of the same idea using bit operations. `n & 1` checks the least significant bit directly, and `n >>= 1` shifts right to expose the next bit. Eliminates the division arithmetic of Solution 1.

### Solution 3 — Brian Kernighan's Algorithm
The most optimal approach. `n & (n - 1)` clears the lowest set bit in a single operation, so the loop only runs as many times as there are set bits rather than iterating through every bit position. For sparse bit patterns this is significantly faster.

### Pseudocode
```
// Solution 1 — Division
function hammingWeight(n):
    count = 0
    while n > 0:
        remainder = n % 2
        if remainder == 1:
            count++
        n = n / 2
    return count
```
```
// Solution 2 — Bitwise Shift
function hammingWeight(n):
    count = 0
    while n > 0:
        count += n & 1
        n >>= 1
    return count
```
```
// Solution 3 — Brian Kernighan
function hammingWeight(n):
    count = 0
    while n != 0:
        n = n & (n - 1)
        count++
    return count
```

- **Time:** O(1) — at most 32 iterations for Solutions 1 and 2; at most 32 for Solution 3 but proportional to set bits
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/hamming_weight.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/hammingWeight.ts` |
| Go | `go/hamming_weight.go` |

---

## Running Locally

**Python**
```bash
python3 hamming_weight.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx hammingWeight.ts
```

**Go**
```bash
go run hamming_weight.go
```