package main

import (
	"fmt"
	"strings"
)

func countBits(n int) []int {
	dp := make([]int, n+1)
	for i := 1; i < n+1; i++ {
		dp[i] = dp[i>>1] + i&1
	}
	return dp
}

func main() {
	testCases := []int{0, 1, 2, 5, 8, 16}

	for _, n := range testCases {
		fmt.Printf("Input:       %d\n", n)
		fmt.Printf("Output:      %v\n", countBits(n))
		fmt.Println(strings.Repeat("-", 35))
	}
}
