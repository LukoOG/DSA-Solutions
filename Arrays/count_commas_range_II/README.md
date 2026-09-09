# Count Commas in Range II

**Platform:** LeetCode — [Problem 3871](https://leetcode.com/problems/count-commas-in-range-ii/)  
**Difficulty:** Medium  
**Topic:** Math

---

## Problem

Given an integer `n`, return the total number of commas used when writing all integers from `[1, n]` inclusive in standard number formatting. A comma is inserted after every three digits from the right. Numbers with fewer than 4 digits contain no commas.

**Example:**

Input: n = 1002
Output: 3


---

## Approach — Boundary-Based Comma Counting

Commas in standard number formatting appear at every power of 1000 boundary:
- `[1,000 – 999,999]` → 1 comma each (1st boundary)
- `[1,000,000 – 999,999,999]` → 2 commas each (2nd boundary)
- and so on...

The key insight is that the number of commas a number has equals which boundary it falls into — its highest power of 1000. So for any `n`, we first determine that power by repeatedly dividing by 1000 until the result is less than 1000.

Once we know which boundary `n` lives in, we can observe that all previous boundaries are fully contained in `[1, n]`, meaning their comma counts are fixed and can be computed directly. For boundary `i`, the total commas contributed is the count of integers in that boundary multiplied by `i` — since every integer in boundary `i` has exactly `i` commas. The count of integers in a complete boundary `i` is `999 × 1000^i`.

For the boundary `n` actually falls in, only a partial range is covered — from the boundary's start up to `n` itself. The count of integers in this partial range is `n - 1000^highest_power + 1`, and each contributes `highest_power` commas.

The final answer is the sum of commas from all fully completed boundaries plus the partial contribution from `n`'s boundary.

### Pseudocode
```
function countCommas(n):
m = n
highest_power = 0

while n > 999:
    n = n // 1000
    highest_power++

// sum commas from all fully completed boundaries below highest_power
previous_commas = 0
for i from 1 to highest_power - 1:
    integers_in_boundary = 999 * (1000^i)
    previous_commas += integers_in_boundary * i

// partial contribution from the boundary n falls into
partial_integers = m - 1000^highest_power + 1
partial_commas   = partial_integers * highest_power

return previous_commas + partial_commas
```
- **Time:** O(log n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/count_commas.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/countCommas.ts` |
| Go | `go/count_commas.go` |

---

## Running Locally

**Python**
```bash
python3 count_commas.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx countCommas.ts
```

**Go**
```bash
go run count_commas.go
```