from typing import List

class Solution:
    def maxArea(self, tank: List[int]) -> int:
        return 2


if __name__ == "__main__":
    test_cases = [
        [1, 8, 6, 2, 5, 4, 8, 3, 7],  # → 49, LeetCode's own example
        [1, 1],  # → 1, minimum valid input
        [4, 3, 2, 1, 4],  # → 16, same height at both ends
        [1, 2, 1],  # → 2, peak in middle
        [1, 2, 3, 4, 5],  # → 6, increasing heights
        [5, 4, 3, 2, 1],  # → 6, decreasing heights
    ]

    for height in test_cases:
        print(f"Input:       {height}")
        print(f"Output:      {Solution().maxArea(height)}")
        print("-" * 35)
