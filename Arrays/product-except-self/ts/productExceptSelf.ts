export {}

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    let ans: number[] = Array(n).fill(1)
    let prefix: number = 1;
    for(let i = 0; i < n; i++){
        ans[i] = prefix;
        prefix *= nums[i]
    };

    let suffix: number = 1;
    
    for(let i = n - 1; i >= 0; i--){
        ans[i] *= suffix;
        suffix *= nums[i];
    };
    return ans
}

const testCases: number[][] = [
    [1, 2, 3, 4],
    [-1, 1, 0, -3, 3],
    [0, 0],
    [1, 1],
    [-1, -1, -1, -1],
    [2, 3],
];

for (const nums of testCases) {
    console.log(`Input:       ${JSON.stringify(nums)}`);
    console.log(`Output:      ${JSON.stringify(productExceptSelf(nums))}`);
    console.log("-".repeat(35));
}