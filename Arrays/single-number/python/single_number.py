class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        ans = nums[0]
        for i in range(1, len(nums)):
            ans ^= nums[i]
        return ans
        