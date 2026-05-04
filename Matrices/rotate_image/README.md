# Rotate Image

**Platform:** LeetCode — [Problem 48](https://leetcode.com/problems/rotate-image/)  
**Difficulty:** Medium  
**Topic:** Arrays, Matrix, Math

---

## Problem

Given an `n x n` 2D matrix representing an image, rotate it 90 degrees clockwise **in-place**.

**Example:**
Input:  [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

---

## Approach — Column Extraction with Copy

After drafting the pattern on paper, I noticed that each row `r` in the rotated matrix is formed by reading column `r` of the original matrix from bottom to top. So row 0 becomes column 0 reversed, row 1 becomes column 1 reversed, and so on.

To avoid overwriting values that are still needed during the transformation, a deep copy of the original matrix is made first. Each row in the result is then built by iterating the corresponding column of the copy decrementally from `n-1` to `0`.

### Pseudocode
```
function rotate(matrix):
n = length of matrix - 1
copy = deep copy of matrix
for each row r in copy:
    newRow = []
    for i from n down to 0:
        newRow.push(copy[i][r])
    matrix[r] = newRow
```

- **Time:** O(n²)
- **Space:** O(n²) — due to the copy

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/rotate_image.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/rotateImage.ts` |

---

## Running Locally

**Python**
```bash
python3 rotate_image.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx rotateImage.ts
```