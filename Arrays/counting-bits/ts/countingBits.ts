export {}

function countBits(n: number): number[]{
    let ans = Array.from({length: n + 1}, () => 0)
    for(let i = 1; i < n + 1; i++){
        ans[i] = ans[i>>1] + (i&1)
    }
    return ans
}

const testCases: number[] = [0, 1, 2, 5, 8, 16];

for (const n of testCases) {
    console.log(`Input:       ${n}`);
    console.log(`Output:      ${JSON.stringify(countBits(n))}`);
    console.log("-".repeat(35));
}