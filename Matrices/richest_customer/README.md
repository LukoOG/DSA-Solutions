# Richest Customer Wealth

**Platform:** LeetCode — [Problem 1672](https://leetcode.com/problems/richest-customer-wealth/)  
**Difficulty:** Easy  
**Topic:** Arrays, Matrix

---

## Problem

Given an `m x n` matrix `accounts` where `accounts[i][j]` is the amount of money the `i`th customer has in the `j`th bank, return the wealth of the richest customer.

**Example:**
Input:  [[1, 2, 3], [4, 5, 6]]
Output: 15

---

## Approach — Row Sum with Running Max

I iterate through each customer's accounts, sum their wealth, and track the maximum seen so far. No need to store all sums — a single max variable suffices.

- **Time:** O(m × n)
- **Space:** O(1)

## Pseudocode

```text
set richest = 0

for each customer in accounts:
    set wealth = 0

    for each bank_balance in customer:
        wealth += bank_balance

    richest = max(richest, wealth)

return richest
```

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/richest_customer.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/richestCustomer.ts` |

---

## Running Locally

**Python**
```bash
python3 richest_customer.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx richestCustomer.ts
```