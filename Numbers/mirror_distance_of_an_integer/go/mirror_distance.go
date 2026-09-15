package main

import (
	"fmt"
	"math"
	"strings"
)

func mirrorDistance(n int) int {
	reverse := 0
	for number := n; number > 0; {
		reverse = (reverse * 10) + (number % 10)
		number /= 10
	}
	return int(math.Abs(float64(reverse - n)))
}

func main() {
	test_cases := []int{
		25, 10, 7, 121, 100, 1,
	}

	for _, n := range test_cases {
		fmt.Printf("Input:	%v\n", n)
		fmt.Printf("Output:	%v\n", mirrorDistance((n)))
		fmt.Println(strings.Repeat("-", 35))
	}
}
