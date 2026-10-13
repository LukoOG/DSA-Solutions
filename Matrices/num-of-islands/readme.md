# Number of Islands

**Platform:** LeetCode — [Problem 200](https://leetcode.com/problems/number-of-islands/)  
**Difficulty:** Medium  
**Topic:** Array, DFS, BFS, Matrix

---

## Problem

Given an `m x n` grid of `'1'`s (land) and `'0'`s (water), return the number of islands. An island is surrounded by water and formed by connecting adjacent land cells horizontally or vertically.

**Example:**

Input: [[“1”,”1",”0",”0",”0"],
[“1”,”1",”0",”0",”0"],
[“0”,”0",”1",”0",”0"],
[“0”,”0",”0",”1",”1"]]
Output: 3


---

## Approach — Outer Loop + Flood Fill

Iterate every cell in the grid. When a `'1'` is found, increment the counter and immediately sink the entire island by flood filling from that cell — overwriting all connected `'1'`s with `'0'`. This marks the whole island as visited in place so any subsequent `'1'` found by the outer loop is guaranteed to be a new unvisited island.

### Solution 1 — DFS (Recursive)

Uses the call stack as implicit traversal. In Go, a recursive anonymous function is defined with `var dfs func(r, c int)` then assigned — this is the idiomatic way to define recursive closures in Go.

### Solution 2 — BFS (Iterative)

Uses an explicit queue of coordinates. The starting cell is painted to `'0'` before enqueuing. Neighbours are painted on enqueue — not on dequeue — to prevent the same cell being added multiple times by different neighbours.

### Pseudocode
```python
function numIslands(grid):
    count = 0
    for each cell (r, c):
        if grid[r][c] == ‘1’:
            count++
            floodFill(r, c) // sinks entire island
    return count
```
```python
// DFS
function dfs(r, c):
    if out of bounds or grid[r][c] != ‘1’:
        return
    grid[r][c] = ‘0’
    dfs in all 4 directions
```
```python
// BFS
function bfs(r, c):
    grid[r][c] = ‘0’
    queue = [(r, c)]
    while queue not empty:
        p = dequeue()
        for each neighbour (nr, nc):
            if in bounds and grid[nr][nc] == ‘1’:
                grid[nr][nc] = ‘0’
                enqueue(nr, nc)
```

- **Time:** O(m × n)
- **Space:** O(m × n) — DFS call stack / BFS queue worst case

---

## Key Insight

Diagonal cells are **not** connected — only horizontal and vertical neighbours count. A grid of alternating `'1'`s on the diagonal produces as many islands as there are `'1'`s.

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/num_islands.py` |
| TypeScript | `TS/numIslands.ts` |
| Go | `go/num_islands.go` |

---

## Running Locally

**Python**
```bash
python3 num_islands.py
```

**TypeScript**
```bash
tsx numIslands.ts
```

**Go**
```bash
go run num_islands.go
```