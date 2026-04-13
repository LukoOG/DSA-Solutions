class Solution:
    @staticmethod
    def fizzbuzz(n: int) -> list[int]:
        results = []
        for i in range (1, n+1):
            divisible_by_3 = i % 3 == 0
            divisible_by_5 = i % 5 == 0
            
            if (divisible_by_3 and divisible_by_5):
                results.append("FizzBuzz")
            elif (divisible_by_3):
                results.append("Fizz")
            elif (divisible_by_5):
                results.append("Buzz")
            else:
                results.append(str(i))
        return results
    
if __name__ == "__main__":
    test_cases = [1, 3, 5, 15, 16]

    for n in test_cases:
        print(f"Input:       {n}")
        print(f"Output:      {Solution.fizzbuzz(n)}")
        print("-" * 35)
    