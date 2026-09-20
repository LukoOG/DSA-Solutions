class Solution:
    def reverseDegree(self, s: str) -> int:
        sum = 0
        for i, val in enumerate(s):
            sum += (i+1) * (123- ord(val))
        return sum
        
        
if __name__ == "__main__":
    test_cases = [
        "abc",     # → 6
        "zza",     # → 3
        "a",       # → 26
        "z",       # → 1
        "az",      # → 27
        "reverse", # → multi-char stress test
    ]

    for s in test_cases:
        print(f"Input:       {s!r}")
        print(f"Output:      {Solution().reverseDegree(s)}")
        print("-" * 35)