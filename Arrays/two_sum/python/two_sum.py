from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        #difference(num) -> index
        difference_map = {}
        for idx, num in enumerate(nums):
            diff = target - num
            valid_idx = difference_map.get(diff, None)
            if valid_idx is not None:
                return [valid_idx, idx]
            difference_map[num] = idx
        return [-1]


if __name__ == "__main__":
    test_cases = [
        ([2, 7, 11, 15], 9),    # → [0, 1], classic example
        ([3, 2, 4], 6),         # → [1, 2], answer not at start
        ([3, 3], 6),            # → [0, 1], duplicate values
        ([1, 2, 3, 4], 7),      # → [2, 3], answer at end
        ([-1, -2, -3, -4], -6), # → [1, 3], negative numbers
    ]

    for nums, target in test_cases:
        print(f"Input:       nums={nums}, target={target}")
        print(f"Output:      {Solution().twoSum(nums, target)}")
        print("-" * 35)