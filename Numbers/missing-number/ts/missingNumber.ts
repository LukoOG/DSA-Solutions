export {};

//My original approach
const missingNumber1 = (nums: number[]): number => {
  const n = nums.length;
  const arr = Array.from({ length: n+1 }).map(() => false);
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    arr[num] = true;
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == false) {
      return i;
    }
  }
  return 0
};

//ideal sum approach
const missingNumber2 = (nums: number[]): number => {
  const n = nums.length;
  const idealSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
  return idealSum - actualSum;
};
//the elegant XOR approach
const missingNumber = (nums: number[]): number => {
    let number = nums.length;
    for(let i = 0; i<nums.length; i++){
        number ^= i ^ nums[i]
    }
    return number
}

const testCases: number[][] = [
  [3, 0, 1],
  [0, 1],
  [9, 6, 4, 2, 3, 5, 7, 0, 1],
  [0],
  [1],
];

for (const nums of testCases) {
  console.log(`Input:       ${JSON.stringify(nums)}`);
  console.log(`Output:      ${missingNumber(nums)}`);
  console.log("-".repeat(35));
}
