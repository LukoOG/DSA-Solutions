export {}

function subarraySum(nums: number[], k: number): number {
    let count = 0;
    let seen = new Map<number, number>([[0, 1]]);
    let currentSum = 0;
    for(let i=0; i < nums.length; i++){
        currentSum += nums[i]
        const key = currentSum - k
        count += seen.get(key) ?? 0
        seen.set(currentSum, (seen.get(currentSum) ?? 0) + 1)
    }

    return count
}

const testCases: [number[], number][] = [
    [[1, 1, 1], 2],
    [[1, 2, 3], 3],
    [[1, -1, 1], 1],
    [[0, 0, 0], 0],
    [[-1, -1, 1], 0],
    [[1], 1],
    [[1, 2, 3, 4, 5], 15],
];

for (const [nums, k] of testCases) {
    console.log(`Input:       nums=${JSON.stringify(nums)}, k=${k}`);
    console.log(`Output:      ${subarraySum(nums, k)}`);
    console.log("-".repeat(35));
}