# Roman to Integer

**Platform:** LeetCode — [Problem 13](https://leetcode.com/problems/roman-to-integer/)  
**Difficulty:** Easy  
**Topic:** Hash Map, Strings, Math

---

## Problem

Given a roman numeral string `s`, convert it to an integer. Roman numerals follow the subtractive notation — for example `IV` = 4 and `IX` = 9.

**Example:**
Input:  s = "MCMXCIV"
Output: 1994

---

## Approach — Single Pass with Lookahead

The pattern with roman numerals is that from left to right, the current numeral as a base of 10 is greated than the next, cases where this isn't true like IX(9) or IV(5), etc, we have to subtract between the small base and larger base. So we keep adding in a single pass if the next value is smaller than where we are, but if the next value is bigger, we subtract instead.

### Pseudocode
function romanToInt(s):
result = 0
n = length of s
for i in range(n):
    if i+1 < n and roman[s[i]] < roman[s[i+1]]:
        result -= roman[s[i]]
    else:
        result += roman[s[i]]

return result

- **Time:** O(n)
- **Space:** O(1) — the roman map is fixed size (7 entries)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/roman_to_int.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/romanToInt.ts` |

---

## Running Locally

**Python**
```bash
python3 roman_to_int.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx romanToInt.ts
```