# Smallest Index With Digit Sum Equal to Index

**Platform:** LeetCode — [Problem 3550](https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/)  
**Difficulty:** Easy  
**Topic:** Arrays, Math

---

## Problem

Given a 0-indexed integer array `nums`, return the smallest index `i` such that the sum of digits of `nums[i]` equals `i`. If no such index exists, return `-1`.

**Example:**

Input: nums = [1, 3, 2]
Output: 2


---

## Approach — Linear Scan with Early Exit

Iterate through the array left to right. For each index, compute the digit sum of `nums[i]` using a helper function and compare it against `i`. Since the problem asks for the *smallest* index, the first match found is immediately returned without collecting further candidates — no auxiliary array needed.

The digit sum helper repeatedly extracts the last digit with `num % 10`, accumulates it, then strips it with `num / 10` until the number is exhausted.

### Pseudocode
```
function sumOfDigits(num):
    sum = 0
    while num > 0:
        sum += num % 10
        num = num / 10
    return sum

function smallestIndex(nums):
    for i, num in enumerate(nums):
        if i == sumOfDigits(num):
            return i
    return -1
```

- **Time:** O(n · d) where d is the number of digits per element
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/smallest_index.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/smallestIndex.ts` |
| Go | `go/smallest_index.go` |

---

## Running Locally

**Python**
```bash
python3 smallest_index.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx smallestIndex.ts
```

**Go**
```bash
go run smallest_index.go
```