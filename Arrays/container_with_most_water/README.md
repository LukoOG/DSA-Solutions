# Container With Most Water

**Platform:** LeetCode — [Problem 11](https://leetcode.com/problems/container-with-most-water/)  
**Difficulty:** Medium  
**Topic:** Arrays, Two Pointers, Greedy

---

## Problem

Given an integer array `height` of length `n`, where each element represents a vertical line on a chart, find two lines that together with the x-axis form a container that holds the most water. Return the maximum amount of water the container can store.

**Example:**
Input:  height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
Output: 49

---

## Approach — Two Pointers

Start with one pointer at the absolute left and one at the absolute right of the array, maximising the initial width. The area is bounded by the shorter wall — the container would overflow if we used the bigger wall, so the current area is `min(tank[left], tank[right]) * (right - left)`.

After I compute the current area, I update the maximum area value if the current area is greater. The pointer of the shorter wall is then moved 1 step closer in order to find a taller wall because moving the taller pointer inward would only reduce width without guaranteeing I'd see a taller wall, so the shorter side is always the one advanced in search of a better wall.

### Pseudocode
```
function maxArea(tank):
left  = 0
right = length of tank - 1
maxArea = 0
while left < right:
    wall        = min(tank[left], tank[right])
    distance    = right - left
    currentArea = wall * distance
    maxArea     = max(maxArea, currentArea)

    if tank[left] < tank[right]:
        left++
    else:
        right--

return maxArea
```

- **Time:** O(n)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/container_water.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/containerWater.ts` |

---

## Running Locally

**Python**
```bash
python3 container_water.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx containerWater.ts
```