class Solution:
    @staticmethod
    def arraySign(nums: list[int]) -> int:
        sign = 1
        for i in nums:
            if i == 0:
                return 0
            elif i < 0:
                sign = -1 * sign
        return sign

if __name__ == "__main__":
    test_cases = [
        [-1, -2, -3, -4, 3, 2, 1],   # → 1,  even negatives
        [1, 5, 0, 2, -3],             # → 0,  contains zero
        [-1, 1, -1, 1, -1],           # → -1, odd negatives
        [1, 2, 3, 4],                 # → 1,  all positive
        [-1, -1, -1],                 # → -1, odd negatives
        [0],                          # → 0,  single zero
    ]

    for nums in test_cases:
        print(f"Input:       {nums}")
        print(f"Output:      {Solution().arraySign(nums)}")
        print("-" * 35)