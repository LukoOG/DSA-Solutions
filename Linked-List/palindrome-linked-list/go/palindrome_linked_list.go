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

func isPalindrome(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return true
	}
	//find middle
	var end *ListNode = head
	var middle *ListNode = head

	for end != nil && end.Next != nil {
		end = end.Next.Next
		middle = middle.Next
	}

	//reverse in place
	var prev *ListNode = nil
	var curr *ListNode = middle
	var next *ListNode = nil

	for curr != nil {
		next = curr.Next
		curr.Next = prev
		prev = curr
		curr = next
	}

	//compare
	for prev != nil {
		if prev.Val != head.Val {
			return false
		}
		prev = prev.Next
		head = head.Next
	}

	return true
}

func main() {
	testCases := [][]int{
		{1, 2, 2, 1},
		{1, 2, 3, 2, 1},
		{1, 2},
		{1, 2, 3},
		{1},
		{1, 1},
	}

	for _, values := range testCases {
		head := buildLinkedList(values)
		fmt.Printf("Input:       %v\n", values)
		fmt.Printf("Output:      %v\n", isPalindrome(head))
		fmt.Println(strings.Repeat("-", 35))
	}
}
