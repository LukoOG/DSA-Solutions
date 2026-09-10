# Count Commas in Range

**Platform:** LeetCode — [Problem 3870](https://leetcode.com/problems/count-commas-in-range/)  
**Difficulty:** Easy  
**Topic:** Math

---

## Problem

Given an integer `n`, return the total number of commas used when writing all integers from `[1, n]` inclusive in standard number formatting. A comma is inserted after every three digits from the right. Numbers with fewer than 4 digits contain no commas.

**Example:**

Input: n = 1002
Output: 3


---

## Approach — Direct Formula

Since `n <= 1000^2`, every number in the range has at most one comma — no number reaches the second boundary of `1,000,000`. This means the highest power of 1000 that matters is exactly `1`, and the first boundary starts at `1,000`.

From the generalised formula I derived in Count Commas in Range II:

commas in boundary = (n - 1000^highest_power + 1) * highest_power


Substituting `highest_power = 1`:

commas = (n - 1000 + 1) * 1
= n - 999


Any `n < 1000` would yield a negative result, so we clamp with `max(0, ...)` to handle the no-comma case. The two cases collapse into a single expression.

### Pseudocode

```
function countCommas(n):
    return max(0, n - 999)
```

- **Time:** O(1)
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