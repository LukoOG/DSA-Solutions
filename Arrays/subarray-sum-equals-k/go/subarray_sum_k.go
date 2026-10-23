package main

import (
	"fmt"
	"strings"
)

func subarraySum(nums []int, k int) int {
	count := 0
	seen := map[int]int{0: 1}
	current_sum := 0

	for _, num := range nums {
		current_sum += num
		key := current_sum - k
		if val, exists := seen[key]; exists {
			count += val
		}
		seen[current_sum] += 1
	}

	return count
}

func main() {
	type testCase struct {
		nums []int
		k    int
	}

	testCases := []testCase{
		{[]int{1, 1, 1}, 2},
		{[]int{1, 2, 3}, 3},
		{[]int{1, -1, 1}, 1},
		{[]int{0, 0, 0}, 0},
		{[]int{-1, -1, 1}, 0},
		{[]int{1}, 1},
		{[]int{1, 2, 3, 4, 5}, 15},
	}

	for _, tc := range testCases {
		fmt.Printf("Input:       nums=%v, k=%d\n", tc.nums, tc.k)
		fmt.Printf("Output:      %d\n", subarraySum(tc.nums, tc.k))
		fmt.Println(strings.Repeat("-", 35))
	}
}
