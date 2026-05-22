# Separate the Digits in an Array

**Platform:** LeetCode — [Problem 2553](https://leetcode.com/problems/separate-the-digits-in-an-array/)  
**Difficulty:** Easy  
**Topic:** Arrays, Simulation

---

## Problem

Given an array of positive integers `nums`, return a new array where each digit of every element appears as a separate entry, in the same order as the original elements.

**Example:**
Input:  nums = [13, 25, 32]
Output: [1, 3, 2, 5, 3, 2]

---

## Approach

For each integer of the array, I apply a map to first convert each integer to a string and map that string to return a list of digits, then append the digits to a results array.

### Pseudocode
```
function separateDigits(nums):
    results = for each i in nums:
        result = string(i).map(int)
        yield ...result
    return results

```

- **Time:** O(n · d) where d is the number of digits per element
- **Space:** O(n · d)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/separate_digits.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/separateDigits.ts` |

---

## Running Locally

**Python**
```bash
python3 separate_digits.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx separateDigits.ts
```