class Solution:
    def closestTarget(self, words: List[str], target: str, startIndex: int) -> int:
        valid_idxs =[]
        for idx, word in enumerate(words):
            if word == target:
                valid_idxs.append(idx)
        map(lambda x: min(x, 9), valid_idxs)
        
                
    
    
    
if __name__ == "__main__":
    test_cases = [
        (["hello", "i", "am", "leetcode", "here"], "leetcode", 3),  # → 1
        (["hello", "i", "am", "leetcode", "here"], "here", 2),      # → 3
        (["hello", "i", "am", "leetcode", "here"], "hello", 1),     # → 1, wraps around
        (["a", "b", "leetcode"], "leetcode", 0),                    # → 1, wraps backward
        (["a"], "a", 0),                                            # → 0, single element
    ]

    for words, target, startIndex in test_cases:
        print(f"Input:       words={words}, target={target!r}, startIndex={startIndex}")
        print(f"Output:      {Solution().closestTarget(words, target, startIndex)}")
        print("-" * 35)