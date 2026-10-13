# Rotting Oranges

**Platform:** LeetCode — [Problem 994](https://leetcode.com/problems/rotting-oranges/)  
**Difficulty:** Medium  
**Topic:** Array, BFS, Matrix

---

## Problem

Given an `m x n` grid where `0` is empty, `1` is a fresh orange and `2` is a rotten orange, return the minimum number of minutes until no fresh orange remains. Every minute, any fresh orange adjacent (4-directionally) to a rotten orange becomes rotten. Return `-1` if it is impossible.

**Example:**

Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4


---

## Approach — Multi-Source BFS with Timestamp

All rotten oranges are enqueued simultaneously as starting nodes before BFS begins — each carries a timestamp of `0`. This models the simultaneous spread correctly: all rotten sources infect their neighbours at minute 1, those infect theirs at minute 2, and so on.

Rather than counting BFS levels explicitly, the minute is carried directly in each tuple as `(row, col, minute)`. When a fresh orange is infected, it is enqueued with `minute + 1`. The last node dequeued before `num_fresh` reaches zero holds the answer in its timestamp — no separate counter needed.

A fresh orange count `num_fresh` is tracked upfront. An early return of `0` handles the case where no fresh oranges exist. After BFS, if `num_fresh > 0` some oranges were unreachable — return `-1`.

### Pseudocode
```python
function orangesRotting(grid):
num_fresh = 0
queue = deque()
no_of_mins = 0

// seed queue with all rotten oranges
for each cell (r, c):
    if cell == 2: queue.append((r, c, 0))
    if cell == 1: num_fresh++

if num_fresh == 0:
    return 0

while queue and num_fresh > 0:
    r, c, minute = queue.popleft()
    for each neighbour (nr, nc):
        if in bounds and grid[nr][nc] == 1:
            grid[nr][nc] = 2
            num_fresh--
            queue.append((nr, nc, minute + 1))
    no_of_mins = minute

return -1 if num_fresh > 0 else no_of_mins
```
- **Time:** O(m × n)
- **Space:** O(m × n)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/rotting_oranges.py` |
| TypeScript | `TS/rottingOranges.ts` |
| Go | `go/rotting_oranges.go` |

---

## Running Locally

**Python**
```bash
python3 rotting_oranges.py
```

**TypeScript**
```bash
tsx rottingOranges.ts
```

**Go**
```bash
go run rotting_oranges.go
```