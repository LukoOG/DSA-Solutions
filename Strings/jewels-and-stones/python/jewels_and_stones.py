class Solution:
    @staticmethod
    def numJewelsInStones(jewels: str, stones: str) -> int:
        return sum([1 for j in stones if set(jewels).__contains__(j)])

if __name__ == "__main__":
    test_cases = [
        ("aA", "aAAbbbb"),   # → 3
        ("z", "ZZZ"),        # → 0, case sensitive
        ("a", "a"),          # → 1, single match
        ("a", "b"),          # → 0, no match
        ("abc", "aabbcc"),   # → 6, all stones are jewels
        ("aA", ""),          # → 0, empty stones
    ]

    for jewels, stones in test_cases:
        print(f"Input:       jewels={jewels!r}, stones={stones!r}")
        print(f"Output:      {Solution().numJewelsInStones(jewels, stones)}")
        print("-" * 35)