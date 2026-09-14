package main

import (
	"fmt"
	"strings"
)

func isRectangleOverlap(rec1 []int, rec2 []int) bool {
	return !(rec1[2] <= rec2[0] || rec1[0] >= rec2[2] || rec1[3] <= rec2[1] || rec1[1] >= rec2[3])
}

func main() {
	type testCase struct {
		rec1, rec2 []int
	}

	testCases := []testCase{
		{[]int{0, 0, 2, 2}, []int{1, 1, 3, 3}},
		{[]int{0, 0, 1, 1}, []int{1, 0, 2, 1}},
		{[]int{0, 0, 1, 1}, []int{2, 2, 3, 3}},
		{[]int{0, 0, 3, 3}, []int{1, 1, 2, 2}},
		{[]int{0, 0, 2, 2}, []int{0, 0, 2, 2}},
		{[]int{0, 0, 2, 2}, []int{3, 0, 5, 2}},
	}

	for _, tc := range testCases {
		fmt.Printf("Input:       rec1=%v, rec2=%v\n", tc.rec1, tc.rec2)
		fmt.Printf("Output:      %v\n", isRectangleOverlap(tc.rec1, tc.rec2))
		fmt.Println(strings.Repeat("-", 35))
	}
}
