package main

import (
	"fmt"
	"strings"
)

func removeElement(nums []int, val int) int {
	k := 0
	for i := 0; i <= len(nums)-1; i++ {
		if nums[i] != val {
			nums[k] = nums[i]
			k++
		}
	}
	return k
}

func main() {
	type testCase struct {
		nums []int
		val  int
	}

	testCases := []testCase{
		{[]int{3, 2, 2, 3}, 3},
		{[]int{0, 1, 2, 2, 3, 0, 4, 2}, 2},
		{[]int{1}, 1},
		{[]int{1}, 2},
		{[]int{2, 2, 2}, 2},
		{[]int{1, 2, 3, 4}, 5},
	}

	for _, tc := range testCases {
		original := make([]int, len(tc.nums))
		copy(original, tc.nums)
		k := removeElement(tc.nums, tc.val)
		fmt.Printf("Input:       nums=%v, val=%d\n", original, tc.val)
		fmt.Printf("Output:      k=%d, nums=%v\n", k, tc.nums[:k])
		fmt.Println(strings.Repeat("-", 35))
	}
}
