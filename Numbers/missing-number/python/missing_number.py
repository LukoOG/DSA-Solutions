class Solution:
    @staticmethod
    def missingNumber(nums: list[int]) -> int:
        number = len(nums)
        for i in range(0, number):
            number ^= i ^ nums[i]
        return number

if __name__ == "__main__":
    test_cases = [
        [3, 0, 1],        # → 2
        [0, 1],           # → 2, missing at end
        [9,6,4,2,3,5,7,0,1],  # → 8
        [0],              # → 1, single element
        [1],              # → 0, missing at start
    ]

    for nums in test_cases:
        print(f"Input:       {nums}")
        print(f"Output:      {Solution().missingNumber(nums)}")
        print("-" * 35)