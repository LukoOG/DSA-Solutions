class Solution:
    @staticmethod
    def solveQueries():
        return []

if __name__ == "__main__":
    test_cases = [
        ([1, 2, 3, 1, 2], [0, 1, 2]),        # → [3, 2, 1]
        ([1, 1, 1], [0, 1, 2]),               # → [1, 1, 1]
        ([1, 2, 3], [0, 1, 2]),               # → [-1, -1, -1] no duplicates
        ([1, 2, 1, 3, 2], [0, 4]),            # → [2, 2] wraps around
        ([5], [0]),                           # → [-1] single element
    ]

    for nums, queries in test_cases:
        print(f"Input:       nums={nums}, queries={queries}")
        print(f"Output:      {Solution().solveQueries(nums, queries)}")
        print("-" * 35)