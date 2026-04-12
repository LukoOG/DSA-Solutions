

#Solution 1: creating a new arrays
class Solution1:
    @staticmethod
    def runningSum(nums: list[int]):
        results = []
        results.append(nums[0])
        
        if len(nums) <= 1:
            return results
        
        for i in range(1, len(nums)):
            results.append(nums[i] + results[i - 1])
        return results

#Solution 2: Overwriting input approach
class Solution2:
    @staticmethod
    def runningSum(nums: list[int]):
        
        if len(nums) <= 1:
            return nums
        
        for i in range (1, len(nums)):
            nums[i] += nums[i-1]
        return nums
        
    
if __name__ == "__main__":
    test_cases = [
        [1, 2, 3, 4],
        [1, 1, 1, 1, 1],
        [3],
        [0, 0, 0],
    ]

    for nums in test_cases:
        print(f"Input:       {nums}")
        print(f"Solution 1:  {Solution1.runningSum(nums.copy())}")
        print(f"Solution 2:  {Solution2.runningSum(nums.copy())}")
        print("-" * 35)