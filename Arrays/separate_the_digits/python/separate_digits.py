from typing import List

class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        results = []
        for i in nums:
            result = map(int, str(i))
            results.extend(result)
        return results

if __name__ == "__main__":
    test_cases = [
        [13, 25, 32],        # → [1, 3, 2, 5, 3, 2]
        [7, 1, 3, 9],        # → [7, 1, 3, 9], all single digits
        [100, 200],          # → [1, 0, 0, 2, 0, 0], zeros in digits
        [99, 77],            # → [9, 9, 7, 7]
        [1],                 # → [1], single element
    ]

    for nums in test_cases:
        print(f"Input:       {nums}")
        print(f"Output:      {Solution().separateDigits(nums)}")
        print("-" * 35)
    print(str(99).split())