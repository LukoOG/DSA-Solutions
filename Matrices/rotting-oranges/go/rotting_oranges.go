package main

import (
	"fmt"
	"strings"
)

type Orange struct {
	Row int
	Col int
	Min int
}

type Direction struct {
	Row int
	Col int
}

func copyGrid(grid [][]int) [][]int {
	cp := make([][]int, len(grid))
	for i, row := range grid {
		cp[i] = make([]int, len(row))
		copy(cp[i], row)
	}
	return cp
}

func orangesRotting(grid [][]int) int {
	rotten := make([]Orange, 0)
	noOfMinutes := 0
	fresh := 0
	directions := []Direction{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}

	for r := 0; r < len(grid); r++ {
		for c := 0; c < len(grid[0]); c++ {
			switch grid[r][c] {
			case 2:
				rotten = append(rotten, Orange{r, c, 0})
			case 1:
				fresh++
			}
		}
	}

	if fresh == 0 {
		return 0
	}

	for len(rotten) > 0 && fresh > 0 {
		c := rotten[0]
		rotten[0] = Orange{}
		rotten = rotten[1:]
		for _, d := range directions {
			nr := c.Row + d.Row
			nc := c.Col + d.Col
			if 0 <= nr && nr < len(grid) && 0 <= nc && nc < len(grid[0]) && grid[nr][nc] == 1 {
				grid[nr][nc] = 2
				rotten = append(rotten, Orange{nr, nc, c.Min + 1})
				fresh--
				noOfMinutes = c.Min + 1
			}
		}
	}
	if fresh > 0 {
		return -1
	}
	return noOfMinutes
}

func main() {
	testCases := [][][]int{
		{{2, 1, 1}, {1, 1, 0}, {0, 1, 1}},
		{{2, 1, 1}, {0, 1, 1}, {1, 0, 1}},
		{{0, 2}},
		{{1}},
		{{2}},
		{{0}},
		{{2, 1, 1}, {1, 1, 1}, {0, 1, 2}},
	}

	for _, grid := range testCases {
		original := copyGrid(grid)
		fmt.Printf("Input:       %v\n", original)
		fmt.Printf("Output:      %d\n", orangesRotting(copyGrid(grid)))
		fmt.Println(strings.Repeat("-", 35))
	}
}
