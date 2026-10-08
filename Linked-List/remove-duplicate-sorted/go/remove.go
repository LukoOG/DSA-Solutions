package main

import (
	"fmt"
	"strings"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func buildLinkedList(values []int) *ListNode {
	if len(values) == 0 {
		return nil
	}
	head := &ListNode{Val: values[0]}
	current := head
	for _, val := range values[1:] {
		current.Next = &ListNode{Val: val}
		current = current.Next
	}
	return head
}

func linkedListToSlice(node *ListNode) []int {
	result := []int{}
	for node != nil {
		result = append(result, node.Val)
		node = node.Next
	}
	return result
}

func deleteDuplicates(head *ListNode) *ListNode {
	curr := head
	for curr != nil && curr.Next != nil {
		if curr.Val == curr.Next.Val {
			curr.Next = curr.Next.Next
		} else {
			curr = curr.Next
		}
	}
	return head
}

func main() {
	testCases := [][]int{
		{1, 1, 2},
		{1, 1, 2, 3, 3},
		{1, 2, 3},
		{1, 1, 1, 1},
		{1},
		{},
	}

	for _, values := range testCases {
		head := buildLinkedList(values)
		result := deleteDuplicates(head)
		fmt.Printf("Input:       %v\n", values)
		fmt.Printf("Output:      %v\n", linkedListToSlice(result))
		fmt.Println(strings.Repeat("-", 35))
	}
}
