package main

import (
	"fmt"
	"strings"
)

func minAddToMakeValid(s string) int {
	openNeeded := 0
	closeNeeded := 0
	for i := 0; i < len(s); i++ {
		if s[i] == '(' {
			closeNeeded++
		} else {
			if closeNeeded > 0 {
				closeNeeded--
			} else {
				openNeeded++
			}
		}
	}
	return openNeeded + closeNeeded
}

func main() {
	testCases := []string{
		"())",
		"(((",
		"()",
		"())))((",
		"",
		")((",
	}

	for _, s := range testCases {
		fmt.Printf("Input:       %q\n", s)
		fmt.Printf("Output:      %d\n", minAddToMakeValid(s))
		fmt.Println(strings.Repeat("-", 35))
	}
}
