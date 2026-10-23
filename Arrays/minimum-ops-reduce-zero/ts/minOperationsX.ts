export {}

function minOperations(nums: number[], x: number): number {
    const target = nums.reduce((acc, curr) =>acc + curr,0) - x;
    if(target < 0) return -1;
    if(target==0) return nums.length

    let maxLen = -1
    let left = 0
    let currentSum = 0

    for(let right = 0; right < nums.length; right++){
        currentSum += nums[right]
        while(currentSum > target && left <= right){
            currentSum -= nums[left]
            left++
        }
        if(currentSum === target) maxLen = Math.max(maxLen, right - left + 1)
    }

    if(maxLen == -1) return -1
    return nums.length - maxLen
}

const testCases: [number[], number][] = [
    [[1, 1, 4, 2, 3], 5],
    [[5, 6, 7, 8, 9], 4],
    [[3, 2, 20, 1, 1, 3], 10],
    [[1, 1], 3],
    [[1, 1, 1, 1, 1], 5],
    [[5], 5],
    [[1, 2, 3, 4], 3],
];

for (const [nums, x] of testCases) {
    console.log(`Input:       nums=${JSON.stringify(nums)}, x=${x}`);
    console.log(`Output:      ${minOperations(nums, x)}`);
    console.log("-".repeat(35));
}