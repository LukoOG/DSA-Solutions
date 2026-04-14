class Solution:
    @staticmethod
    def get_min_distance(nums: list[int], target: int, start: int) -> int:
        # min_distance = max(nums)
        min_distance = float('inf')
        
        for i in range(len(nums)):
            if nums[i] == target:
                min_distance = min(min_distance, abs(start-i))
        return min_distance

if __name__ == "__main__":
    test_cases = [
        ([1, 2, 3, 4, 5], 5, 3),
        ([1, 2, 3, 4, 5], 1, 4),
        ([1, 2, 3, 4, 5], 3, 2),
        ([1, 2, 2, 2, 3], 2, 0),
        ([5], 5, 0),
    ]

    for nums, target, start in test_cases:
        print(f"Input:       nums={nums}, target={target}, start={start}")
        print(f"Output:      {Solution.get_min_distance(nums, target, start)}")
        print("-" * 35)