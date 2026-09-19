# Valid Anagram

**Platform:** LeetCode — [Problem 242](https://leetcode.com/problems/valid-anagram/)  
**Difficulty:** Easy  
**Topic:** Hash Map, Strings, Sorting

---

## Problem

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s` and `false` otherwise. An anagram uses all the original letters exactly once in a different order.

**Example:**

Input: s = "anagram", t = "nagaram"
Output: true


---

## Approach — Frequency Array (Python, TS, Go) / HashMap fold (Rust)

An early length check short-circuits the comparison immediately for strings of different sizes.

I used a single frequency array of 26 for Python, Ts and Go. Both strings are iterated simultaneously using zip — incrementing the count for each character in `s` and decrementing for each character in `t`. If the strings are anagrams, every increment is cancelled by a corresponding decrement, leaving all zeros. The array is compared against a zero-filled target at the end.

For Rust, each string is folded into a `HashMap` mapping bytes to their frequency counts. The two maps are then compared directly using Rust's derived `PartialEq` on `HashMap`. A separate frequency array approach would also work in Rust, but the HashMap fold is idiomatic and performance is already optimal.

### Pseudocode
```
function isAnagram(s, t):
if len(s) != len(t):
return false

frequency = int array of size 26, all zeros
target    = int array of size 26, all zeros

for each (s_char, t_char) in zip(s, t):
    frequency[s_char - 'a']++
    frequency[t_char - 'a']--

return frequency == target
```


- **Time:** O(n)
- **Space:** O(1) — at most 26 keys for lowercase letters

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/valid_anagram.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/validAnagram.ts` |
| Go | `go/valid_anagram.go` |

---

## Running Locally

**Python**
```bash
python3 valid_anagram.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx validAnagram.ts
```

**Go**
```bash
go run valid_anagram.go
```