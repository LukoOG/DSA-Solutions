# Valid Parentheses

**Platform:** LeetCode — [Problem 20](https://leetcode.com/problems/valid-parentheses/)  
**Difficulty:** Easy  
**Topic:** Stack, Strings

---

## Problem

Given a string `s` containing only `(`, `)`, `[`, `]`, `{`, `}`, return `true` if the string is valid. A string is valid if every opening bracket is closed by the same type of bracket in the correct order.

**Example:**

Input: s = "()[]{}"
Output: true


---

## Approach — Stack with Two Map Strategies

The core idea across all languages is the same — use a stack to track expected closing brackets. The implementation splits into two strategies depending on what the map stores.

**Strategy 1 — Map closing → opening (Python, TypeScript)**
The map stores `closing: opening` pairs. When a closing bracket is encountered, check if the top of the stack holds its matching opener. If the stack is empty or the top doesn't match, return `false`. Otherwise pop. Opening brackets are pushed as-is.

The empty stack guard `not stack` must come before `stack[-1]` to avoid an index error on an empty stack — short-circuit evaluation handles this cleanly.

**Strategy 2 — Map opening → closing (Go, Rust)**
The map stores `opening: closing` pairs. When an opening bracket is encountered, push its expected closer onto the stack directly. When any other character is encountered it must be a closing bracket — pop from the stack and verify it matches. This eliminates the need to look up the map on closing brackets since the expected closer was already pushed.

Rust takes this further with a `match` expression, handling the three opening brackets explicitly and using `stack.pop() != Some(c)` for the closing check. `pop()` returns `Option<char>` — comparing against `Some(c)` handles both the empty stack case (returns `None`) and the mismatch case in a single expression, eliminating the need for a separate empty check.

### Pseudocode

```
// Strategy 1 — closing → opening map (Python)
function isValid(s):
brackets = { ')':'(', '}':'{', ']':'[' }
stack = []

for char in s:
    if char in brackets:
        if not stack or brackets[char] != stack[-1]:
            return false
        stack.pop()
    else:
        stack.push(char)

return stack is empty
```
```
// Strategy 2 — opening → closing map (Go)
function isValid(s):
brackets = { '(':')', '{':'}', '[':']' }
stack = []

for char in s:
    if char is opening bracket:
        stack.push(brackets[char])  // push expected closer
    else:
        if stack is empty or stack.pop() != char:
            return false

return stack is empty
```
- **Time:** O(n)
- **Space:** O(n)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/valid_parentheses.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/validParentheses.ts` |
| Go | `go/valid_parentheses.go` |

---

## Running Locally

**Python**
```bash
python3 valid_parentheses.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx validParentheses.ts
```

**Go**
```bash
go run valid_parentheses.go
```