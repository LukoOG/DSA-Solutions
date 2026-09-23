package main

import (
	"fmt"
	"strings"
)

type MyStack struct {
}

func Constructor() MyStack {

}

func (this *MyStack) Push(x int) {

}

func (this *MyStack) Pop() int {

}

func (this *MyStack) Top() int {

}

func (this *MyStack) Empty() bool {

}

func main() {
	type testCase struct {
		ops      []string
		args     [][]int
		expected []any
	}

	testCases := []testCase{
		{
			ops:      []string{"push", "push", "top", "pop", "empty"},
			args:     [][]int{{1}, {2}, {}, {}, {}},
			expected: []any{nil, nil, 2, 2, false},
		},
		{
			ops:      []string{"push", "empty", "pop", "empty"},
			args:     [][]int{{5}, {}, {}, {}},
			expected: []any{nil, false, 5, true},
		},
		{
			ops:      []string{"push", "push", "push", "pop", "top", "pop", "empty"},
			args:     [][]int{{1}, {2}, {3}, {}, {}, {}, {}},
			expected: []any{nil, nil, nil, 3, 2, 2, false},
		},
	}

	for _, tc := range testCases {
		stack := Constructor()
		results := []any{}

		for i, op := range tc.ops {
			switch op {
			case "push":
				stack.Push(tc.args[i][0])
				results = append(results, nil)
			case "pop":
				results = append(results, stack.Pop())
			case "top":
				results = append(results, stack.Top())
			case "empty":
				results = append(results, stack.Empty())
			}
		}

		fmt.Printf("Ops:         %v\n", tc.ops)
		fmt.Printf("Args:        %v\n", tc.args)
		fmt.Printf("Output:      %v\n", results)
		fmt.Printf("Expected:    %v\n", tc.expected)
		fmt.Println(strings.Repeat("-", 35))
	}
}
