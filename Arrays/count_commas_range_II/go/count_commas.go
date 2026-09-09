package main

import (
	"fmt"
	"math"
	"strings"
)

func countCommas(n int64) int64 {
	highestPowerOf1000 := int64(0)
	m := n
	for n > 999 {
		n /= 1000
		highestPowerOf1000++
	}
	previousNoOfCommas := int64(0)
	for i := int64(1); i < highestPowerOf1000; i++ {
		noOfInts := 999 * int64(math.Pow(1000, float64(i)))
		previousNoOfCommas += noOfInts * i
	}
	partialIntegers := m + 1 - int64(math.Pow(1000, float64(highestPowerOf1000)))
	partialNoOfCommas := partialIntegers * highestPowerOf1000

	return partialNoOfCommas + previousNoOfCommas

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
