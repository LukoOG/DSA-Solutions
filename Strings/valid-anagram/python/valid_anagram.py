class Solution:
    @staticmethod
    def isAnagram(s: str, t:str)->bool:
        if len(s) != len(t):
            return False
        frequency, TARGET = [0] * 26, [0] * 26
        
        #Zip is faster and more efficient than range, it also skips pointer index lookups 
        #s[i] or t[i]
        for (s_t, t_t) in zip(s, t):
            frequency[ord(s_t) - 97]+=1
            frequency[ord(t_t) - 97]-=1
            # Instead of using all, this is way faster internally
        return frequency == TARGET
            
        

if __name__ == "__main__":
    test_cases = [
        ("anagram", "nagaram"),   # → True, classic example
        ("rat", "car"),           # → False, different letters
        ("a", "a"),               # → True, single char
        ("a", "b"),               # → False, single char mismatch
        ("aa", "a"),              # → False, different lengths
        ("listen", "silent"),     # → True, classic anagram pair
    ]

    for s, t in test_cases:
        print(f"Input:       s={s!r}, t={t!r}")
        print(f"Output:      {Solution().isAnagram(s, t)}")
        print("-" * 35)