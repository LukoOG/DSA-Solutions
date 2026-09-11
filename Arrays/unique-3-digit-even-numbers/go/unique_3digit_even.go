package main

import (
	"fmt"
	"strings"
)

func Contains[T comparable](slice []T, target T) bool {
	for _, item := range slice {
		if item == target {
			return true
		}
	}
	return false
}

func totalNumbers(digits []int) int {
	count := 0
	vis := make([]bool, 1000)
	for i := range digits {
		for j := range digits {
			for k := range digits {
				if i == j || i == k || k == j {
					continue
				}
				digit := digits[i]*100 + digits[j]*10 + digits[k]
				//I previously used Contains on a separate slice to check if already seen
				if digit%2 == 0 && digit/100 > 0 && !vis[digit] {
					vis[digit] = true
					count++
				}
			}
		}
	}
	return count
}

func main() {
	testCases := [][]int{
		{1, 2, 3},
		{2, 2, 8, 8, 2},
		{0, 2, 0},
		{0, 0, 0},
		{1, 3, 5},
		{0, 1, 2, 3},
	}

	for _, digits := range testCases {
		fmt.Printf("Input:       %v\n", digits)
		fmt.Printf("Output:      %d\n", totalNumbers(digits))
		fmt.Println(strings.Repeat("-", 35))
	}
}
