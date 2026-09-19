# Minimum Number of Operations to Make Array XOR Equal to K

**Platform:** LeetCode — [Problem 2997](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/)  
**Difficulty:** Medium  
**Topic:** Arrays, Bit Manipulation

---

## Problem

Given an integer array `nums` and an integer `k`, you can flip any single bit of any element in `nums` in one operation. Return the minimum number of operations to make the XOR of all elements equal to `k`.

**Example:**

Input: nums = [2, 1, 3, 4], k = 1
Output: 2


---

## Approach — Total XOR then Popcount

XOR-ing all elements together gives the current XOR of the array. XOR-ing that result with `k` produces a difference mask — each set bit in the mask represents a bit position where the current array XOR and `k` disagree. Each disagreeing bit requires exactly one flip operation, so the answer is the number of set bits (popcount) in the mask.

The popcount strategy varies by language. In Go, Brian Kernighan's algorithm is used — `xor &= xor - 1` clears the lowest set bit each iteration, counting only as many iterations as there are set bits. In Python and Rust, the built-in `bit_count()` and `count_ones()` are preferred over a manual loop since they map directly to a single CPU instruction (`POPCNT`) via compiler optimisations, making them faster than any hand-written loop.

### Pseudocode
```
function minOperations(nums, k):
    xor = 0
    for val in nums:
    xor ^= val

    xor ^= k   // difference mask between current XOR and target

    // count set bits in xor
    count = 0
    while xor != 0:
        xor &= xor - 1   // clear lowest set bit (Brian Kernighan)
        count++

    return count
```
- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/min_operations_xor.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/minOperationsXor.ts` |
| Go | `go/min_operations_xor.go` |

---

## Running Locally

**Python**
```bash
python3 min_operations_xor.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx minOperationsXor.ts
```

**Go**
```bash
go run 