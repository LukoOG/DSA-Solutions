# Mirror Distance of an Integer

**Platform:** LeetCode — [Problem 3783](https://leetcode.com/problems/mirror-distance-of-an-integer/)  
**Difficulty:** Easy  
**Topic:** Math

---

## Problem

Given an integer `n`, return its mirror distance defined as `abs(n - reverse(n))`, where `reverse(n)` is the integer formed by reversing the digits of `n`. Leading zeros are omitted after reversing — for example `reverse(10) = 1`.

**Example:**
Input:  n = 25
Output: 27

---

## Approach — Digit Reversal with While Loop

The solution is rather straightforward. Rather than using converting the number to a string and reversing the string which is a common approach. Instead, we use the arithmetic operation to reverse a number. Performing arithmetic operations are way less computationally expensive than working on strings. We then return the absolute value of the difference between the number and it's reverse.

### Pseudocode
function mirrorDistance(n):
reverse = 0
number  = n
while n > 0:
    reverse = (reverse * 10) + (n % 10)
    n = n // 10

return |number - reverse|

- **Time:** O(log n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/mirror_distance.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/mirrorDistance.ts` |

---

## Running Locally

**Python**
```bash
python3 mirror_distance.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx mirrorDistance.ts
```