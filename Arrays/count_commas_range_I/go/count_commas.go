package main

import (
	"fmt"
	"strings"
)

func countCommas(n int) int {
	return max(0, n-1000+1)
}

func main() {
	testCases := []int{1, 999, 1000, 1002, 10000, 100000}

	for _, n := range testCases {
		fmt.Printf("Input:       %d\n", n)
		fmt.Printf("Output:      %d\n", countCommas(n))
		fmt.Println(strings.Repeat("-", 35))
	}
}
