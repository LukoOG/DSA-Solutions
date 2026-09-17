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

func deleteMiddle(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return nil
	}
	middle_node := head
	end_node := head.Next.Next

	for end_node != nil && end_node.Next != nil {
		middle_node = middle_node.Next
		end_node = end_node.Next.Next
	}

	middle_node.Next = middle_node.Next.Next

	return head
}

func main() {
	testCases := [][]int{
		{1, 3, 4, 7, 1, 2, 6},
		{1, 2, 3, 4},
		{2, 1},
		{1},
		{1, 2, 3},
	}

	for _, values := range testCases {
		original := make([]int, len(values))
		copy(original, values)
		head := buildLinkedList(values)
		result := deleteMiddle(head)
		fmt.Printf("Input:       %v\n", original)
		fmt.Printf("Output:      %v\n", linkedListToSlice(result))
		fmt.Println(strings.Repeat("-", 35))
	}
}
