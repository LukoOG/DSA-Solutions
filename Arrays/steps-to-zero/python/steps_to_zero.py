class Solution:
    @staticmethod
    def steps_to_zero(n: int):
        steps = 0
        
        while n > 0:
            if n % 2 == 0:
                n /= 2
            else:
                n-=1
            steps+=1
        return steps
    
    
if __name__ == "__main__":
    test_cases = [0, 1, 2, 6, 14]

    for n in test_cases:
        print(f"Input:       {n}")
        print(f"Output:      {Solution.steps_to_zero(n)}")
        print("-" * 35)