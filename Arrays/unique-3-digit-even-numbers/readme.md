# Unique 3-Digit Even Numbers

**Platform:** LeetCode — [Problem 3483](https://leetcode.com/problems/unique-3-digit-even-numbers/)  
**Difficulty:** Easy  
**Topic:** Arrays, Hash Set, Enumeration

---

## Problem

Given an array of single digits, return the count of unique 3-digit even numbers that can be formed using three digits from the array. Each digit can only be used as many times as it appears. A valid number must not have a leading zero.

**Example:**

Input: digits = [1, 2, 3]
Output: 12


---

## Approach — Three Pointer Enumeration with Boolean Visited Array

I use three index pointers `i`, `j`, `k` with the invariant that no two pointers share the same index — `i != j`, `i != k`, `j != k`. This ensures each digit is only used as many times as it physically appears in the input array. Then for every valid combination of distinct indices, I construct the 3-digit number as `digits[i] * 100 + digits[j] * 10 + digits[k]`.

A constructed number is valid if:
- It is even (`digit % 2 == 0`)
- It has no leading zero (`digit / 100 > 0`, i.e. the hundreds place is non-zero)
- It hasn't been seen before

Uniqueness is tracked with a boolean visited array of size 1000 rather than a Set. Since 3-digit numbers are bounded to indices 100–999, the array gives O(1) lookup and is more cache-friendly for lower-level compiled languages like Rust and Go.

### Pseudocode
```
function totalNumbers(digits):
vis = bool array of size 1000, all false
count = 0

for i from 0 to len(digits) - 1:
    for j from 0 to len(digits) - 1:
        for k from 0 to len(digits) - 1:
            if i == j or i == k or j == k:
                continue

            digit = digits[i] * 100 + digits[j] * 10 + digits[k]

            if digit % 2 == 0 and digit / 100 > 0 and not vis[digit]:
                vis[digit] = true
                count++

return count
```


- **Time:** O(1) — at most 900 valid 3-digit even numbers to check
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/unique_3digit_even.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/unique3DigitEven.ts` |
| Go | `go/unique_3digit_even.go` |

---

## Running Locally

**Python**
```bash
python3 unique_3digit_even.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx unique3DigitEven.ts
```

**Go**
```bash
go run unique_3digit_even.go
```