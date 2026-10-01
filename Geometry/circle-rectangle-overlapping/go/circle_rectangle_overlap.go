package main

import (
	"fmt"
	"strings"
)

func checkOverlap(radius int, xCenter int, yCenter int, x1 int, y1 int, x2 int, y2 int) bool {
	a := xCenter - max(x1, min(x2, xCenter))
	b := yCenter - max(y1, min(y2, yCenter))

	return (a*a)+(b*b) <= radius*radius
}

func main() {
	type testCase struct {
		radius, xCenter, yCenter, x1, y1, x2, y2 int
	}

	testCases := []testCase{
		{1, 0, 0, 1, -1, 3, 1},
		{1, 1, 1, -3, -3, 3, 3},
		{1, 0, 0, -1, 0, 0, 1},
		{1, 5, 5, 0, 0, 2, 2},
		{1, 0, 0, 1, 1, 2, 2},
		{2, 0, 0, 3, 3, 5, 5},
	}

	for _, tc := range testCases {
		fmt.Printf("Input:       radius=%d, center=(%d,%d), rect=(%d,%d)->(%d,%d)\n",
			tc.radius, tc.xCenter, tc.yCenter, tc.x1, tc.y1, tc.x2, tc.y2)
		fmt.Printf("Output:      %v\n", checkOverlap(tc.radius, tc.xCenter, tc.yCenter, tc.x1, tc.y1, tc.x2, tc.y2))
		fmt.Println(strings.Repeat("-", 35))
	}
}
