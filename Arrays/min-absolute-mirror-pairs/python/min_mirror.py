if __name__ == "__main__":
    test_cases = [
        [12, 21, 11],              # → 1, pair (0,1): reverse(12)=21
        [1, 3, 2, 1],              # → 3, pair (0,3): reverse(1)=1
        [1, 2, 3],                 # → -1, no mirror pairs
        [13, 31, 31],              # → 1, duplicate targets, closest wins
        [12, 21, 21],              # → 1, reverse(12)=21 appears twice
        [120, 21, 45],             # → 1, reverse(120)=21, leading zero omitted
    ]

    for nums in test_cases:
        print(f"Input:       {nums}")
        print(f"Output:      {Solution().minMirrorPairDistance(nums)}")
        print("-" * 35)