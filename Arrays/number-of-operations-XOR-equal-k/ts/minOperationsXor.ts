export {};

function minOperations(nums: number[], k: number): number {
  let xor = nums[0];
  for (let i = 1; i < nums.length; i++) {
    xor ^= nums[i];
  }
  xor ^= k;
  let count = 0;
  while (xor != 0) {
    xor &= xor - 1;
    count++;
  }

  return count;
}

const testCases: [number[], number][] = [
  [[2, 1, 3, 4], 1],
  [[2, 0, 2, 0], 0],
  [[1], 1],
  [[1], 0],
  [[0, 0, 0], 5],
];

for (const [nums, k] of testCases) {
  console.log(`Input:       ${JSON.stringify(nums)}, k = ${k}`);
  console.log(`Output:      ${JSON.stringify(minOperations(nums, k))}`);
  console.log("-".repeat(35));
}
