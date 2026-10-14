export {}

function shortestPathBinaryMatrix(grid: number[][]): number {
    let queue: [number, number][] = []
    let head = 0;
    const n = grid.length - 1 //square grid
    if(grid[0][0] != 0 || grid[n][n] != 0){
        return -1
    }
    grid[0][0] = 1
    queue.push([0, 0])
    const directions = [
        [1, 0], [0, 1], [-1, 0], [0, -1],
        [1,-1], [-1,1],[-1,-1],[1,1]
    ] as const

    while(head < queue.length){
        const [cr, cc] = queue[head++]
        if(cr == n && cc == n){
            return grid[cr][cc]
        }
        for(const [dr, dc] of directions){
            const nr = cr + dr
            const nc = cc + dc
            if(0 <= nr && nr <= n && 0 <= nc && nc <= n && grid[nr][nc] == 0){
                grid[nr][nc] = grid[cr][cc] + 1
                queue.push([nr, nc])
            }
        }
    }
    return -1
}

const testCases: number[][][] = [
    [[0,1],[1,0]],
    [[0,0,0],[1,1,0],[1,1,0]],
    [[1,0,0],[1,1,0],[1,1,0]],
    [[0,0,0],[1,1,0],[1,1,1]],
    [[0]],
    [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],
];

for (const grid of testCases) {
    const copy = grid.map(row => [...row]);
    console.log(`Input:       ${JSON.stringify(grid)}`);
    console.log(`Output:      ${shortestPathBinaryMatrix(copy)}`);
    console.log("-".repeat(35));
}