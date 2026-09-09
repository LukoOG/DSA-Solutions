class Solution:
    def countCommas(self, n: int) -> int:
        return 0

if __name__ == "__main__":
    test_cases = [
        998,            # → 0, all numbers under 4 digits
        1002,           # → 3, only 1000-1002 have commas
        1000,           # → 1, boundary: first number with a comma
        999999,         # → 999000, all 4-6 digit numbers have 1 comma
        1000000,        # → 999001, first number with 2 commas
        10**15,         # → large n, stress test near constraint limit
    ]

    for n in test_cases:
        print(f"Input:       {n}")
        print(f"Output:      {Solution().countCommas(n)}")
        print("-" * 35)