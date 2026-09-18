package main

import (
	"fmt"
	"strings"
)

func arraySign(nums []int) int {
	var sign int = 1
	for _, num := range nums {
		if num == 0 {
			return 0
		} else if num < 0 {
			sign = -1 * sign
		}
	}
	return sign
}

func main() {
	testCases := [][]int{
		{-1, -2, -3, -4, 3, 2, 1},
		{1, 5, 0, 2, -3},
		{-1, 1, -1, 1, -1},
		{1, 2, 3, 4},
		{-1, -1, -1},
		{0},
	}

	for _, nums := range testCases {
		fmt.Printf("Input:       %v\n", nums)
		fmt.Printf("Output:      %d\n", arraySign(nums))
		fmt.Println(strings.Repeat("-", 35))
	}
}
