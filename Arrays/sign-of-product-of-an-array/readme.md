# Sign of the Product of an Array

**Platform:** LeetCode — [Problem 1822](https://leetcode.com/problems/sign-of-the-product-of-an-array/)  
**Difficulty:** Easy  
**Topic:** Arrays, Math

---

## Problem

Given an integer array `nums`, return `1` if the product of all elements is positive, `-1` if negative, and `0` if zero. Computing the actual product is not required.

**Example:**

Input: nums = [-1, -2, -3, -4, 3, 2, 1]
Output: 1


---

## Approach — Sign Tracking with Early Exit

Initialize a sign variable to `1`. Iterate through the array — if a zero is encountered, return `0` immediately since the product is zero regardless of everything else. For each negative number, flip the sign by multiplying by `-1`. Positive numbers leave the sign unchanged. Return the sign at the end.

The key insight is that the actual product never needs to be computed — only its sign matters, and that is fully determined by the count of negative numbers and the presence of any zero.

### Pseudocode
```
function arraySign(nums):
    sign = 1

    for num in nums:
        if num == 0:
            return 0
        if num < 0:
            sign = -1 * sign

    return sign
```
- **Time:** O(n)
- **Space:** O(1)


---

## Implementations

| Language | File |
|----------|------|
| Python | `python/array_sign.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/arraySign.ts` |
| Go | `go/array_sign.go` |

---

## Running Locally

**Python**
```bash
python3 array_sign.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx arraySign.ts
```

**Go**
```bash
go run array_sign.go
```