from collections import deque

class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        def dfs(r, c):
            if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]):
                return
            if grid[r][c] == "0":
                return
            grid[r][c] = "0"
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)
            
        count = 0
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                cell = grid[r][c]
                if cell == "1":
                    count += 1
                    #drown the island
                    dfs(r, c)
        return count
    
    def _numIslands(self, grid: list[list[str]]) -> int:
        count = 0
        directions = [(1,0), (-1,0), (0,1), (0,-1)]
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                cell = grid[r][c]
                if cell == "1":
                    count += 1
                    grid[r][c] = "0"
                    queue = deque([(r, c)])
                    while queue:
                        cr, cc = queue.popleft()
                        for dr, dc in directions:
                            nr, nc = cr + dr, cc + dc
                            if 0 <= nr < len(grid) and 0 <= nc < len(grid[0]):
                                if grid[nr][nc] == "1":
                                    grid[nr][nc] = "0"
                                    queue.append((nr, nc))
        return count
            
        
import copy
from collections import deque

if __name__ == "__main__":
    test_cases = [
        [["1","1","1","1","0"],
         ["1","1","0","1","0"],
         ["1","1","0","0","0"],
         ["0","0","0","0","0"]],   # → 1, one large island

        [["1","1","0","0","0"],
         ["1","1","0","0","0"],
         ["0","0","1","0","0"],
         ["0","0","0","1","1"]], # → 3

        [["1","0","0","0","0"],
         ["0","1","0","0","0"],
         ["0","0","1","0","0"],
         ["0","0","0","1","0"]], # → 4, diagonal — not connected

        [["0","0","0"],
         ["0","0","0"]],         # → 0, all water

        [["1"]],                 # → 1, single cell
    ]

    for grid in test_cases:
        original = copy.deepcopy(grid)
        print(f"Input:       {original}")
        print(f"Output:      {Solution().numIslands(copy.deepcopy(grid))}")
        print("-" * 35)