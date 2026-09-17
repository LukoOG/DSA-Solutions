export {}

const testCases: number[] = [11, 128, 2147483645, 0, 1, 2147483647];

//Using bitwise operations
function hammingWeight(n: number): number {
    let count = 0;
    let currentNumber = n;
    while(currentNumber > 0){
        count += currentNumber & 1;
        currentNumber >>>= 1;
    }
    return count
}

for (const n of testCases) {
    console.log(`Input:       ${n} (binary: ${n.toString(2)})`);
    console.log(`Output:      ${hammingWeight(n)}`);
    console.log("-".repeat(35));
}