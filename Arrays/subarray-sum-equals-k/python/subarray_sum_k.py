from collections import defaultdict

class Solution:
    @staticmethod
    #bruteforce approach
    def bruteforce_subarraySum(nums: list[int], k: int) -> int:
        count = 0
        for i, num in enumerate(nums):
            sum = num
            if sum == k:
                count +=1
            for j in range(i+1, len(nums)):
                sum += nums[j]
                if sum == k:
                    count +=1
            
        return count
    @staticmethod
    def subarraySum(nums: list[int], k: int) -> int:
        seen = {0:1}
        count = 0
        curr_sum = 0
        for num in nums:
            curr_sum += num
            key = curr_sum - k
            if key in seen:
                count += seen[key]
            seen[curr_sum] = seen.get(curr_sum, 0) + 1
        return count

if __name__ == "__main__":
    test_cases = [
        ([1, 1, 1], 2),           # → 2
        ([1, 2, 3], 3),           # → 2, [1,2] and [3]
        ([1, -1, 1], 1),          # → 3, negatives present
        ([0, 0, 0], 0),           # → 6, all zeros
        ([-1, -1, 1], 0),         # → 1
        ([1], 1),                 # → 1, single element
        ([1, 2, 3, 4, 5], 15),   # → 1, entire array
    ]

    for nums, k in test_cases:
        print(f"Input:       nums={nums}, k={k}")
        print(f"Output:      {Solution().subarraySum(nums, k)}")
        print("-" * 35)