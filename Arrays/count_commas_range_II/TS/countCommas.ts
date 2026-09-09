export {}

function countCommas(n: number): number {
    let m  = n;
    let highestPower = 0;
    while(n > 999){
        n = Math.floor(n / 1000)
        highestPower++
    };
    let previousNoCommas = 0;
    for(let i = 0; i < highestPower; i++){
        let noOfInts = 999 * Math.pow(1000, i);
        previousNoCommas += noOfInts * i;
    };
    let partialIntegers = m+1 - Math.pow(1000, highestPower);
    let partialNoOfCommas = partialIntegers * highestPower;


    return partialNoOfCommas + previousNoCommas
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