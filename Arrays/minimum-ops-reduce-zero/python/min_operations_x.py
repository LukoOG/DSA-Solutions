class Solution:
    @staticmethod
    def minOperations(nums: list[int], x: int):
        target = sum(nums) - x
        if target < 0:
            return -1
        if target == 0:
            return len(nums)
        current_sum = 0
        max_len = -1
        left = 0
        for right in range(len(nums)):
            current_sum += nums[right]
            while current_sum > target and left <= right:
                current_sum -= nums[left]
                left += 1
            if current_sum == target:
                max_len = max(max_len, right - left + 1)
        return len(nums) - max_len if max_len != -1 else -1
    
if __name__ == "__main__":
    test_cases = [
        ([1, 1, 4, 2, 3], 5),       # → 2, remove [1,1] from left or [2,3] from right... wait, remove last two
        ([5, 6, 7, 8, 9], 4),       # → -1, impossible
        ([3, 2, 20, 1, 1, 3], 10),  # → 5
        ([1, 1], 3),                # → -1, sum < x
        ([1, 1, 1, 1, 1], 5),       # → 5, entire array
        ([5], 5),                   # → 1, single element
        ([1, 2, 3, 4], 3),          # → 2, [1,2] from left or [3] from right... shortest
    ]

    for nums, x in test_cases:
        print(f"Input:       nums={nums}, x={x}")
        print(f"Output:      {Solution().minOperations(nums, x)}")
        print("-" * 35)