# Furthest Point From Origin

**Platform:** LeetCode — [Problem 2833](https://leetcode.com/problems/furthest-point-from-origin/)  
**Difficulty:** Easy  
**Topic:** Strings, Greedy

---

## Problem

Given a string `moves` of length `n` consisting of `'L'`, `'R'`, and `'_'`, return the furthest distance from the origin you can reach. `'_'` can be used as either `'L'` or `'R'`.

**Example:**
Input:  moves = "L_RL__R"
Output: 3

---

## Approach

So I use a greedy algorithm. I initialize a variable distance from origin and ace. While I loop through moves, I add 1 to distance from origin if I encounter an L or subtract 1 if I encouter an R, else I increment ace. The final formula is |distance from origin| + ace.

### Pseudocode
function furthestDistanceFromOrigin(moves):
dist = 0
ace  = 0
for move in moves:
    if move == 'L':
        dist += 1
    else if move == 'R':
        dist -= 1
    else:
        ace += 1

return |dist| + ace

- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/furthest_origin.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/furthestOrigin.ts` |

---

## Running Locally

**Python**
```bash
python3 furthest_origin.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx furthestOrigin.ts
```