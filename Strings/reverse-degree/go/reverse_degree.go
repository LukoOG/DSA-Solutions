package main

import (
	"fmt"
	"strings"
)

func reverseDegree(s string) int {
	sum := 0
	for i := 1; i <= len(s); i++ {
		sum += i * (123 - int(s[i-1]))
	}
	return sum
}

func main() {
	testCases := []string{"abc", "zza", "a", "z", "az", "reverse"}

	for _, s := range testCases {
		fmt.Printf("Input:       %q\n", s)
		fmt.Printf("Output:      %d\n", reverseDegree(s))
		fmt.Println(strings.Repeat("-", 35))
	}
}
