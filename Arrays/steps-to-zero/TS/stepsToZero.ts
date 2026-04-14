export {}

function stepsToZero(n: number){
    let steps = 0;
    while(n > 0){
        if(n % 2 === 0){
            n /= 2
        } else {
            n--
        }
        steps++
    }
    return steps
}

const testCases: number[] = [0, 1, 2, 6, 14];

for (const n of testCases) {
    console.log(`Input:       ${n}`);
    console.log(`Output:      ${stepsToZero(n)}`);
    console.log("-".repeat(35));
}