class Solution:
    @staticmethod
    def removeElement(nums: list[int], val:int)->int:
        k = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k+=1
        return k

if __name__ == "__main__":
    test_cases = [
        ([3, 2, 2, 3], 3),        # → 2, [2, 2]
        ([0, 1, 2, 2, 3, 0, 4, 2], 2),  # → 5, [0,1,3,0,4]
        ([1], 1),                  # → 0, all removed
        ([1], 2),                  # → 1, nothing removed
        ([2, 2, 2], 2),            # → 0, all same as val
        ([1, 2, 3, 4], 5),         # → 4, val not in array
    ]

    for nums, val in test_cases:
        import copy
        original = copy.deepcopy(nums)
        result = Solution().removeElement(nums, val)
        print(f"Input:       nums={original}, val={val}")
        print(f"Output:      k={result}, nums={nums[:result]}")
        print("-" * 35)