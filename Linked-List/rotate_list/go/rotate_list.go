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

func rotateRight(head *ListNode, k int) *ListNode {
	if k == 0 || head == nil || head.Next == nil {
		return head
	}
	length := 1
	tail := head

	for tail.Next != nil {
		tail = tail.Next
		length += 1
	}

	i := k % length
	if i == 0 {
		return head
	}
	tail.Next = head

	new_tail_post := length - i - 1

	for new_tail_post > 0 {
		head = head.Next
		new_tail_post -= 1
	}

	new_head := head.Next
	head.Next = nil

	return new_head

}

func main() {
	type testCase struct {
		values []int
		k      int
	}

	testCases := []testCase{
		{[]int{1, 2, 3, 4, 5}, 2},
		{[]int{0, 1, 2}, 4},
		{[]int{1}, 0},
		{[]int{1, 2}, 1},
		{[]int{1, 2, 3}, 3},
	}

	for _, tc := range testCases {
		original := make([]int, len(tc.values))
		copy(original, tc.values)
		head := buildLinkedList(tc.values)
		result := rotateRight(head, tc.k)
		fmt.Printf("Input:       %v, k=%d\n", original, tc.k)
		fmt.Printf("Output:      %v\n", linkedListToSlice(result))
		fmt.Println(strings.Repeat("-", 35))
	}
}
