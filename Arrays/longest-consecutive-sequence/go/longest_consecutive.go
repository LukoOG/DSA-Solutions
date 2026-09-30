package main

import (
	"fmt"
	"strings"
)

func longestConsecutive(nums []int) int {
	return 0
}

func main() {
	testCases := [][]int{
		{100, 4, 200, 1, 3, 2},
		{0, 3, 7, 2, 5, 8, 4, 6, 0, 1},
		{},
		{1},
		{1, 2, 3, 4, 5},
		{5, 4, 3, 2, 1},
		{1, 3, 5, 7},
	}

	for _, nums := range testCases {
		fmt.Printf("Input:       %v\n", nums)
		fmt.Printf("Output:      %d\n", longestConsecutive(nums))
		fmt.Println(strings.Repeat("-", 35))
	}
}
