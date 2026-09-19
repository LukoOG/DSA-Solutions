class Solution:
    @staticmethod
    def minOperations(nums: list[int], k:int) -> int:
        xor = k
        for num in nums:
            xor ^= num
            
        return xor.bit_count()

if __name__ == "__main__":
    test_cases = [
        ([2, 1, 3, 4], 1),    # → 2
        ([2, 0, 2, 0], 0),    # → 0, already equal
        ([1], 1),             # → 0, single element equals k
        ([1], 0),             # → 1, single bit flip needed
        ([0, 0, 0], 5),       # → 2, XOR is 0, need to reach 5 (101)
    ]

    for nums, k in test_cases:
        print(f"Input:       nums={nums}, k={k}")
        print(f"Output:      {Solution().minOperations(nums, k)}")
        print("-" * 35)