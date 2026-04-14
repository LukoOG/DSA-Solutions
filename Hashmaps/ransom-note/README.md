# Ransome Note

**Platform:** LeetCode — [Problem 383](https://leetcode.com/problems/ransom-note/)  
**Difficulty:** Easy  
**Topic:** Hash Map, Strings

---

## Problem

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed using the letters from `magazine`. Each letter in `magazine` can only be used once.

**Example:**
Input:  ransomNote = "aa", magazine = "aab"
Output: true

---

## Approach — Frequency Count with Hash Map

I solved this by storing the frequence of each character in magazine in a hashmap, then subtracted by 1 if the character appeared in an iteration through ransome note. If any character count goes below zero or isn't founded, I return false.

- **Time:** O(n + m) where n and m are the lengths of each string
- **Space:** O(1) — at most 26 keys for lowercase letters

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/ransom_note.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/ransomNote.ts` |

---

## Running Locally

**Python**
```bash
python3 ransom_note.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx ransomNote.ts
```