package main

import (
	"fmt"
	"strings"
)

type NumArray struct {
	prefix []int
}

func Constructor(nums []int) NumArray {
	prefix := make([]int, len(nums)+1)
	for i, num := range nums {
		prefix[i+1] = prefix[i] + num
	}
	return NumArray{prefix: prefix}
}

func (this *NumArray) SumRange(left int, right int) int {
	return this.prefix[right+1] - this.prefix[left]
}

func main() {
	type query struct{ l, r int }
	type testCase struct {
		nums     []int
		queries  []query
		expected []int
	}

	testCases := []testCase{
		{
			nums:     []int{-2, 0, 3, -5, 2, -1},
			queries:  []query{{0, 2}, {2, 5}, {0, 5}},
			expected: []int{1, -1, -3},
		},
		{
			nums:     []int{1, 2, 3, 4, 5},
			queries:  []query{{0, 4}, {1, 3}, {0, 0}},
			expected: []int{15, 9, 1},
		},
		{
			nums:     []int{5},
			queries:  []query{{0, 0}},
			expected: []int{5},
		},
	}

	for _, tc := range testCases {
		obj := Constructor(tc.nums)
		results := make([]int, len(tc.queries))
		for i, q := range tc.queries {
			results[i] = obj.SumRange(q.l, q.r)
		}
		fmt.Printf("nums:        %v\n", tc.nums)
		fmt.Printf("queries:     %v\n", tc.queries)
		fmt.Printf("Output:      %v\n", results)
		fmt.Printf("Expected:    %v\n", tc.expected)
		fmt.Println(strings.Repeat("-", 35))
	}
}
