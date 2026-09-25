export {};

function smallestIndex(nums: number[]): number {
  function sumOfDigits(num: number): number {
    let sum = 0;
    while (num > 0) {
      const d = num % 10;
      sum += d;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  let idx: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i == sumOfDigits(nums[i])) return i;
  }
  return -1;
}

const testCases: number[][] = [
  [1, 3, 2], 
  [1, 10, 11],
  [0, 1, 2, 3, 4],
  [5, 4, 3, 2, 1],
  [0],
  [1, 2, 3, 4, 10],
];

for (const nums of testCases) {
  console.log(`Input:       ${JSON.stringify(nums)}`);
  console.log(`Output:      ${smallestIndex(nums)}`);
  console.log("-".repeat(35));
}
