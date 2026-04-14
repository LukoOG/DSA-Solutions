# Alphabet Rangoli

**Platform:** HackerRank — [Alphabet Rangoli](https://www.hackerrank.com/challenges/alphabet-rangoli/problem)  
**Difficulty:** Easy  
**Topic:** Strings, Pattern Generation

---

## Problem

Given a size `n`, print an alphabet rangoli pattern of size `n`. The rangoli is symmetric both horizontally and vertically, with letters arranged from the outermost ring inward, centered on `'a'`.

**Example (size 3):**
----c----
--c-b-c--
c-b-a-b-c
--c-b-c--
----c----


---

## Approach

I solve this by building the pattern in three parts — top half, middle row, and bottom half — constructed independently then printed in order. In retrospect, I could have just flipped the top half to get the bottom half, but I guess it was fun deriving seperate formulas for both

*// I'll explain fully later if the need arises*

- **Time:** O(n²)
- **Space:** O(n)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/alphabet_rangoli.py` |

---

## Running Locally

**Python**
```bash
python3 alphabet_rangoli.py
```
