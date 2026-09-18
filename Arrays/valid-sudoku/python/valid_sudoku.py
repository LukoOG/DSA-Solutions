class Solution:
    @staticmethod
    def isValidSudoku(board: list[list[str]]) -> bool:
        rows = [[False] * 9 for _ in range(9)]
        cols = [[False] * 9 for _ in range(9)]
        boxes = [[False] * 9 for _ in range(9)]
        for i in range(0,len(board)):
            for j in range(0, len(board[0])):
                digit = board[i][j]
                if digit != ".":
                    d = int(digit) - 1
                    box_idx = (j // 3) + (i // 3 * 3)
                    if rows[i][d] or cols[j][d] or boxes[box_idx][d]:
                        return False
                    rows[i][d] = cols[j][d] = boxes[box_idx][d] = True
        return True

if __name__ == "__main__":
    test_cases = [
        # Valid board
        [
            ["5","3",".",".","7",".",".",".","."],
            ["6",".",".","1","9","5",".",".","."],
            [".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"]
        ],
        # Invalid board — duplicate 8 in top-left box
        [
            ["8","3",".",".","7",".",".",".","."],
            ["6",".",".","1","9","5",".",".","."],
            [".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"]
        ],
    ]

    for board in test_cases:
        print(f"Output:      {Solution().isValidSudoku(board)}")
        print("-" * 35)