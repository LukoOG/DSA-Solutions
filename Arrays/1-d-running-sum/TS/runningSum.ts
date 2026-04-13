export {}

function runningSum1(nums: number[]): number[] {
    const result: number[] = [];
    
    if (nums.length === 0) return result;

    result.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        result.push(nums[i] + result[i - 1]);
    }

    return result;
}

function runningSum2(nums: number[]): number[] {
    if (nums.length <= 1){
        return nums
    };

    for(let i = 1; i < nums.length; i++){
        nums[i] += nums[i-1]
    }

    return nums
}

const testCases: number[][] = [
    [1, 2, 3, 4],
    [1, 1, 1, 1, 1],
    [3],
    [0, 0, 0],
];

for (const nums of testCases) {
    console.log(`Input:       ${JSON.stringify(nums)}`);
    console.log(`Solution 1:  ${JSON.stringify(runningSum1([...nums]))}`);
    console.log(`Solution 2:  ${JSON.stringify(runningSum2([...nums]))}`);
    console.log("-".repeat(35));
}