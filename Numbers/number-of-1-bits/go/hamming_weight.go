package main

import (
	"fmt"
	"strconv"
	"strings"
)

// Using the Brian Kernighan’s Algorithm I just discovered
func hammingWeight(n int) int {
	var count int = 0
	local := n
	for local != 0 {
		local = local & (local - 1)
		count += 1
	}
	return count
}

func main() {
	testCases := []int{11, 128, 2147483645, 0, 1, 2147483647}

	for _, n := range testCases {
		fmt.Printf("Input:       %d (binary: %s)\n", n, strconv.FormatInt(int64(n), 2))
		fmt.Printf("Output:      %d\n", hammingWeight(n))
		fmt.Println(strings.Repeat("-", 35))
	}
}
