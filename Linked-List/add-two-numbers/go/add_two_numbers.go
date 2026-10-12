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

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	dummy := &ListNode{Val: 0}
	current := dummy
	carry := 0

	for l1 != nil || l2 != nil || carry != 0 {
		l1Value := 0
		if l1 != nil {
			l1Value = l1.Val
		}

		l2Value := 0
		if l2 != nil {
			l2Value = l2.Val
		}

		sum := l1Value + l2Value + carry

		carry = sum / 10
		digit := sum % 10

		current.Next = &ListNode{Val: digit}
		current = current.Next

		if l1 != nil {
			l1 = l1.Next
		}
		if l2 != nil {
			l2 = l2.Next
		}
	}

	return dummy.Next
}

func main() {
	type testCase struct {
		l1, l2 []int
	}

	testCases := []testCase{
		{[]int{2, 4, 3}, []int{5, 6, 4}},
		{[]int{0}, []int{0}},
		{[]int{9, 9, 9, 9}, []int{9, 9, 9}},
		{[]int{1}, []int{9, 9}},
		{[]int{5}, []int{5}},
	}

	for _, tc := range testCases {
		l1 := buildLinkedList(tc.l1)
		l2 := buildLinkedList(tc.l2)
		result := addTwoNumbers(l1, l2)
		fmt.Printf("Input:       %v + %v\n", tc.l1, tc.l2)
		fmt.Printf("Output:      %v\n", linkedListToSlice(result))
		fmt.Println(strings.Repeat("-", 35))
	}
}
