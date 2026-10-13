package main

import (
	"fmt"
	"strings"
)

type Point struct {
	Row int
	Col int
}

func copyImage(image [][]int) [][]int {
	cp := make([][]int, len(image))
	for i, row := range image {
		cp[i] = make([]int, len(row))
		copy(cp[i], row)
	}
	return cp
}

// DFS recursive approach
func _floodFill(image [][]int, sr int, sc int, color int) [][]int {
	original_color := image[sr][sc]
	if original_color == color {
		return image
	}
	var dfs func(r int, c int)
	dfs = func(r int, c int) {
		if r < 0 || r >= len(image) || c < 0 || c >= len(image[0]) || image[r][c] != original_color {
			return
		}

		image[r][c] = color
		dfs(r+1, c)
		dfs(r-1, c)
		dfs(r, c+1)
		dfs(r, c-1)
	}
	dfs(sr, sc)
	return image
}

// BFS approach
func floodFill(image [][]int, sr int, sc int, color int) [][]int {
	original_color := image[sr][sc]
	if original_color == color {
		return image
	}

	queue := []Point{{sr, sc}}
	image[sr][sc] = color

	directions := []Point{{1, 0}, {-1, 0}, {0, -1}, {0, 1}}
	for len(queue) > 0 {
		p := queue[0]
		queue[0] = Point{}
		queue = queue[1:]
		for _, n := range directions {
			newRow := p.Row + n.Row
			newCol := p.Col + n.Col
			if 0 <= newRow && newRow < len(image) && 0 <= newCol && newCol < len(image[0]) {
				if image[newRow][newCol] == original_color {
					image[newRow][newCol] = color
					queue = append(queue, Point{newRow, newCol})
				}
			}
		}
	}
	return image
}
func main() {
	type testCase struct {
		image         [][]int
		sr, sc, color int
	}

	testCases := []testCase{
		{[][]int{{1, 1, 1}, {1, 1, 0}, {1, 0, 1}}, 1, 1, 2},
		{[][]int{{0, 0, 0}, {0, 0, 0}}, 0, 0, 0},
		{[][]int{{0, 0, 0}, {0, 1, 1}}, 1, 1, 1},
		{[][]int{{1, 1, 1}, {1, 1, 0}, {1, 0, 1}}, 0, 0, 3},
		{[][]int{{1}}, 0, 0, 2},
	}

	for _, tc := range testCases {
		original := copyImage(tc.image)
		result := floodFill(copyImage(tc.image), tc.sr, tc.sc, tc.color)
		fmt.Printf("Input:       image=%v, sr=%d, sc=%d, color=%d\n", original, tc.sr, tc.sc, tc.color)
		fmt.Printf("Output:      %v\n", result)
		fmt.Println(strings.Repeat("-", 35))
	}
}
