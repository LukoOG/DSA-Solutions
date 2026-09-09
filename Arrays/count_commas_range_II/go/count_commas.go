package main

import (
	"fmt"
	"strings"
)

func countCommas(n int64) int64 {
	return 0
}

func main() {
	testCases := []int64{
		998,
		1002,
		1000,
		999999,
		1000000,
		1000000000000000,
	}

	for _, n := range testCases {
		fmt.Printf("Input:       %d\n", n)
		fmt.Printf("Output:      %d\n", countCommas(n))
		fmt.Println(strings.Repeat("-", 35))
	}
}
