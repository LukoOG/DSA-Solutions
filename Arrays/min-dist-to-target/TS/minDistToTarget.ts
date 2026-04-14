export {};

function getMinDistance(nums: number[], target: number, start: number): number {
    let minDistance = Math.max(...nums);
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            minDistance = Math.min(minDistance, Math.abs(i-start))
        }
    }

    return minDistance
};

export {}

const testCases: [number[], number, number][] = [
    [[1, 2, 3, 4, 5], 5, 3],
    [[1, 2, 3, 4, 5], 1, 4],
    [[1, 2, 3, 4, 5], 3, 2],
    [[1, 2, 2, 2, 3], 2, 0],
    [[5], 5, 0],
];

for (const [nums, target, start] of testCases) {
    console.log(`Input:       nums=${JSON.stringify(nums)}, target=${target}, start=${start}`);
    console.log(`Output:      ${getMinDistance(nums, target, start)}`);
    console.log("-".repeat(35));
}