class Solution:
    @staticmethod
    def checkOverlap( radius: int, xCenter: int, yCenter: int, x1: int, y1: int, x2: int, y2: int) -> bool:
        def shortestPoint(left: int, right: int, k: int) -> int:
            if k < left:
                return left - k
            elif k > right:
                return k - right
            else:
                return 0
        # a = shortestPoint(x1, x2, xCenter)
        # b = shortestPoint(y1, y2, yCenter)
        #OR using clamp
        a = xCenter - max(x1, min(x2, xCenter))
        b = yCenter - max(y1, min(y2, yCenter))
        r = radius * radius
        return (a**2) + (b**2) <= r
        

if __name__ == "__main__":
    test_cases = [
        (1, 0, 0, 1, -1, 3, 1),      # → True, circle overlaps rectangle
        (1, 1, 1, -3, -3, 3, 3),     # → True, circle inside rectangle
        (1, 0, 0, -1, 0, 0, 1),      # → True, circle center on edge
        (1, 5, 5, 0, 0, 2, 2),       # → False, completely separate
        (1, 0, 0, 1, 1, 2, 2),       # → False, touches corner only... or does it?
        (2, 0, 0, 3, 3, 5, 5),       # → False, circle too small to reach
    ]

    for radius, xCenter, yCenter, x1, y1, x2, y2 in test_cases:
        print(f"Input:       radius={radius}, center=({xCenter},{yCenter}), rect=({x1},{y1})->({x2},{y2})")
        print(f"Output:      {Solution().checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)}")
        print("-" * 35)