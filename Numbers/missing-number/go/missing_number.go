package main

import (
	"fmt"
	"strings"
)

func missingNumber(n []int) int {
	number := len(n)
	for i, num := range n {
		number ^= i ^ num
	}
	return number
}

func main() {
	testCases := [][]int{
		{3, 0, 1},
		{0, 1},
		{9, 6, 4, 2, 3, 5, 7, 0, 1},
		{0},
		{1},
	}

	for _, nums := range testCases {
		fmt.Printf("Input:       %v\n", nums)
		fmt.Printf("Output:      %d\n", missingNumber(nums))
		fmt.Println(strings.Repeat("-", 35))
	}
}
