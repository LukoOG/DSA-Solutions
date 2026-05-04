class Solution:
    @staticmethod
    def rotate(self, matrix: List[List[int]]) -> None:
        return 

if __name__ == "__main__":
    test_cases = [
        [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]],

        [[5, 1, 9, 11],
         [2, 4, 8, 10],
         [13, 3, 6, 7],
         [15, 14, 12, 16]],

        [[1]],

        [[1, 2],
         [3, 4]],
    ]

    for matrix in test_cases:
        import copy
        original = copy.deepcopy(matrix)
        Solution().rotate(matrix)
        print(f"Input:       {original}")
        print(f"Output:      {matrix}")
        print("-" * 35)