class Solution:
    def mirrorDistance(self, n: int) -> int:
        reverse = 0
        number = n
        while n > 0:
            reverse = (reverse * 10) + (n % 10)
            n = n // 10
        return abs(number - reverse)
    
if __name__ == "__main__":
    test_cases = [25, 10, 7, 121, 100, 1]

    for n in test_cases:
        print(f"Input:       {n}")
        print(f"Output:      {Solution().mirrorDistance(n)}")
        print("-" * 35)