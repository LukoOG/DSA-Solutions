class Solution:
    @staticmethod
    def countCommas(n: int) -> int:
        return max(0, n - 1000 + 1)

if __name__ == "__main__":
    test_cases = [
        1,       # → 0, single digit
        999,     # → 0, boundary just before commas start
        1000,    # → 1, first number with a comma
        1002,    # → 3, LeetCode's own example
        10000,   # → 9001
        100000,  # → 99001, max constraint
    ]

    for n in test_cases:
        print(f"Input:       {n}")
        print(f"Output:      {Solution().countCommas(n)}")
        print("-" * 35)