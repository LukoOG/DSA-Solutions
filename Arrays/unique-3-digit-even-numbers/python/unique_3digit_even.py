class Solution:        
    def totalNumbers(self, digits: list[int])->int:
        seen = [False] * 1000
        r = range(0,len(digits))
        count = 0
        for i in r:
            if digits[i] == 0:
                continue
            for j in r:
                if j == i:
                    continue
                for k in r:
                    if k == j or k == i:
                        continue
                    digit = digits[i] * 100 + digits[j] * 10 + digits[k]
                    if digit % 2 == 0 and not seen[digit]:
                        seen[digit] = True
                        count+=1
        return count
    
    
if __name__ == "__main__":
    test_cases = [
        [1, 2, 3],        # → 12
        [2, 2, 8, 8, 2],  # → 2, duplicates in input
        [0, 2, 0],        # → 0, can't form valid 3-digit (leading zero)
        [0, 0, 0],        # → 0, all zeros
        [1, 3, 5],        # → 0, no even digits available
        [0, 1, 2, 3],     # → 16
        [1, 2, 3, 4]
    ]

    for digits in test_cases:
        print(f"Input:       {digits}")
        print(f"Output:      {Solution().totalNumbers(digits)}")
        print("-" * 35)