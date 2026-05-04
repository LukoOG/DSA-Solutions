class Solution:
    @staticmethod
    def richest_customer(accounts: list[list[int]]):
        max_wealth_so_far = 0
        
        for customer in accounts:
            current_max_wealth = 0
            for money in customer:
                current_max_wealth+=money
            
            max_wealth_so_far = max(max_wealth_so_far, current_max_wealth)
        return max_wealth_so_far
        
        





if __name__ == "__main__":
    test_cases = [
        [[1, 2, 3], [4, 5, 6]],        # expected: 15
        [[1, 1, 1], [2, 2, 2]],        # expected: 6
        [[3]],                         # expected: 3
        [[0, 0, 0], [0, 0, 0]],        # expected: 0
        [[10, 0], [3, 7], [5, 5]],     # expected: 10
        [[1, 5], [7, 3], [3, 5]],      # expected: 10
        [[2, 8, 7], [7, 1, 3], [1, 9, 5]],  # expected: 17
    ]

    for accounts in test_cases:
        print(f"Input:       {accounts}")
        print(f"Output:      {Solution.richest_customer(accounts)}")
        print("-" * 35)