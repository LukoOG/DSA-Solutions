# Minimum Add to Make Parentheses Valid

**Platform:** LeetCode — [Problem 921](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)  
**Difficulty:** Medium  
**Topic:** Stack, Strings, Greedy

---

## Problem

Given a string `s` of parentheses, return the minimum number of parentheses that must be added to make the string valid. Every opening bracket must have a matching closing bracket in the correct order.

**Example:**

Input: s = “())”
Output: 1


---

## Approach — Open and Close Counters

Two counters track the two independent problems simultaneously. `close_needed` counts unmatched opening brackets that still need a closing bracket. `open_needed` counts unmatched closing brackets that needed an opening bracket before them.

On each character — if it's `(`, increment `close_needed` since a closer is now required. If it's `)`, decrement `close_needed` if a match is available, otherwise increment `open_needed` since no opener exists to match it. The answer is the sum of both counters — the total additions needed in each direction.

This is equivalent to a stack-based solution but reduces to O(1) space since only counts are needed rather than the actual characters.

### Pseudocode
```python
function minAddToMakeValid(s):
open_needed = 0
close_needed = 0

for char in s:
    if char == '(':
        close_needed++
    else:
        if close_needed > 0:
            close_needed--
        else:
            open_needed++

return open_needed + close_needed
```
- **Time:** O(n)
- **Space:** O(1)

---

### Language Note — Rust

`.as_bytes()` is used instead of `.chars()` for iteration. Since the input is guaranteed to contain only ASCII parentheses, byte iteration is safe and gives the compiler stronger guarantees — no UTF-8 decoding overhead and tighter loop optimisation opportunities. The match arm uses `b'('` (a byte literal) instead of `'('` (a char literal) accordingly.

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/min_add_parentheses.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/minAddParentheses.ts` |
| Go | `go/min_add_parentheses.go` |

---

## Running Locally

**Python**
```bash
python3 min_add_parentheses.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx minAddParentheses.ts
```

**Go**
```bash
go run min_add_parentheses.go
```