class Solution:
    def minAddToMakeValid(self, s: str)->int:
        open_needed = 0
        close_needed = 0
        for i in range(len(s)):
            if s[i] == "(":
                close_needed += 1
            elif s[i] == ")":
                if close_needed > 0:
                    close_needed -= 1
                else:
                    open_needed +=1
        return open_needed + close_needed

if __name__ == "__main__":
    test_cases = [
        "())",       # → 1, one unmatched closing
        "(((",       # → 3, three unmatched opening
        "()",        # → 0, already valid
        "())))((",   # → 4
        "",          # → 0, empty string
        ")((",       # → 3, starts with unmatched closing
    ]

    for s in test_cases:
        print(f"Input:       {s!r}")
        print(f"Output:      {Solution().minAddToMakeValid(s)}")
        print("-" * 35)