package main

import (
	"fmt"
	"strings"
)

func productExceptSelf(nums []int) []int {
	return []int{0}
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
