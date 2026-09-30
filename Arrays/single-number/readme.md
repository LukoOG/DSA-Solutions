# Single Number

**Platform:** LeetCode — [Problem 136](https://leetcode.com/problems/single-number/)  
**Difficulty:** Easy  
**Topic:** Arrays, Bit Manipulation

---

## Problem

Given a non-empty array of integers where every element appears twice except for one, find and return the single element. The solution must run in O(n) time and O(1) space.

**Example:**

Input: nums = [4, 1, 2, 1, 2]
Output: 4


---

## Approach — XOR Accumulation

XOR has two properties that make this problem trivial:
- `a ^ a = 0` — any number XORed with itself cancels out
- `a ^ 0 = a` — any number XORed with zero is itself

XOR-ing every element in the array together means every duplicate pair cancels to zero, leaving only the single number. The order of operations doesn't matter since XOR is both commutative and associative.

The accumulator is seeded with `nums[0]` and the loop starts from index `1`, avoiding an unnecessary `0 ^ nums[0]` on the first iteration.

### Pseudocode
```
function singleNumber(nums):
    ans = nums[0]
        for i from 1 to len(nums) - 1:
            ans ^= nums[i]
    return ans
```

- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/single_number.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/singleNumber.ts` |
| Go | `go/single_number.go` |

---

## Running Locally

**Python**
```bash
python3 single_number.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx singleNumber.ts
```

**Go**
```bash
go run single_number.go
```