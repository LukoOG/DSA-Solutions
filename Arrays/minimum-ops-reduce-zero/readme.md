# Minimum Operations to Reduce X to Zero

**Platform:** LeetCode — [Problem 1658](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)  
**Difficulty:** Medium  
**Topic:** Arrays, Sliding Window, Prefix Sum, Hash Map

---

## Problem

Given an integer array `nums` and an integer `x`, return the minimum number of operations to reduce `x` to zero by removing elements from the left or right of the array. Return `-1` if impossible. Each removal counts as one operation.

**Example:**

Input: nums = [1, 1, 4, 2, 3], x = 5
Output: 2


---

## Approach — Sliding Window (Reframe as Longest Subarray)

Removing elements from both ends to sum to `x` is equivalent to finding the **longest subarray in the middle whose sum equals `total - x`**. The answer is then `len(nums) - max_len`.

This reframe converts the problem into a standard variable-size sliding window. Set `target = sum(nums) - x`. If `target < 0` the entire array sums to less than `x` — return `-1` immediately.

Two pointers `left` and `right` define the current window. `right` expands the window on every iteration. When `current_sum` exceeds `target`, shrink from the left with a `while` loop until the sum is valid again. When `current_sum == target`, update `max_len` with the current window size.

### Pseudocode
```python
function minOperations(nums, x):
target = sum(nums) - x
if target < 0: return -1

current_sum = 0
left        = 0
max_len     = -1

for right from 0 to len(nums) - 1:
    current_sum += nums[right]

    while current_sum > target and left <= right:
        current_sum -= nums[left]
        left++

    if current_sum == target:
        max_len = max(max_len, right - left + 1)

return len(nums) - max_len if max_len != -1 else -1
```
- **Time:** O(n)
- **Space:** O(1)

---

## Key Insight

The reframe from "remove from both ends" to "find longest middle subarray" is the unlock. Direct simulation of removals from both ends leads to O(n²) or worse. Recognising that what remains after removals is a contiguous subarray reduces it to a classic sliding window in O(n).

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/min_operations_x.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/minOperationsX.ts` |
| Go | `go/min_operations_x.go` |

---

## Running Locally

**Python**
```bash
python3 min_operations_x.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx minOperationsX.ts
```

**Go**
```bash
go run min_operations_x.go
```