export {};

function mirrorDistance(n: number): number {
    let number = n;
    let reverseNumber = 0;
    while(n > 0){
        reverseNumber = (reverseNumber * 10) + (n % 10)
        n = Math.floor(n / 10)
    }
    return Math.abs(number - reverseNumber)
};

const testCases: number[] = [25, 10, 7, 121, 100, 1];

for (const n of testCases) {
    console.log(`Input:       ${n}`);
    console.log(`Output:      ${mirrorDistance(n)}`);
    console.log("-".repeat(35));
}