# Longest Consecutive Sequence

**Platform:** LeetCode — [Problem 128](https://leetcode.com/problems/longest-consecutive-sequence/)  
**Difficulty:** Medium  
**Topic:** Arrays, Hash Set

---

## Problem

Given an unsorted array of integers, return the length of the longest consecutive sequence. The solution must run in O(n) time.

**Example:**

Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4


---

## Approach — Hash Set with Sequence Start Detection

Load all numbers into a hash set for O(1) lookup. Then iterate through the set and for each number check if `num - 1` is absent from the set — if it is, this number is the **start of a sequence**. From there, walk forward incrementing `current_number` as long as consecutive numbers exist in the set, tracking the length.

The critical optimization is the `num - 1` check. Without it, every number triggers an inner while loop, causing O(n²) behaviour in the worst case — the TLE. With it, the inner while loop only runs from genuine sequence starts, so each number is visited at most twice across the entire traversal: once in the outer loop and once in an inner walk. This keeps the overall complexity at O(n).

### Pseudocode

function longestConsecutive(nums):
num_set = set of all nums
longest = 0

for num in num_set:
    if (num - 1) not in num_set:    // num is a sequence start
        current_number  = num
        current_longest = 0

        while current_number in num_set:
            current_number++
            current_longest++

        longest = max(longest, current_longest)

return longest

- **Time:** O(n)
- **Space:** O(n)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/longest_consecutive.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/longestConsecutive.ts` |
| Go | `go/longest_consecutive.go` |

---

## Running Locally

**Python**
```bash
python3 longest_consecutive.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx longestConsecutive.ts
```

**Go**
```bash
go run longest_consecutive.go
```