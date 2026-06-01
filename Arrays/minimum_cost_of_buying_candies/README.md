# Minimum Cost of Buying Candies With Discount

**Platform:** LeetCode — [Problem 2144](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/)  
**Difficulty:** Easy  
**Topic:** Arrays, Greedy, Sorting

---

## Problem

A store is offering a discount — for every two candies bought, you get a third candy for free. The free candy must be of equal or lesser cost than the cheaper of the two bought. Given an array `cost` of candy prices, return the minimum cost to buy all candies.

**Example:**
Input:  cost = [1, 2, 3]
Output: 5

---

## Approach

I originally solved this buy sorting the array in descending order. By keeping track of the previous 2 costs and checking if the next one is less than or equal to all of the previous 2. I then erase the previous 2 seen and keep looking. Afterwards, I realized that I only needed to skip each third element, so I updated the rust implementation.

### Pseudocode
```
function minimum_cost(cost):
total_cost = 0
cost.sort_descending()
for i in len(cost):
    if i % 3 == 2:
        continue
    total_cost += cost[i]
return total_cost
```

- **Time:** O(n log n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/minimum_cost_candies.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/minimumCostCandies.ts` |

---

## Running Locally

**Python**
```bash
python3 minimum_cost_candies.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx minimumCostCandies.ts
```