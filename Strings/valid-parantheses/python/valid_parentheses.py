class Solution:
    @staticmethod
    def isValid(s: str) -> bool:
        brackets = {
            ')':'(',
            '}':'{',
            ']':'['
        }
        
        stack = []
        for i in range(0, len(s)):
            if s[i] in brackets.keys():
                if not stack or brackets[s[i]] != stack[-1]:
                    return False
                stack.pop()
            else:
                stack.append(s[i])
        return not stack

if __name__ == "__main__":
    test_cases = [
        "()",        # → True, simple pair
        "()[]{}",    # → True, multiple valid pairs
        "(]",        # → False, mismatched types
        "([)]",      # → False, wrong order
        "{[]}",      # → True, nested valid
        "",          # → True, empty string
        "(((",       # → False, unclosed
        "]",         # → False, closing with empty stack
    ]

    for s in test_cases:
        print(f"Input:       {s!r}")
        print(f"Output:      {Solution().isValid(s)}")
        print("-" * 35)