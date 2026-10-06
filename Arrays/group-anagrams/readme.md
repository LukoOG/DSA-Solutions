# Group Anagrams

**Platform:** LeetCode — [Problem 49](https://leetcode.com/problems/group-anagrams/)  
**Difficulty:** Medium  
**Topic:** Arrays, Hash Map, Sorting, Strings

---

## Problem

Given an array of strings `strs`, group all anagrams together and return them as a list of groups. The order of the output does not matter.

**Example:**

Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat","tea","ate"],["tan","nat"],["bat"]]


---

## Approach — Sorted String as Hash Map Key

Sorting any anagram always produces the same string — `"eat"`, `"tea"`, and `"ate"` all sort to `"aet"`. This sorted form is used as a key in a hash map where the value is a list of all strings that share that key. Iterating through `strs`, each string is sorted and appended to its corresponding group. The values of the map are returned as the final result.

### Pseudocode
```
function groupAnagrams(strs):
tab = defaultdict(list)

for s in strs:
    key = sorted(s).join("")
    tab[key].append(s)

return list of tab.values()
```
- **Time:** O(n · k log k) where n is the number of strings and k is the max string length
- **Space:** O(n · k)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/group_anagrams.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/groupAnagrams.ts` |
| Go | `go/group_anagrams.go` |

---

## Running Locally

**Python**
```bash
python3 group_anagrams.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx groupAnagrams.ts
```

**Go**
```bash
go run group_anagrams.go