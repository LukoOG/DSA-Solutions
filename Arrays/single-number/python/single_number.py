class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        ans = nums[0]
        for i in range(1, len(nums)):
            ans ^= nums[i]
        return ans

if __name__ == "__main__":
    test_cases = [
        [2, 2, 1],          # → 1
        [4, 1, 2, 1, 2],    # → 4
        [1],                # → 1, single element
        [0, 0, 5],          # → 5, zero duplicates
        [-1, -1, 3],        # → 3, negative numbers
    ]

    for nums in test_cases:
        print(f"Input:       {nums}")
        print(f"Output:      {Solution().singleNumber(nums)}")
        print("-" * 35)