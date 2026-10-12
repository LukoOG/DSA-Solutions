# Counting Bits

**Platform:** LeetCode — [Problem 338](https://leetcode.com/problems/counting-bits/)  
**Difficulty:** Easy  
**Topic:** Arrays, Bit Manipulation, Dynamic Programming

---

## Problem

Given an integer `n`, return an array `ans` of length `n + 1` where `ans[i]` is the number of `1` bits in the binary representation of `i`.

**Example:**

Input: n = 5
Output: [0, 1, 1, 2, 1, 2]


---

## Approach — Dynamic Programming with Bit Shift

Rather than computing the popcount of every number from scratch, previously computed results are reused. The recurrence is:

dp[i] = dp[i >> 1] + (i & 1)


`i >> 1` right-shifts `i` by one bit — equivalent to integer division by 2 — which drops the least significant bit. The number of set bits in `i >> 1` has already been computed and stored. Adding `i & 1` accounts for whether the dropped bit was a `1` or a `0`. The base case `dp[0] = 0` is given since zero has no set bits.

For example:
```
dp[0] = 0
dp[1] = dp[0] + 1 = 1 (1 >> 1 = 0, 1 & 1 = 1)
dp[2] = dp[1] + 0 = 1 (2 >> 1 = 1, 2 & 1 = 0)
dp[3] = dp[1] + 1 = 2 (3 >> 1 = 1, 3 & 1 = 1)
dp[4] = dp[2] + 0 = 1 (4 >> 1 = 2, 4 & 1 = 0)
dp[5] = dp[2] + 1 = 2 (5 >> 1 = 2, 5 & 1 = 1)
```

### Pseudocode
```python
function countBits(n):
dp = array of size n+1, all zeros

for i from 1 to n:
    dp[i] = dp[i >> 1] + (i & 1)

return dp
```
- **Time:** O(n)
- **Space:** O(1) — output array doesn't count toward space complexity

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/counting_bits.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/countingBits.ts` |
| Go | `go/counting_bits.go` |

---

## Running Locally

**Python**
```bash
python3 counting_bits.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx countingBits.ts
```

**Go**
```bash
go run counting_bits.go
```