export {}

const singleNumber = (nums: number[]): number => {
    let ans = nums[0]
    for(let i = 1; i < nums.length; i++){
        ans ^= nums[i]
    }
    return ans
}

const testCases: number[][] = [
    [2, 2, 1],
    [4, 1, 2, 1, 2],
    [1],
    [0, 0, 5],
    [-1, -1, 3],
];

for (const nums of testCases) {
    console.log(`Input:       ${JSON.stringify(nums)}`);
    console.log(`Output:      ${singleNumber(nums)}`);
    console.log("-".repeat(35));
}