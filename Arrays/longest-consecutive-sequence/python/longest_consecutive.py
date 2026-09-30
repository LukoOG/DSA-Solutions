class Solution:
    @staticmethod
    def longestConsecutive(nums: list[int]) -> int:
        num_set = set(nums)
        longest = 0
        for num in num_set:
            if (num - 1) not in num_set:
                current_longest = 0
                current_number = num
                while current_number in num_set:
                    current_number += 1
                    current_longest += 1
                longest = max(longest, current_longest)
        return longest

if __name__ == "__main__":
    test_cases = [
        [100, 4, 200, 1, 3, 2],    # → 4, sequence [1,2,3,4]
        [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],  # → 9, sequence [0-8]
        [],                         # → 0, empty array
        [1],                        # → 1, single element
        [1, 2, 3, 4, 5],           # → 5, already consecutive
        [5, 4, 3, 2, 1],           # → 5, reverse consecutive
        [1, 3, 5, 7],              # → 1, no consecutive pairs
    ]

    for nums in test_cases:
        print(f"Input:       {nums}")
        print(f"Output:      {Solution().longestConsecutive(nums)}")
        print("-" * 35)