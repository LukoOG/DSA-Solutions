from collections import defaultdict

class Solution:
    @staticmethod
    def _groupAnagrams(strs: list[str])->list[list[str]]:
        tab = defaultdict(list)
        for s in strs:
            key = "".join(sorted(s))
            tab[key].append(s)
        return list(tab.values())
    
    @staticmethod
    def groupAnagrams(strs: list[str])->list[list[str]]:
        tab = defaultdict(list)
        for s in strs:
            key = [0] * 26
            for c in s:
                key[ord(c) - 97] +=1
            tab[tuple(key)].append(s)
        return list(tab.values())
            

if __name__ == "__main__":
    test_cases = [
        ["eat", "tea", "tan", "ate", "nat", "bat"],  # → [["eat","tea","ate"],["tan","nat"],["bat"]]
        [""],                                          # → [[""]], single empty string
        ["a"],                                         # → [["a"]], single char
        ["abc", "bca", "cab", "xyz", "zyx"],          # → [["abc","bca","cab"],["xyz","zyx"]]
        ["ab", "ba", "abc", "cba", "bac"],            # → [["ab","ba"],["abc","cba","bac"]]
    ]

    for strs in test_cases:
        print(f"Input:       {strs}")
        print(f"Output:      {Solution().groupAnagrams(strs)}")
        print("-" * 35)