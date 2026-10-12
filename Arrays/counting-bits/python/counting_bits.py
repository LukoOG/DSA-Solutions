class Solution:
    def countBits(self, n: int) -> list[int]:
        ans = [0] * (n+1)
        for i in range(1, n+1):
            ans[i] = ans[i>>1] + (i & 1)
        return ans
if __name__ == "__main__":
    test_cases = [0, 1, 2, 5, 8, 16]
    #  expected: [0],[0,1],[0,1,1],[0,1,1,2,1,2],[0,1,1,2,1,2,2,3,1],[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1]

    for n in test_cases:
        print(f"Input:       {n}")
        print(f"Output:      {Solution().countBits(n)}")
        print("-" * 35)