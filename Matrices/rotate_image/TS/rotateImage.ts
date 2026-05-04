export {};

function rotate(matrix: number[][]): void{
    matrix.forEach((e, i) => {
        console.log(`index ${i} for element ${e}`)
    })
}

const testCases: number[][][] = [
    [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]],

    [[5, 1, 9, 11],
     [2, 4, 8, 10],
     [13, 3, 6, 7],
     [15, 14, 12, 16]],

    [[1]],

    [[1, 2],
     [3, 4]],
];

for (const matrix of testCases) {
    const original = matrix.map(row => [...row]);
    rotate(matrix);
    console.log(`Input:       ${JSON.stringify(original)}`);
    console.log(`Output:      ${JSON.stringify(matrix)}`);
    console.log("-".repeat(35));
}