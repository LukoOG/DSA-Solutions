export {};

type cell = "1" | "0";

function numIslandsDFS(grid: string[][]): number {
  let count = 0;
  const dfs = (r: number, c: number) => {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      grid[r][c] == "0"
    )
      return;
    grid[r][c] = "0";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == "1") {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}

function numIslandsBFS(grid: string[][]): number {
  let count = 0;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] as const;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == "1") {
        count++;
        grid[r][c] = "0";
        let queue = [[r, c]];
        while (queue.length > 0) {
          const p = queue[0];
          queue = queue.slice(1);
          for (const d of directions) {
            const newRow = p[0] + d[0];
            const newCol = p[1] + d[1];
            if (0 <= newRow && newRow < grid.length && 0 <= newCol && newRow < grid[0].length) {
                if(grid[newRow][newCol] == "1") {
                    grid[newRow][newCol] = "0"
                    queue.push([newRow, newCol])
                }
            }
          }
        }
      }
    }
  }
  return count;
}

const testCases: string[][][] = [
  [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ],

  [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ],

  [
    ["1", "0", "0", "0", "0"],
    ["0", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "0"],
  ],

  [
    ["0", "0", "0"],
    ["0", "0", "0"],
  ],

  [["1"]],
];

for (const grid of testCases) {
  const copy1 = grid.map((row) => [...row]);
  const copy2 = grid.map((row) => [...row]);
  console.log(`Input:       ${JSON.stringify(grid)}`);
  console.log(`Output (DFS): ${numIslandsDFS(copy1)}`);
  console.log(`Output (BFS): ${numIslandsBFS(copy2)}`);
  console.log("-".repeat(35));
}
