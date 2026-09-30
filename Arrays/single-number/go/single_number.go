package main

import (
	"fmt"
	"strings"
)

func singleNumber(nums []int) int {
	ans := nums[0]
	for _, val := range nums[1:] {
		ans ^= val
	}
	return ans
}

func main() {
	testCases := [][]int{
		{2, 2, 1},
		{4, 1, 2, 1, 2},
		{1},
		{0, 0, 5},
		{-1, -1, 3},
	}

	for _, nums := range testCases {
		fmt.Printf("Input:       %v\n", nums)
		fmt.Printf("Output:      %d\n", singleNumber(nums))
		fmt.Println(strings.Repeat("-", 35))
	}
}
