# Product of Array Except Self

**Platform:** LeetCode — [Problem 238](https://leetcode.com/problems/product-of-array-except-self/)  
**Difficulty:** Medium  
**Topic:** Arrays, Prefix Product

---

## Problem

Given an integer array `nums`, return an array `answer` where `answer[i]` is the product of all elements except `nums[i]`. You must solve it in O(n) time without using division.

**Example:**

Input: nums = [1, 2, 3, 4]
Output: [24, 12, 8, 6]


---

## Approach — Prefix and Suffix Running Product

For each index `i`, the answer is the product of everything to its left multiplied by the product of everything to its right. Rather than precomputing and storing both a full prefix array and a full suffix array, a single output array is filled in two passes using running product variables.

**First pass (left to right)** — fill `ans[i]` with the product of all elements to the left of `i`. A running `prefix` variable starts at `1` (nothing to the left of index 0) and accumulates as it goes, so each position gets its prefix product before `prefix` absorbs `nums[i]`.

**Second pass (right to left)** — multiply `ans[i]` by the product of all elements to the right of `i` using a running `suffix` variable, the mirror of the first pass. By the end, each `ans[i]` holds `prefix[i] * suffix[i]` — the product of everything except itself.

This avoids storing a full suffix array, keeping extra space to O(1) beyond the output array.

### Pseudocode
```
function productExceptSelf(nums):
    n = length of nums
    ans = array of size n

    prefix = 1
    for i from 0 to n - 1:
        ans[i]  = prefix
        prefix *= nums[i]

    suffix = 1
    for i from n - 1 down to 0:
        ans[i] *= suffix
        suffix *= nums[i]

    return ans
```


- **Time:** O(n)
- **Space:** O(1) — output array doesn't count toward space complexity

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/product_except_self.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/productExceptSelf.ts` |
| Go | `go/product_except_self.go` |

---

## Running Locally

**Python**
```bash
python3 product_except_self.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx productExceptSelf.ts
```

**Go**
```bash
go run product_except_self.go
```