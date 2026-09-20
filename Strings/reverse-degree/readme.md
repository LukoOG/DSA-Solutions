# Reverse Degree of a String

**Platform:** LeetCode — [Problem 3498](https://leetcode.com/problems/reverse-degree-of-a-string/)  
**Difficulty:** Easy  
**Topic:** Strings, Math

---

## Problem

Given a string `s`, return its reverse degree. The reverse degree is calculated by summing `(i + 1) * reverse_value(s[i])` for each character, where the reverse value of a letter is its position from the end of the alphabet — `'a'` has reverse value `26`, `'z'` has reverse value `1`.

**Example:**

Input: s = "abc"
Output: 148


---

## Approach — Single Pass with Reverse Alphabet Mapping

Iterate through the string with an index. For each character, compute its reverse alphabet value as `123 - ord(char)` — since `ord('a') = 97`, this gives `123 - 97 = 26` for `'a'` and `123 - 122 = 1` for `'z'`. Multiply that by the 1-based position `i + 1` and accumulate into a running sum.

### Pseudocode
```
function reverseDegree(s):
    sum = 0
    for i, char in enumerate(s):
        sum += (i + 1) * (123 - ord(char))
    return sum
```

- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/reverse_degree.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/reverseDegree.ts` |
| Go | `go/reverse_degree.go` |

---

## Running Locally

**Python**
```bash
python3 reverse_degree.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx reverseDegree.ts
```

**Go**
```bash
go run reverse_degree.go
```