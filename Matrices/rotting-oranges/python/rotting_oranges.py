import copy
from collections import deque

class Solution:
    def orangesRotting(self, grid: list[list[int]]) -> int:
        num_fresh = 0
        start_nodes: deque[tuple[int, int, int]] = deque()
        directions = [(1,0),(-1,0),(0,1),(0,-1)]
        no_of_mins = 0
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                cell = grid[r][c]
                if cell == 2:
                    start_nodes.append((r, c, 0))
                elif cell == 1:
                    num_fresh+=1
        if num_fresh == 0:
            return 0
        
        while start_nodes and num_fresh > 0:
            cr, cc, min = start_nodes.popleft()
            for dr, dc in directions:
                nr = cr + dr
                nc = cc + dc
                if 0 <= nr < len(grid) and 0 <= nc < len(grid[0]) and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    num_fresh -= 1
                    start_nodes.append((nr, nc, min+1))
                    no_of_mins = min+1
        return -1 if num_fresh > 0 else no_of_mins     

if __name__ == "__main__":
    test_cases = [
        [[2,1,1],[1,1,0],[0,1,1]],   # → 4
        [[2,1,1],[0,1,1],[1,0,1]],   # → -1, bottom-left isolated
        [[0,2]],                      # → 0, no fresh oranges
        [[1]],                        # → -1, fresh with no rotten
        [[2]],                        # → 0, only rotten
        [[0]],                        # → 0, empty grid
        [[2,1,1],[1,1,1],[0,1,2]],   # → 2, two rotten sources
    ]

    for grid in test_cases:
        original = copy.deepcopy(grid)
        print(f"Input:       {original}")
        print(f"Output:      {Solution().orangesRotting(copy.deepcopy(grid))}")
        print("-" * 35)
            