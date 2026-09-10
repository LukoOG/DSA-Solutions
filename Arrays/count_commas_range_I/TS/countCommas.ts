export {}

function countCommas(n: number): number{
    return Math.max(0, n - 1000 + 1)
}

const testCases: number[] = [
    1,
    999,
    1000,
    1002,
    10000,
    100000,
];

for (const n of testCases) {
    console.log(`Input:       ${n}`);
    console.log(`Output:      ${countCommas(n)}`);
    console.log("-".repeat(35));
}