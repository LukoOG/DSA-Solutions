class Solution:
    @staticmethod
    def hammingWeight(n: int) -> int:
        local_n = n
        count = 0
        while local_n > 0:
            count += local_n & 1
            local_n >>= 1
        return count

if __name__ == "__main__":
    test_cases = [11, 128, 2147483645, 0, 1, 2147483647]
    #              3    1       30      0  1      31

    for n in test_cases:
        print(f"Input:       {n} (binary: {bin(n)})")
        print(f"Output:      {Solution().hammingWeight(n)}")
        print("-" * 35)