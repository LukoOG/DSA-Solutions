package main

import (
	"fmt"
	"strings"
)

func longestConsecutive(nums []int) int {
	num_set := make(map[int]bool)
	for _, num := range nums {
		num_set[num] = true
	}

	longest := 0

	for num, _ := range num_set {
		if !num_set[num-1] {
			curr := num
			curr_longest := 0

			for num_set[curr] {
				curr++
				curr_longest++
			}

			if curr_longest > longest {
				longest = curr_longest
			}
		}
	}

	return longest
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
