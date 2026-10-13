from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def build_tree(values: list) -> Optional[TreeNode]:
    if not values or values[0] is None:
        return None
    root = TreeNode(values[0])
    queue = [root]
    i = 1
    while queue and i < len(values):
        node = queue.pop(0)
        if i < len(values) and values[i] is not None:
            node.left = TreeNode(values[i])
            queue.append(node.left)
        i += 1
        if i < len(values) and values[i] is not None:
            node.right = TreeNode(values[i])
            queue.append(node.right)
        i += 1
    return root

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))

if __name__ == "__main__":
    test_cases = [
        [3, 9, 20, None, None, 15, 7],   # → 3
        [1, None, 2],                     # → 2, right-skewed
        [],                               # → 0, empty tree
        [1],                              # → 1, single node
        [1, 2, 3, 4, 5],                 # → 3, complete tree
    ]

    for values in test_cases:
        root = build_tree(values)
        print(f"Input:       {values}")
        print(f"Output:      {Solution().maxDepth(root)}")
        print("-" * 35)