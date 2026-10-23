class NumArray:

    def __init__(self, nums: list[int]):
        self.prefix = [0] * (len(nums) + 1)
        for i, num in enumerate(nums):
            self.prefix[i+1] = self.prefix[i] + num
        

    def sumRange(self, left: int, right: int) -> int:
        return self.prefix[right+1] - self.prefix[left]




if __name__ == "__main__":
    test_cases = [
        {
            "nums": [-2, 0, 3, -5, 2, -1],
            "queries": [(0, 2), (2, 5), (0, 5)],
            "expected": [1, -1, -3]
        },
        {
            "nums": [1, 2, 3, 4, 5],
            "queries": [(0, 4), (1, 3), (0, 0)],
            "expected": [15, 9, 1]
        },
        {
            "nums": [5],
            "queries": [(0, 0)],
            "expected": [5]
        },
    ]

    for case in test_cases:
        obj = NumArray(case["nums"])
        results = [obj.sumRange(l, r) for l, r in case["queries"]]
        print(f"nums:        {case['nums']}")
        print(f"queries:     {case['queries']}")
        print(f"Output:      {results}")
        print(f"Expected:    {case['expected']}")
        print("-" * 35)