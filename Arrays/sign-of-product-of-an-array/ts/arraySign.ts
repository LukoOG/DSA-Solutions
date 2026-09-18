export {};

function arraySign(nums: number[]): number {
  let sign = 1;
  for (const num of nums) {
    if (num == 0) return 0;
    else if (num < 0) sign = -1 * sign;
  }
  return sign;
}

const testCases: number[][] = [
  [-1, -2, -3, -4, 3, 2, 1],
  [1, 5, 0, 2, -3],
  [-1, 1, -1, 1, -1],
  [1, 2, 3, 4],
  [-1, -1, -1],
  [0],
];

for (const nums of testCases) {
  console.log(`Input:       ${JSON.stringify(nums)}`);
  console.log(`Output:      ${arraySign(nums)}`);
  console.log("-".repeat(35));
}
