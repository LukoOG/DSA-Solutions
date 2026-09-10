export {};

function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] != val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

const testCases: [number[], number][] = [
  [[3, 2, 2, 3], 3],
  [[0, 1, 2, 2, 3, 0, 4, 2], 2],
  [[1], 1],
  [[1], 2],
  [[2, 2, 2], 2],
  [[1, 2, 3, 4], 5],
];

for (const [nums, val] of testCases) {
  const original = [...nums];
  const k = removeElement(nums, val);
  console.log(`Input:       nums=${JSON.stringify(original)}, val=${val}`);
  console.log(`Output:      k=${k}, nums=${JSON.stringify(nums.slice(0, k))}`);
  console.log("-".repeat(35));
}
