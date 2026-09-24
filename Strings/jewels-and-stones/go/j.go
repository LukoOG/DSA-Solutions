package main

import (
	"fmt"
	"strings"
)

func numJewelsInStones(jewels string, stones string) int {
	j := make(map[rune]struct{})
	for _, char := range jewels {
		j[char] = struct{}{}
	}

	count := 0
	for _, char := range stones {
		if _, exists := j[char]; exists {
			count += 1
		}
	}
	return count
}

func main() {
	type testCase struct {
		jewels, stones string
	}

	testCases := []testCase{
		{"aA", "aAAbbbb"},
		{"z", "ZZZ"},
		{"a", "a"},
		{"a", "b"},
		{"abc", "aabbcc"},
		{"aA", ""},
	}

	for _, tc := range testCases {
		fmt.Printf("Input:       jewels=%q, stones=%q\n", tc.jewels, tc.stones)
		fmt.Printf("Output:      %d\n", numJewelsInStones(tc.jewels, tc.stones))
		fmt.Println(strings.Repeat("-", 35))
	}
}
