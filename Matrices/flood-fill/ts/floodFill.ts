export {}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const original_color = image[sr][sc]
    if (original_color == color) {
        return image
    }
    const dfs = (r: number, c: number) => {
        if(r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== original_color) {
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

const testCases: [number[][], number, number, number][] = [
    [[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2],
    [[[0,0,0],[0,0,0]], 0, 0, 0],
    [[[0,0,0],[0,1,1]], 1, 1, 1],
    [[[1,1,1],[1,1,0],[1,0,1]], 0, 0, 3],
    [[[1]], 0, 0, 2],
];

for (const [image, sr, sc, color] of testCases) {
    const original = image.map(row => [...row]);
    const result = floodFill(image.map(row => [...row]), sr, sc, color);
    console.log(`Input:       image=${JSON.stringify(original)}, sr=${sr}, sc=${sc}, color=${color}`);
    console.log(`Output:      ${JSON.stringify(result)}`);
    console.log("-".repeat(35));
}