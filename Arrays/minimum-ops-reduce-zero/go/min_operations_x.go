package main

import (
	"fmt"
	"strings"
)

func sum(nums []int) int {
	var total int
	for _, val := range nums {
		total += val
	}
	return total
}

func minOperations(nums []int, x int) int {
	target := sum(nums) - x
	if target < 0 {
		return -1
	}
	if target == 0 {
		return len(nums)
	}

	left := 0
	current_sum := 0
	max_len := -1

	for right := 0; right < len(nums); right++ {
		current_sum += nums[right]
		for current_sum > target && left <= right {
			current_sum -= nums[left]
			left += 1
		}
		if current_sum == target {
			max_len = max(max_len, right-left+1)
		}
	}

	if max_len == -1 {
		return -1
	}
	return len(nums) - max_len
}

func main() {
	type testCase struct {
		nums []int
		x    int
	}

	testCases := []testCase{
		{[]int{1, 1, 4, 2, 3}, 5},
		{[]int{5, 6, 7, 8, 9}, 4},
		{[]int{3, 2, 20, 1, 1, 3}, 10},
		{[]int{1, 1}, 3},
		{[]int{1, 1, 1, 1, 1}, 5},
		{[]int{5}, 5},
		{[]int{1, 2, 3, 4}, 3},
	}

	for _, tc := range testCases {
		fmt.Printf("Input:       nums=%v, x=%d\n", tc.nums, tc.x)
		fmt.Printf("Output:      %d\n", minOperations(tc.nums, tc.x))
		fmt.Println(strings.Repeat("-", 35))
	}
}
