package main

import (
	"fmt"
	"strings"
)

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	frequency := make([]int, 26)
	for i := 0; i < len(s); i++ {
		s_t := s[i] - 'a'
		frequency[s_t]++
		t_t := t[i] - 'a'
		frequency[t_t]--
	}
	for _, val := range frequency {
		if val != 0 {
			return false
		}
	}
	return true
}

func main() {
	type testCase struct {
		s, t string
	}

	testCases := []testCase{
		{"anagram", "nagaram"},
		{"rat", "car"},
		{"a", "a"},
		{"a", "b"},
		{"aa", "a"},
		{"listen", "silent"},
	}

	for _, tc := range testCases {
		fmt.Printf("Input:       s=%q, t=%q\n", tc.s, tc.t)
		fmt.Printf("Output:      %v\n", isAnagram(tc.s, tc.t))
		fmt.Println(strings.Repeat("-", 35))
	}
}
