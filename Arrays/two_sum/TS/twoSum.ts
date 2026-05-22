export {}

function twoSum(nums: number[], target: number): number[]{
    let differenceMap = new Map<number, number>();

    for(let i = 0; i <= nums.length; i++){
        const difference = target - nums[i];
        const validIdx = differenceMap.get(difference)
        if(validIdx !== undefined){
            return [validIdx, i]
        }
        differenceMap.set(nums[i], i)
    }

    return [-1]
}

const testCases: [number[], number][] = [
    [[2, 7, 11, 15], 9],
    [[3, 2, 4], 6],
    [[3, 3], 6],
    [[1, 2, 3, 4], 7],
    [[-1, -2, -3, -4], -6],
];

for (const [nums, target] of testCases) {
    console.log(`Input:       nums=${JSON.stringify(nums)}, target=${target}`);
    console.log(`Output:      ${JSON.stringify(twoSum(nums, target))}`);
    console.log("-".repeat(35));
}