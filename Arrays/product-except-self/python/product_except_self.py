class Solution:
    @staticmethod
    def productExceptSelf(nums: list[int])->list[int]:
        n = len(nums)
        ans = [1] * n
        prefix = 1
        for i in range(0, n):
            ans[i] = prefix
            prefix *= nums[i]
        
        suffix = 1
        for i in range(n-1, -1, -1):
            ans[i] *= suffix
            suffix *= nums[i]
        return ans

if __name__ == "__main__":
    test_cases = [
        [1, 2, 3, 4],        # → [24, 12, 8, 6]
        [-1, 1, 0, -3, 3],   # → [0, 0, 9, 0, 0], contains zero
        [0, 0],              # → [0, 0], two zeros
        [1, 1],              # → [1, 1], all ones
        [-1, -1, -1, -1],    # → [1, 1, 1, 1], all negatives
        [2, 3],              # → [3, 2], two elements
    ]

    for nums in test_cases:
        print(f"Input:       {nums}")
        print(f"Output:      {Solution().productExceptSelf(nums)}")
        print("-" * 35)