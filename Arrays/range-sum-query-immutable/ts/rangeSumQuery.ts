export {}

class NumArray {
    private prefix: number[]
    constructor(nums: number[]) {
        this.prefix = new Array(nums.length + 1).fill(0);
        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            this.prefix[i+1] = this.prefix[i] + num
        }
    }

    sumRange(left: number, right: number): number {
        return this.prefix[right+1] - this.prefix[left]
    }
}

const testCases = [
    {
        nums:     [-2, 0, 3, -5, 2, -1],
        queries:  [[0, 2], [2, 5], [0, 5]],
        expected: [1, -1, -3]
    },
    {
        nums:     [1, 2, 3, 4, 5],
        queries:  [[0, 4], [1, 3], [0, 0]],
        expected: [15, 9, 1]
    },
    {
        nums:     [5],
        queries:  [[0, 0]],
        expected: [5]
    },
];

for (const { nums, queries, expected } of testCases) {
    const obj = new NumArray(nums);
    const results = queries.map(([l, r]) => obj.sumRange(l, r));
    console.log(`nums:        ${JSON.stringify(nums)}`);
    console.log(`queries:     ${JSON.stringify(queries)}`);
    console.log(`Output:      ${JSON.stringify(results)}`);
    console.log(`Expected:    ${JSON.stringify(expected)}`);
    console.log("-".repeat(35));
}