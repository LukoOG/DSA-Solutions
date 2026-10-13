export {}

function orangesRotting(grid: number[][]): number {
    let noOfMinutes = 0
    let fresh = 0
    let head = 0
    let rotten: [number, number, number][] = []
    const directions: [number, number][] = [[1,0],[-1,0],[0,1],[0,-1]] as const
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(grid[r][c] == 2) rotten.push([r, c, 0]);
            else if(grid[r][c] == 1) fresh++
        }
    }
    if(fresh==0) return 0

    while(head < rotten.length && fresh > 0){
        const [cr, cc, min] = rotten[head]
        head++
        for(const [dr, dc] of directions){
            const nr = cr + dr
            const nc = cc + dc
            if(0 <= nr && nr < grid.length && 0 <= nc && nc < grid[0].length && grid[nr][nc] == 1){
                grid[nr][nc] = 2
                rotten.push([nr, nc, min+1])
                fresh--
                noOfMinutes = min+1
            }
        }
    }
    return fresh > 0 ? -1 : noOfMinutes
}

const testCases: number[][][] = [
    [[2,1,1],[1,1,0],[0,1,1]],
    [[2,1,1],[0,1,1],[1,0,1]],
    [[0,2]],
    [[1]],
    [[2]],
    [[0]],
    [[2,1,1],[1,1,1],[0,1,2]],
];

for (const grid of testCases) {
    const copy = grid.map(row => [...row]);
    console.log(`Input:       ${JSON.stringify(grid)}`);
    console.log(`Output:      ${orangesRotting(copy)}`);
    console.log("-".repeat(35));
}