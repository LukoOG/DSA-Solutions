# Number of Steps to Reduce a Number to Zero

**Platform:** LeetCode — [Problem 1342](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)  
**Difficulty:** Easy  
**Topic:** Math, Bit Manipulation

---

## Problem

Given a non-negative integer `num`, return the number of steps to reduce it to zero. If the current number is even, divide it by 2; if odd, subtract 1.

**Example:**
Input:  14
Output: 6

---

## Approach — While Loop with Even/Odd Check

I directly use the process given in the problem. On each iteration, halve if even or subtract 1 if odd, incrementing a step counter until the num integer reaches zero.

- **Time:** O(log n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/steps_to_zero.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/stepsToZero.ts` |

---

## Running Locally

**Python**
```bash
python3 steps_to_zero.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx stepsToZero.ts
```