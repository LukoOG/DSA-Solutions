# Maximum Depth of Binary Tree

**Platform:** LeetCode — [Problem 104](https://leetcode.com/problems/maximum-depth-of-binary-tree/)  
**Difficulty:** Easy  
**Topic:** Tree, DFS, BFS, Recursion

---

## Problem

Given the root of a binary tree, return its maximum depth — the number of nodes along the longest path from the root to the furthest leaf.

**Example:**

Input: root = [3, 9, 20, null, null, 15, 7]
Output: 3


---

## Approach — DFS Recursion

The maximum depth of a tree rooted at any node is `1 + max(depth of left subtree, depth of right subtree)`. This naturally decomposes into a recursive problem. The base case is a `null` node which contributes a depth of `0` — it doesn't exist, so it adds nothing.

Each call trusts that its left and right subtrees will return their correct depths, takes the larger of the two, and adds `1` for the current node. The call stack itself acts as the implicit traversal — no auxiliary data structure needed.

### Pseudocode
```python
function maxDepth(root):
if root is null:
    return 0
return 1 + max(maxDepth(root.left), maxDepth(root.right))
```

- **Time:** O(n) — every node is visited once
- **Space:** O(h) — call stack depth equals tree height h;
            O(log n) for balanced trees, O(n) worst case for skewed trees

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/max_depth.py` |
| TypeScript | `TS/maxDepth.ts` |
| Go | `go/max_depth.go` |

---

## Running Locally

**Python**
```bash
python3 max_depth.py
```

**TypeScript**
```bash
tsx maxDepth.ts
```

**Go**
```bash
go run max_depth.go
```