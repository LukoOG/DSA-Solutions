# Two Sum

**Platform:** LeetCode — [Problem 1](https://leetcode.com/problems/two-sum/)  
**Difficulty:** Easy  
**Topic:** Arrays, Hash Map

---

## Problem

Given an array of integers `nums` and a target integer, return the indices of the two numbers that add up to the target. Each input has exactly one solution and the same element cannot be used twice.

**Example:**
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]

---

## Approach — Single Pass Hash Map

For each number, compute its difference from the target and check if that difference already exists in the map. If it does, the complement was seen earlier and its stored index pairs with the current index to form the answer. If not, store the current number mapped to its index and continue.

### Pseudocode
```
function twoSum(nums, target):
difference_map = {}
for idx, num in nums:
    diff = target - num

    if diff in difference_map:
        return [difference_map[diff], idx]

    difference_map[num] = idx

return -1
```

- **Time:** O(n)
- **Space:** O(n)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/two_sum.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/twoSum.ts` |

---

## Running Locally

**Python**
```bash
python3 two_sum.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx twoSum.ts
```