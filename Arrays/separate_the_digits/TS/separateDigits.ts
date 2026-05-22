export {};

function separateDigits(nums: number[]): number[] {
  let results = [];
  for (const num of nums) {
    let result = Array.from(String(num)).map((i) => Number(i));
    results.push(...result);
  }
  return results;
}


const testCases: number[][] = [
    [13, 25, 32],
    [7, 1, 3, 9],
    [100, 200],
    [99, 77],
    [1],
];

for (const nums of testCases) {
    console.log(`Input:       ${JSON.stringify(nums)}`);
    console.log(`Output:      ${JSON.stringify(separateDigits(nums))}`);
    console.log("-".repeat(35));
}