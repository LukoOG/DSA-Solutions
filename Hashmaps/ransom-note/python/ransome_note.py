#Solution 2: Hashmap(dictionary in python language)

class Solution:
    @staticmethod
    def can_construct(ransom_note: str, magazine:str) -> bool:
        #constructing dictionary
        magazine_map = {}
        
        #Code works regardless of this check
        ##But for speed
        if len(ransom_note) > len(magazine):
            return False
        
        for letter in magazine:
            magazine_map[letter] = 1 + magazine_map.get(letter, 0)
            
        for letter in ransom_note:
            if magazine_map.get(letter) == 0 or magazine_map.get(letter) == None:
                print(magazine_map)
                return False
            else:
                magazine_map[letter] = magazine_map[letter] - 1
        else:
            return True #if the for loop ran through all letters in ransome note


if __name__ == "__main__":
    test_cases = [
        ("a", "b"),
        ("aa", "ab"),
        ("aa", "aab"),
        ("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbeggbjgeggbg"),
        ("", "abc"),
    ]

    for ransom_note, magazine in test_cases:
        print(f"Ransom Note: {ransom_note!r}")
        print(f"Magazine:    {magazine!r}")
        print(f"Output:      {Solution.can_construct(ransom_note, magazine)}")
        print("-" * 35)