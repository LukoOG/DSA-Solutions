package main

import (
	"fmt"
	"strings"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func buildTree(values []interface{}) *TreeNode {
	if len(values) == 0 || values[0] == nil {
		return nil
	}
	root := &TreeNode{Val: values[0].(int)}
	queue := []*TreeNode{root}
	i := 1
	for len(queue) > 0 && i < len(values) {
		node := queue[0]
		queue = queue[1:]
		if i < len(values) && values[i] != nil {
			node.Left = &TreeNode{Val: values[i].(int)}
			queue = append(queue, node.Left)
		}
		i++
		if i < len(values) && values[i] != nil {
			node.Right = &TreeNode{Val: values[i].(int)}
			queue = append(queue, node.Right)
		}
		i++
	}
	return root
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return 1 + max(maxDepth(root.Left), maxDepth(root.Right))
}

// /BFS Approach
func bfs_maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	depth := 0
	queue := []*TreeNode{root}
	for len(queue) > 0 {
		levelLength := len(queue)
		for i := 0; i < levelLength; i++ {
			node := queue[0]
			queue[0] = nil
			queue = queue[1:]
			if node.Left != nil {
				queue = append(queue, node.Left)
			}

			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		depth++
	}
	return depth
}

func main() {
	testCases := [][]interface{}{
		{3, 9, 20, nil, nil, 15, 7},
		{1, nil, 2},
		{},
		{1},
		{1, 2, 3, 4, 5},
	}

	for _, values := range testCases {
		root := buildTree(values)
		fmt.Printf("Input:       %v\n", values)
		fmt.Printf("Output:      %d\n", maxDepth(root))
		fmt.Println(strings.Repeat("-", 35))
	}
}
