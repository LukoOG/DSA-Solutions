package main

import (
	"fmt"
	"strings"
)

func productExceptSelf(nums []int) []int {
	n := len(nums)
	ans := make([]int, n)
	prefix := 1
	for i := range nums {
		// fmt.Println("", i)
		ans[i] = prefix
		prefix *= nums[i]
	}
	suffix := 1
	for i := n - 1; i >= 0; i-- {
		ans[i] *= suffix
		suffix *= nums[i]
	}
	return ans
}

func main() {
	testCases := [][]int{
		{1, 2, 3, 4},
		{-1, 1, 0, -3, 3},
		{0, 0},
		{1, 1},
		{-1, -1, -1, -1},
		{2, 3},
	}

	for _, nums := range testCases {
		fmt.Printf("Input:       %v\n", nums)
		fmt.Printf("Output:      %v\n", productExceptSelf(nums))
		fmt.Println(strings.Repeat("-", 35))
	}
}
