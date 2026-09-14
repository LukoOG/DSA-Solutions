class Solution:
    @staticmethod
    def isRectangleOverlap(rec1: list[int], rec2: list[int]) ->bool:
        x1, y1, x2, y2 = rec1
        x3, y3, x4, y4 = rec2
        return not (x2 <= x3 or x1 >= x4 or y2 <= y3 or y1 >= y4)

if __name__ == "__main__":
    test_cases = [
        ([0, 0, 2, 2], [1, 1, 3, 3]),   # → True, partial overlap
        ([0, 0, 1, 1], [1, 0, 2, 1]),   # → False, touching edge only
        ([0, 0, 1, 1], [2, 2, 3, 3]),   # → False, completely separate
        ([0, 0, 3, 3], [1, 1, 2, 2]),   # → True, one inside the other
        ([0, 0, 2, 2], [0, 0, 2, 2]),   # → True, identical rectangles
        ([0, 0, 2, 2], [3, 0, 5, 2]),   # → False, same row different cols
    ]

    for rec1, rec2 in test_cases:
        print(f"Input:       rec1={rec1}, rec2={rec2}")
        print(f"Output:      {Solution().isRectangleOverlap(rec1, rec2)}")
        print("-" * 35)