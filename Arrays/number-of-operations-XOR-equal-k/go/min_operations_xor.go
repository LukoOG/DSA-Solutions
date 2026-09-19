package main

import (
	"fmt"
	"strings"
)

func minOperations(nums []int, k int) int {
	var xor int
	for _, val := range nums {
		xor ^= val
	}
	xor ^= k
	count := 0
	for xor != 0 {
		xor &= xor - 1
		count += 1
	}
	return count
}

func main() {
	type testCase struct {
		nums []int
		k    int
	}

	testCases := []testCase{
		{[]int{2, 1, 3, 4}, 1},
		{[]int{2, 0, 2, 0}, 0},
		{[]int{1}, 1},
		{[]int{1}, 0},
		{[]int{0, 0, 0}, 5},
	}

	for _, tc := range testCases {
		fmt.Printf("Input:       nums=%v, k=%d\n", tc.nums, tc.k)
		fmt.Printf("Output:      %d\n", minOperations(tc.nums, tc.k))
		fmt.Println(strings.Repeat("-", 35))
	}
}
