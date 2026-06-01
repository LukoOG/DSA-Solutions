from typing import List

class Solution:
    def minimumCost(self, cost: List[int])->int:
        cost.sort(reverse=True)
        total_cost = 0
        seen = []
        i = 0
        while i < len(cost):
            current_cost = cost[i]
            if len(seen) < 2:
                total_cost += current_cost
                seen.append(current_cost)
            elif all(lambda x: x >= current_cost for x in seen):
                seen.clear()
            else:
                total_cost += current_cost
            i += 1
        return total_cost
        
        
        
        

if __name__ == "__main__":
    test_cases = [
        [1, 2, 3],           # → 5, get 3 free
        [6, 5, 7, 9, 2, 2],  # → 23, two free candies
        [5, 5],              # → 10, no free candy yet
        [1],                 # → 1, single candy
        [5, 5, 5, 5],        # → 15, one free from each group of 3
    ]

    for cost in test_cases:
        print(f"Input:       {cost}")
        print(f"Output:      {Solution().minimumCost(cost)}")
        print("-" * 35)