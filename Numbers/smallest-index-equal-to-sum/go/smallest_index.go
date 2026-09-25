package main

import (
	"fmt"
	"strings"
)

func sumOfDigits(num int) int {
	sum := 0
	for num > 0 {
		d := num % 10
		sum += d
		num /= 10
	}
	return sum
}

func smallestIndex(nums []int) int {
	for i, num := range nums {
		if i == sumOfDigits(num) {
			return i
		}
	}
	return -1
}

func main() {
	testCases := [][]int{
		{1, 3, 2},
		{1, 10, 11},
		{0, 1, 2, 3, 4},
		{5, 4, 3, 2, 1},
		{0},
		{1, 2, 3, 4, 10},
	}

	for _, nums := range testCases {
		fmt.Printf("Input:       %v\n", nums)
		fmt.Printf("Output:      %d\n", smallestIndex(nums))
		fmt.Println(strings.Repeat("-", 35))
	}
}
