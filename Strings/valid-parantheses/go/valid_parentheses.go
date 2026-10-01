package main

import (
	"fmt"
	"strings"
)

func isValid(s string) bool {
	brackets := map[rune]rune{
		'(': ')',
		'{': '}',
		'[': ']',
	}

	var stack []rune
	for _, c := range s {
		if closer, isOpening := brackets[c]; isOpening {
			stack = append(stack, closer)
		} else {
			if len(stack) == 0 || stack[len(stack)-1] != c {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}
	return len(stack) == 0
}

func main() {
	testCases := []string{
		"()",
		"()[]{}",
		"(]",
		"([)]",
		"{[]}",
		"",
		"(((",
		"]",
	}

	for _, s := range testCases {
		fmt.Printf("Input:       %q\n", s)
		fmt.Printf("Output:      %v\n", isValid(s))
		fmt.Println(strings.Repeat("-", 35))
	}
}
