export {}

function isRectangleOverlap(rec1: number[], rec2:number[]): boolean {
    let [x1, y1, x2, y2] = rec1;
    let [x3, y3, x4, y4] = rec2;
    return !(x2 <= x3 || x1 >= x4 || y2 <= y3 || y1 >= y4)
}

const testCases: [number[], number[]][] = [
    [[0, 0, 2, 2], [1, 1, 3, 3]],
    [[0, 0, 1, 1], [1, 0, 2, 1]],
    [[0, 0, 1, 1], [2, 2, 3, 3]],
    [[0, 0, 3, 3], [1, 1, 2, 2]],
    [[0, 0, 2, 2], [0, 0, 2, 2]],
    [[0, 0, 2, 2], [3, 0, 5, 2]],
];

for (const [rec1, rec2] of testCases) {
    console.log(`Input:       rec1=${JSON.stringify(rec1)}, rec2=${JSON.stringify(rec2)}`);
    console.log(`Output:      ${isRectangleOverlap(rec1, rec2)}`);
    console.log("-".repeat(35));
}