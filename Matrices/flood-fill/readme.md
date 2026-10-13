# Flood Fill

**Platform:** LeetCode — [Problem 733](https://leetcode.com/problems/flood-fill/)  
**Difficulty:** Easy  
**Topic:** Array, DFS, BFS, Matrix

---

## Problem

Given an `m x n` image matrix, a starting pixel `(sr, sc)` and a new `color`, flood fill the image — change the color of the starting pixel and all connected pixels of the same original color to the new color. Connected means reachable via up, down, left, or right moves.

**Example:**

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]


---

## Approach — DFS Recursion

Capture the original color at `(sr, sc)` once. If it already equals the new color, return immediately — otherwise the recursion would loop infinitely since painted cells would still match.

A nested `dfs(r, c)` function handles the fill. For each cell it checks bounds, then whether the cell matches the original color. If both pass, it paints the cell to the new color — which simultaneously fills it and marks it visited — then recurses in all four directions.

### Pseudocode
```python
function floodFill(image, sr, sc, color):
original_color = image[sr][sc]
if original_color == color:
return image

function dfs(r, c):
    if out of bounds:
        return
    if image[r][c] != original_color:
        return
    image[r][c] = color
    dfs(r+1, c)
    dfs(r-1, c)
    dfs(r, c+1)
    dfs(r, c-1)

dfs(sr, sc)
return image
```
- **Time:** O(m × n) — every cell visited at most once
- **Space:** O(m × n) — call stack depth in worst case

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/flood_fill.py` |
| TypeScript | `TS/floodFill.ts` |
| Go | `go/flood_fill.go` |

---

## Running Locally

**Python**
```bash
python3 flood_fill.py
```

**TypeScript**
```bash
tsx floodFill.ts
```

**Go**
```bash
go run flood_fill.go
```