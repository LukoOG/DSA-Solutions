# Missing Number

**Platform:** LeetCode — [Problem 268](https://leetcode.com/problems/missing-number/)  
**Difficulty:** Easy  
**Topic:** Arrays, Math, Bit Manipulation

---

## Problem

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the one number that is missing.

**Example:**

Input: nums = [3, 0, 1]
Output: 2


---

## Approach — Three Iterations

### Solution 1 — Boolean Visited Array
The most intuitive approach. Build a boolean array of size `n + 1` and mark each number seen. A second pass finds the index that was never marked. Easy to reason about but uses O(n) extra space.

### Solution 2 — Ideal Sum
Compute the expected sum of `[0, n]` using Gauss's formula `n * (n + 1) / 2` and subtract the actual sum of the array. The difference is the missing number. Clean and O(1) space.

### Solution 3 — XOR
The most elegant approach. XOR every index and every value together starting from `n`. Since XOR is self-inverse, every number that appears in both the index sequence and the array cancels out, leaving only the missing number. No arithmetic overflow risk and O(1) space.

### Pseudocode
```
// Solution 1 — Visited Array
function missingNumber(nums):
    arr = bool array of size n+1, all false
    for num in nums:
    arr[num] = true
    for i from 0 to n:
        if arr[i] == false:
        return i
```
```
// Solution 2 — Ideal Sum
function missingNumber(nums):
    n = length of nums
    idealSum = n * (n + 1) / 2
    actualSum = sum of nums
    return idealSum - actualSum
```
```
// Solution 3 — XOR
function missingNumber(nums):
    result = length of nums
    for i from 0 to length - 1:
        result ^= i ^ nums[i]
    return result
```

- **Time:** O(n)
- **Space:** O(n) for Solution 1, O(1) for Solutions 2 and 3

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/missing_number.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/missingNumber.ts` |
| Go | `go/missing_number.go` |

---

## Running Locally

**Python**
```bash
python3 missing_number.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx missingNumber.ts
```

**Go**
```bash
go run missing_number.go
```