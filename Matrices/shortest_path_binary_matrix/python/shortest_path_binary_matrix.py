import copy
from collections import deque

class Solution:
    def shortestPathBinaryMatrix(self, grid: list[list[int]]) -> int:
        n = len(grid) #square grid
        if grid[0][0] != 0 or grid[n-1][n-1] != 0:
            return -1
        grid[0][0] = 1
        queue = deque([(0, 0)])
        directions = [
            (1,0),(-1,0),(0,1),(0,-1),
            (1,1),(1,-1),(-1,1),(-1,-1)
        ]
        while queue:
            cr, cc = queue.popleft()
            if cr == n - 1 and cc == n -1:
                return grid[cr][cc]
            for dr, dc in directions:
                nr, nc = cr + dr, cc + dc
                if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 0:
                    grid[nr][nc] = grid[cr][cc] + 1
                    queue.append((nr, nc))
        return -1


if __name__ == "__main__":
    test_cases = [
        [[0,1],
         [1,0]],                              # → 2
        [[0,0,0],[1,1,0],[1,1,0]],                  # → 4
        [[1,0,0],[1,1,0],[1,1,0]],                  # → -1, start blocked
        [[0,0,0],[1,1,0],[1,1,1]],                  # → -1, end blocked
        [[0]],                                       # → 1, single cell
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]], # → 6, navigate around obstacle
    ]

    for grid in test_cases:
        original = copy.deepcopy(grid)
        print(f"Input:       {original}")
        print(f"Output:      {Solution().shortestPathBinaryMatrix(copy.deepcopy(grid))}")
        print("-" * 35)