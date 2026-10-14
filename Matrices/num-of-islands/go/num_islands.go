package main

import (
	"fmt"
	"strings"
)

type Point struct {
	Row int
	Col int
}

func copyGrid(grid [][]byte) [][]byte {
	cp := make([][]byte, len(grid))
	for i, row := range grid {
		cp[i] = make([]byte, len(row))
		copy(cp[i], row)
	}
	return cp
}

// DFS recursive approach
func numIslandsDFS(grid [][]byte) int {
	if len(grid) == 0 {
		return 0
	}
	var dfs func(r int, c int)
	dfs = func(r int, c int) {
		if r < 0 || r >= len(grid) || c < 0 || c >= len(grid[0]) || grid[r][c] == '0' {
			return
		}
		grid[r][c] = '0'
		dfs(r+1, c)
		dfs(r-1, c)
		dfs(r, c+1)
		dfs(r, c-1)
	}
	count := 0
	for r := 0; r < len(grid); r++ {
		for c := 0; c < len(grid[0]); c++ {
			if grid[r][c] == '1' {
				count++
				dfs(r, c)
			}
		}
	}
	return count
}

// BFS Approach
func numIslandsBFS(grid [][]byte) int {
	count := 0
	directions := []Point{{1, 0}, {-1, 0}, {0, -1}, {0, 1}}
	for r := 0; r < len(grid); r++ {
		for c := 0; c < len(grid[0]); c++ {
			if grid[r][c] == '1' {
				count++
				grid[r][c] = '0'
				queue := []Point{{r, c}}
				for len(queue) > 0 {
					p := queue[0]
					queue[0] = Point{}
					queue = queue[1:]
					for _, d := range directions {
						newRow := p.Row + d.Row
						newCol := p.Col + d.Col
						if 0 <= newRow && newRow < len(grid) && 0 <= newCol && newCol < len(grid[0]) && grid[newRow][newCol] == '1' {
							grid[newRow][newCol] = '0'
							queue = append(queue, Point{newRow, newCol})
						}
					}
				}
			}
		}
	}
	return count
}
func main() {
	testCases := [][][]byte{
		{{'1', '1', '1', '1', '0'},
			{'1', '1', '0', '1', '0'},
			{'1', '1', '0', '0', '0'},
			{'0', '0', '0', '0', '0'}},

		{{'1', '1', '0', '0', '0'},
			{'1', '1', '0', '0', '0'},
			{'0', '0', '1', '0', '0'},
			{'0', '0', '0', '1', '1'}},

		{{'1', '0', '0', '0', '0'},
			{'0', '1', '0', '0', '0'},
			{'0', '0', '1', '0', '0'},
			{'0', '0', '0', '1', '0'}},

		{{'0', '0', '0'},
			{'0', '0', '0'}},

		{{'1'}},
	}

	for _, grid := range testCases {
		original := copyGrid(grid)
		result1 := numIslandsDFS(copyGrid(grid))
		result2 := numIslandsBFS(copyGrid(grid))
		fmt.Printf("Input:       %v\n", original)
		fmt.Printf("Output(DFS):      %d\n", result1)
		fmt.Printf("Output(BFS):      %d\n", result2)
		fmt.Println(strings.Repeat("-", 35))
	}
}
