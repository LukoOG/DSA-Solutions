# FizzBuzz

**Platform:** LeetCode — [Problem 412](https://leetcode.com/problems/fizz-buzz/)  
**Difficulty:** Easy  
**Topic:** Math, Strings

---

## Problem

Given an integer `n`, return a list of strings for every number from `1` to `n` where multiples of 3 are `"Fizz"`, multiples of 5 are `"Buzz"`, multiples of both are `"FizzBuzz"`, and all others are the number itself as a string.

**Example:**
Input:  5
Output: ["1", "2", "Fizz", "4", "Buzz"]

---

## Approach — Linear Scan with Modulo

To solve this, I iterate from 1 to n, checking divisibility in this order: FizzBuzz first, then Fizz, then Buzz, then the number. Order matters — checking 15 before 3 and 5 avoids a combined condition.

- **Time:** O(n)
- **Space:** O(n)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/fizzbuzz.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/fizzBuzz.ts` |

---

## Running Locally

**Python**
```bash
python3 fizzbuzz.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx fizzBuzz.ts
```