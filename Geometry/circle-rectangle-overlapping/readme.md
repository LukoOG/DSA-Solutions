# Circle and Rectangle Overlapping

**Platform:** LeetCode — [Problem 1401](https://leetcode.com/problems/circle-and-rectangle-overlapping/)  
**Difficulty:** Medium  
**Topic:** Math, Geometry

---

## Problem

Given a circle defined by its `radius` and center `(xCenter, yCenter)`, and an axis-aligned rectangle defined by its bottom-left corner `(x1, y1)` and top-right corner `(x2, y2)`, return `true` if the circle and rectangle overlap.

**Example:**

Input: radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
Output: true


---

## Approach — Closest Point via Clamp

The key insight is to find the **closest point on the rectangle to the circle's center**. If the distance from the center to that point is less than or equal to the radius, they overlap.

The closest point is found by clamping the circle's center coordinates to the rectangle's bounds independently on each axis. Clamping restricts a value to a range — if the center is inside the rectangle's bounds on that axis, the closest point on that axis is the center itself (distance component zero). If it's outside, the closest point is the nearest edge.

Two equivalent implementations:

**Explicit distance helper** — computes how far `k` is outside the interval `[left, right]`, returning 0 if inside:
``
if k < left: return left - k
if k > right: return k - right
else: return 0
```

**Clamp formula** — finds the closest point directly then measures displacement:

a = xCenter - clamp(xCenter, x1, x2)
b = yCenter - clamp(yCenter, y1, y2)


where `clamp(k, left, right) = max(left, min(right, k))`. Both produce the same `a` and `b` — the displacement vector from the circle's center to the closest rectangle point. The overlap check is then `a² + b² <= radius²`, avoiding a square root by comparing squared distances.

### Pseudocode
```
function checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2):
    a = xCenter - clamp(xCenter, x1, x2)
    b = yCenter - clamp(yCenter, y1, y2)
    return aa + bb <= radius * radius

function clamp(k, left, right):
    return max(left, min(right, k))
```

- **Time:** O(1)
- **Space:** O(1)

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/circle_rectangle_overlap.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/circleRectangleOverlap.ts` |
| Go | `go/circle_rectangle_overlap.go` |

---

## Running Locally

**Python**
```bash
python3 circle_rectangle_overlap.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx circleRectangleOverlap.ts
```

**Go**
```bash
go run circle_rectangle_overlap.go
```