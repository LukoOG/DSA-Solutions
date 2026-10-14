package main

import (
	"fmt"
	"strings"
)

type Point struct {
	Row int
	Col int
}

func (this Point) unpack() (int, int) {
	return this.Row, this.Col
}

func copyGrid(grid [][]int) [][]int {
	cp := make([][]int, len(grid))
	for i, row := range grid {
		cp[i] = make([]int, len(row))
		copy(cp[i], row)
	}
	return cp
}

func shortestPathBinaryMatrix(grid [][]int) int {
	n := len(grid) - 1
	queue := make([]Point, 0, n)
	directions := []Point{
		{1, 0}, {-1, 0}, {0, 1}, {0, -1},
		{1, 1}, {1, -1}, {-1, 1}, {-1, -1},
	}
	if grid[0][0] != 0 || grid[n][n] != 0 {
		return -1
	}
	grid[0][0] = 1
	queue = append(queue, Point{0, 0})
	for len(queue) > 0 {
		cr, cc := queue[0].unpack()
		queue[0] = Point{}
		queue = queue[1:]
		if cr == n && cc == n {
			return grid[cr][cc]
		}
		for _, d := range directions {
			dr, dc := d.unpack()
			newRow := cr + dr
			newCol := cc + dc
			if 0 <= newRow && newRow <= n && 0 <= newCol && newCol <= n && grid[newRow][newCol] == 0 {
				grid[newRow][newCol] = grid[cr][cc] + 1
				queue = append(queue, Point{newRow, newCol})
			}
		}
	}
	return -1
}

func main() {
	testCases := [][][]int{
		{{0, 1}, {1, 0}},
		{{0, 0, 0}, {1, 1, 0}, {1, 1, 0}},
		{{1, 0, 0}, {1, 1, 0}, {1, 1, 0}},
		{{0, 0, 0}, {1, 1, 0}, {1, 1, 1}},
		{{0}},
		{{0, 0, 0, 0}, {0, 1, 1, 0}, {0, 1, 1, 0}, {0, 0, 0, 0}},
	}

	for _, grid := range testCases {
		original := copyGrid(grid)
		fmt.Printf("Input:       %v\n", original)
		fmt.Printf("Output:      %d\n", shortestPathBinaryMatrix(copyGrid(grid)))
		fmt.Println(strings.Repeat("-", 35))
	}
}
