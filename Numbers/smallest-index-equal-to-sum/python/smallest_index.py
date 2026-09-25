class Solution:
    def smallestIndex(self, nums: list[int]) -> int :
        def sumOfDigits(num: int) -> int:
            sum = 0
            while num > 0:
                d = num % 10
                sum += d
                num = int(num / 10)
            return sum
        idx = []
        for i in range(len(nums)):
            if i == sumOfDigits(nums[i]):
                idx.append(i)
        if len(idx) < 1:
            return -1
        return min(idx)

if __name__ == "__main__":
    test_cases = [
        [1, 3, 2],          # → 2, digit_sum(2) = 2 == index 2
        [1, 10, 11],        # → 1, digit_sum(10) = 1 == index 1
        [0, 1, 2, 3, 4],    # → 0, digit_sum(0) = 0 == index 0
        [5, 4, 3, 2, 1],    # → -1, no match
        [0],                # → 0, single element
        [1, 2, 3, 4, 10],   # → 4, digit_sum(10) = 1... wait 4 != 1, tricky
    ]

    for nums in test_cases:
        print(f"Input:       {nums}")
        print(f"Output:      {Solution().smallestIndex(nums)}")
        print("-" * 35)