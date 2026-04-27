roman = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
}

#Research why I can't do add operation in the if statement block
class Solution:
    def romanToInt(self, s: str) -> int:
        result = 0
        n = len(s)
        for i in range(n):
            if i+1 < n and roman[s[i]] < roman[s[i+1]]:
                # print("minus",s[i])
                result -= roman.get(s[i], 0)
            else:
                # print("add",s[i])
                result += roman.get(s[i], 0)
        return result
    
if __name__ == "__main__":
    test_cases = ["III", "IV", "IX", "LVIII", "MCMXCIV", "I", "MMMCMXCIX"]

    for s in test_cases:
        print(f"Input:       {s!r}")
        print(f"Output:      {Solution().romanToInt(s)}")
        print("-" * 35)