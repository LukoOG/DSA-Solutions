export {}

function countCommas(n: number): number {
    return n // 10
}

const testCases: number[] = [
    998,
    1002,
    1000,
    999999,
    1000000,
    // Note: JS loses precision beyond 2^53, use BigInt if needed for 10^15
    1_000_000_000_000_000,
];

for (const n of testCases) {
    console.log(`Input:       ${n}`);
    console.log(`Output:      ${countCommas(n)}`);
    console.log("-".repeat(35));
}