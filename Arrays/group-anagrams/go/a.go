package main

import (
	"fmt"
	"strings"
)

func groupAnagrams(strs []string) [][]string {
	table := make(map[[26]byte][]string, len(strs))
	for _, s := range strs {
		var key [26]byte

		for i := 0; i < len(s); i++ {
			key[s[i]-'a']++
		}
		table[key] = append(table[key], s)
	}

	res := make([][]string, 0, len(table))
	for _, group := range table {
		res = append(res, group)
	}
	return res
}

func main() {
	testCases := [][]string{
		{"eat", "tea", "tan", "ate", "nat", "bat"},
		{""},
		{"a"},
		{"abc", "bca", "cab", "xyz", "zyx"},
		{"ab", "ba", "abc", "cba", "bac"},
	}

	for _, strs := range testCases {
		fmt.Printf("Input:       %v\n", strs)
		fmt.Printf("Output:      %v\n", groupAnagrams(strs))
		fmt.Println(strings.Repeat("-", 35))
	}
}
