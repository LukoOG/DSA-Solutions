export {}

function checkOverlap(radius: number, xCenter: number, yCenter: number, x1: number, y1: number, x2: number, y2: number): boolean{
    const a = xCenter - Math.max(x1, Math.min(x2, xCenter));
    const b = yCenter - Math.max(y1, Math.min(y2, yCenter));


    return (a*a) + (b*b) <= (radius * radius)
}

const testCases: [number, number, number, number, number, number, number][] = [
    [1, 0, 0, 1, -1, 3, 1],
    [1, 1, 1, -3, -3, 3, 3],
    [1, 0, 0, -1, 0, 0, 1],
    [1, 5, 5, 0, 0, 2, 2],
    [1, 0, 0, 1, 1, 2, 2],
    [2, 0, 0, 3, 3, 5, 5],
];

for (const [radius, xCenter, yCenter, x1, y1, x2, y2] of testCases) {
    console.log(`Input:       radius=${radius}, center=(${xCenter},${yCenter}), rect=(${x1},${y1})->(${x2},${y2})`);
    console.log(`Output:      ${checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2)}`);
    console.log("-".repeat(35));
}