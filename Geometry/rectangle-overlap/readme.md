# Rectangle Overlap

**Platform:** LeetCode — [Problem 836](https://leetcode.com/problems/rectangle-overlap/)  
**Difficulty:** Easy  
**Topic:** Math, Geometry

---

## Problem

Given two axis-aligned rectangles `rec1` and `rec2`, each represented as `[x1, y1, x2, y2]` where `(x1, y1)` is the bottom-left corner and `(x2, y2)` is the top-right corner, return `true` if they overlap. Two rectangles that only touch at an edge or corner do not count as overlapping.

**Example:**

Input: rec1 = [0, 0, 2, 2], rec2 = [1, 1, 3, 3]
Output: true


---

## Approach — Edge Comparison (Negated Non-Overlap)

Two rectangles do NOT overlap if one is completely to the left, right, above, or below the other. These four non-overlap conditions are:

rec1 is left of rec2: rec1[2] <= rec2[0]
rec1 is right of rec2: rec1[0] >= rec2[2]
rec1 is below rec2: rec1[3] <= rec2[1]
rec1 is above rec2: rec1[1] >= rec2[3]


Rather than checking for overlap directly, the solution checks if any of these non-overlap conditions hold and negates the result. Strict inequalities (`<=`, `>=`) correctly exclude the touching-edge case since edges touching is not considered an overlap.

### Pseudocode
```
function isRectangleOverlap(rec1, rec2):
    left_of = rec1[2] <= rec2[0]
    right_of = rec1[0] >= rec2[2]
    below = rec1[3] <= rec2[1]
    above = rec1[1] >= rec2[3]

    return NOT (left_of OR right_of OR below OR above)
```

- **Time:** O(1)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/rectangle_overlap.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/rectangleOverlap.ts` |
| Go | `go/rectangle_overlap.go` |

---

## Running Locally

**Python**
```bash
python3 rectangle_overlap.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx rectangleOverlap.ts
```

**Go**
```bash
go run rectangle_overlap.go
```