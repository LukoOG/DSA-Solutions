# Minimum Distance to the Target Element

**Platform:** LeetCode — [Problem 1848](https://leetcode.com/problems/minimum-distance-to-the-target-element/)  
**Difficulty:** Easy  
**Topic:** Arrays, Linear Search

---

## Problem

Given an integer array `nums`, a target value, and a start index, return the minimum absolute distance between `start` and any index where `nums[i] == target`.

**Example:**
Input:  nums = [1, 2, 3, 4, 5], target = 5, start = 3
Output: 2

---

## Approach — Linear Scan with Running Minimum

I initialize a value to track the minimum distance based on the language used's paradigm, then iterate through the array, and for every index where the value matches the target, I compute the absolute distance from `start`. I track the minimum distance seen so far with the min helper of the language and return it at the end.

- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/min_distance.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/minDistance.ts` |

---

## Running Locally

**Python**
```bash
python min_distance.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx minDistance.ts
```
