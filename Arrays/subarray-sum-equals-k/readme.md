# Subarray Sum Equals K

**Platform:** LeetCode — [Problem 560](https://leetcode.com/problems/subarray-sum-equals-k/)  
**Difficulty:** Medium  
**Topic:** Arrays, Hash Map, Prefix Sum

---

## Problem

Given an integer array `nums` and an integer `k`, return the total number of subarrays whose sum equals `k`.

**Example:**

Input: nums = [1, 1, 1], k = 2
Output: 2


---

## Approach — Prefix Sum with Hash Map

*// come back to fill this in once the intuition clicks*

### Pseudocode
```python
function subarraySum(nums, k):
seen = {0: 1} // sentinel: empty prefix sum seen once
count = 0
curr_sum = 0

for num in nums:
    curr_sum += num
    key = curr_sum - k

    if key in seen:
        count += seen[key]   // each occurrence is a valid subarray start

    seen[curr_sum] = seen.get(curr_sum, 0) + 1

return count
```
- **Time:** O(n)
- **Space:** O(n)

---

## Key Insight

*// come back to fill this in once the intuition clicks*

---

## Why Sliding Window Doesn't Work Here

Sliding window requires that adding elements to the window always increases the sum and removing them always decreases it — a monotonic property. Negative numbers break this since shrinking the window might increase the sum. Prefix sum + hash map handles negatives naturally since it looks backward at stored sums rather than maintaining a live window.

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/subarray_sum_k.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/subarraySumK.ts` |
| Go | `go/subarray_sum_k.go` |

---

## Running Locally

**Python**
```bash
python3 subarray_sum_k.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx subarraySumK.ts
```

**Go**
```bash
go run subarray_sum_k.go
```