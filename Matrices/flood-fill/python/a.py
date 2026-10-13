from collections import deque

class Solution:
    #Recursive DFS Approach
    def _floodFill(self, image: list[list[int]], sr: int, sc: int, color: int) -> list[list[int]]:
        original_color = image[sr][sc]
        if original_color == color:
            return image
        def dfs(r, c):
            if r < 0 or r >= len(image) or c < 0 or c >= len(image[0]) or image[r][c] != original_color:
                return

            image[r][c] = color
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)
        dfs(sr, sc)
        return image
    
    #BFS Approach
    def floodFill(self, image: list[list[int]], sr: int, sc: int, color: int) -> list[list[int]]:
        original_color = image[sr][sc]
        if original_color == color:
            return image
        queue = deque([(sr, sc)])
        image[sr][sc] = color
        
        directions = [(1,0), (-1,0), (0,1), (0,-1)]
            
        while queue:
            level_length = len(queue)
            for _ in range(level_length):
                r, c = queue.popleft()
                for dr, dc in directions:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < len(image) and 0 <= nc < len(image[0]):
                        if image[nr][nc] == original_color:
                            image[nr][nc] = color
                            queue.append((nr, nc))
        return image
        
import copy

if __name__ == "__main__":
    test_cases = [
        ([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2),   # → [[2,2,2],[2,2,0],[2,0,1]]
        ([[0,0,0],[0,0,0]], 0, 0, 0),             # → [[0,0,0],[0,0,0]], same color early exit
        ([[0,0,0],[0,1,1]], 1, 1, 1),             # → [[0,0,0],[0,1,1]], same color early exit
        ([[1,1,1],[1,1,0],[1,0,1]], 0, 0, 3),     # → [[3,3,3],[3,3,0],[3,0,1]]
        ([[1]], 0, 0, 2),                          # → [[2]], single cell
    ]

    for image, sr, sc, color in test_cases:
        original = copy.deepcopy(image)
        result = Solution().floodFill(image, sr, sc, color)
        print(f"Input:       image={original}, sr={sr}, sc={sc}, color={color}")
        print(f"Output:      {result}")
        print("-" * 35)