# Remove Element

**Platform:** LeetCode — [Problem 27](https://leetcode.com/problems/remove-element/)  
**Difficulty:** Easy  
**Topic:** Arrays, Two Pointers

---

## Problem

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in-place. Return `k` — the number of elements not equal to `val`. The first `k` elements of `nums` must contain the valid elements; the rest of the array does not matter.

**Example:**

Input: nums = [3, 2, 2, 3], val = 3
Output: k = 2, nums = [2, 2, ...]


---

## Approach — Forward Shift with Write Pointer

Rather than swapping elements around, valid elements are shifted to the front of the array using a write pointer `k`. A read pointer `i` scans every element — whenever it finds a value that isn't `val`, it writes it to position `k` and advances `k`. By the end, the first `k` elements hold all valid values in their original order and `k` is returned as the count.

This is cleaner than the two-pointer swap approach because the elements beyond `k` are irrelevant — there's no need to preserve them or swap anything into their place.

### Pseudocode
```
function removeElement(nums, val):
k = 0

for i from 0 to len(nums) - 1:
    if nums[i] != val:
        nums[k] = nums[i]
        k++

return k
```

- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/remove_element.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/removeElement.ts` |
| Go | `go/remove_element.go` |

---

## Running Locally

**Python**
```bash
python3 remove_element.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx removeElement.ts
```

**Go**
```bash
go run remove_element.go
```