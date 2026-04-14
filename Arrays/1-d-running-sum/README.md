# 1-D Running Sum

**Platform:** LeetCode — [Problem 1480](https://leetcode.com/problems/running-sum-of-1d-array/)  
**Difficulty:** Easy  
**Topic:** Arrays, Prefix Sum

---

## Problem

Given an array `nums`, return the running sum where `runningSum[i] = sum(nums[0] + nums[1] + ... + nums[i])`.

**Example:**
Input:  [1, 2, 3, 4]
Output: [1, 3, 6, 10]

---

## Approaches

### Solution 1 — New Array
I build a separate result array, preserving the original input.

- **Time:** O(n)
- **Space:** O(n)

### Solution 2 — In-place
Overwrite the input array directly. More space-efficient.

- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/running_sum.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/runningSum.ts` |

---

## Running Locally

**Python**
```bash
python3 running_sum.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx runningSum.ts
```