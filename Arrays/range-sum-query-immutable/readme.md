# Range Sum Query - Immutable

**Platform:** LeetCode — [Problem 303](https://leetcode.com/problems/range-sum-query-immutable/)  
**Difficulty:** Easy  
**Topic:** Arrays, Prefix Sum, Design

---

## Problem

Given an integer array `nums`, handle multiple queries of the form `sumRange(left, right)` which returns the sum of elements between indices `left` and `right` inclusive. The array does not change after initialization.

**Example:**

Input: nums = [-2, 0, 3, -5, 2, -1]
sumRange(0, 2) → 1
sumRange(2, 5) → -1
sumRange(0, 5) → -3


---

## Approach — Prefix Sum with Sentinel

Build a prefix sum array of size `n + 1` in the constructor, where `prefix[i]` holds the sum of all elements from index `0` to `i-1`. A leading `0` sentinel at `prefix[0]` eliminates the need for a boundary check when `left == 0`.

Any range sum `[left, right]` is then answered in O(1) as:

prefix[right + 1] - prefix[left]


The `+1` offset on `right` accounts for the sentinel shift — `prefix[right+1]` holds the cumulative sum up to and including `right`, and `prefix[left]` holds everything before `left`. Their difference is exactly the sum of the range.

### Pseudocode
```python
class NumArray:
function init(nums):
prefix = array of size len(nums) + 1, all zeros
for i, num in enumerate(nums):
prefix[i+1] = prefix[i] + num

function sumRange(left, right):
    return prefix[right + 1] - prefix[left]
```
- **Init Time:** O(n)
- **Query Time:** O(1)
- **Space:** O(n)

---

## Key Insight

Without prefix sums each `sumRange` call would scan the subarray in O(n). By paying O(n) once at construction, every subsequent query is O(1) — this is the fundamental trade-off of prefix sums: upfront preprocessing for constant-time range queries.

The sentinel zero at `prefix[0]` is the clean trick — it means `prefix[right+1] - prefix[left]` works uniformly for all values of `left` including `0`, with no special case needed.

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/range_sum_query.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/rangeSumQuery.ts` |
| Go | `go/range_sum_query.go` |

---

## Running Locally

**Python**
```bash
python3 range_sum_query.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx rangeSumQuery.ts
```

**Go**
```bash
go run range_sum_query.go
```