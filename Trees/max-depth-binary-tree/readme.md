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

## Approach 1 — DFS Recursion

The maximum depth of a tree rooted at any node is `1 + max(depth of left subtree, depth of right subtree)`. This naturally decomposes into a recursive problem. The base case is a `null` node which contributes a depth of `0`. Each call trusts that its left and right subtrees will return their correct depths, takes the larger of the two, and adds `1` for the current node. The call stack itself acts as the implicit traversal — no auxiliary data structure needed.

### Pseudocode
```python
function maxDepth(root):
    if root is null:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))
```

- **Time:** O(n)
- **Space:** O(h) — call stack depth equals tree height;
            O(log n) balanced, O(n) worst case skewed

---

## Approach 2 — BFS Level Order

Use a queue to process nodes level by level. On each iteration of the outer loop, snapshot the current queue length — this is the number of nodes at the current level. Process exactly that many nodes, enqueuing their children for the next level, then increment the depth counter. When the queue is empty all levels have been processed.

The `levelLength` snapshot is the critical detail — it freezes the boundary between the current level and the next before any children are enqueued.

### Pseudocode
```python
function maxDepth(root):
if root is null:
return 0

queue = [root]
depth = 0

while queue is not empty:
    levelLength = len(queue)
    for i from 0 to levelLength - 1:
        node = dequeue()
        if node.left:  enqueue(node.left)
        if node.right: enqueue(node.right)
    depth++

return depth
```
- **Time:** O(n)
- **Space:** O(w) — queue holds at most the widest level of the tree

---

## When to Use Which

| | DFS | BFS |
|---|---|---|
| Code length | 2 lines | ~15 lines |
| Space | O(h) call stack | O(w) queue |
| Best for | depth, path, subtree problems | level-order, width, shortest path problems |

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