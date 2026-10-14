# Shortest Path in Binary Matrix

**Platform:** LeetCode — [Problem 1091](https://leetcode.com/problems/shortest-path-in-binary-matrix/)  
**Difficulty:** Medium  
**Topic:** Array, BFS, Matrix

---

## Problem

Given an `n x n` binary matrix `grid`, return the length of the shortest clear path from the top-left `(0, 0)` to the bottom-right `(n-1, n-1)`. A clear path moves through `0` cells in 8 directions. Return `-1` if no such path exists.

**Example:**

Input: [[0,0,0],[1,1,0],[1,1,0]]
Output: 4


---

## Approach — BFS with In-Place Distance Tracking

BFS is mandatory here — DFS finds *a* path but not necessarily the *shortest* one. BFS guarantees the shortest path because it explores level by level and the first time the destination is reached is always via the minimum number of steps.

Early exit if either the start or end cell is blocked — no path is possible.

Rather than carrying a step counter in the queue tuple or snapshotting level lengths, the path length is stored directly in the grid. `grid[0][0]` is set to `1` before BFS begins. Each time a fresh cell is reached, its value is set to `grid[cr][cc] + 1` — simultaneously marking it visited and recording its distance from the start. When the destination is dequeued, `grid[n-1][n-1]` already holds the answer.

Movement is 8-directional — diagonals are allowed unlike flood fill and number of islands which are 4-directional only.

### Pseudocode
```python
function shortestPathBinaryMatrix(grid):
n = len(grid)
if grid[0][0] != 0 or grid[n-1][n-1] != 0:
return -1

grid[0][0] = 1
queue = deque([(0, 0)])
directions = 8 directions including diagonals

while queue:
    cr, cc = dequeue()
    if cr == n-1 and cc == n-1:
        return grid[cr][cc]
    for each neighbour (nr, nc):
        if in bounds and grid[nr][nc] == 0:
            grid[nr][nc] = grid[cr][cc] + 1
            enqueue(nr, nc)

return -1
```
- **Time:** O(n²)
- **Space:** O(n²)

---

## Key Insights

**BFS vs DFS** — shortest path problems always call for BFS. DFS explores one branch deeply before backtracking and has no guarantee of finding the shortest route first.

**8-directional movement** — diagonal moves are allowed, expanding the directions array from 4 to 8 entries compared to flood fill and island problems.

**In-place distance tracking** — storing the distance in the grid itself avoids a separate visited set and a tuple timestamp. The cell value doubles as both a visited marker (`!= 0`) and a distance record.

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/shortest_path_binary_matrix.py` |
| TypeScript | `TS/shortestPathBinaryMatrix.ts` |
| Go | `go/shortest_path_binary_matrix.go` |

---

## Running Locally

**Python**
```bash
python3 shortest_path_binary_matrix.py
```

**TypeScript**
```bash
tsx shortestPathBinaryMatrix.ts
```

**Go**
```bash
go run shortest_path_binary_matrix.go
```