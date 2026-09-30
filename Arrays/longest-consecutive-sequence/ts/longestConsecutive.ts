export {}

function longestConsecutive(nums: number[]): number {
    let num_set = new Set(nums)
    let longest = 0
    for(const num of num_set){
        if(!num_set.has(num-1)){
            let curr = num
            let curr_longest = 0
            while(num_set.has(curr)){
                curr++
                curr_longest++
            };
            longest = Math.max(longest, curr_longest)
        };
    }
    return longest
}

const testCases: number[][] = [
    [100, 4, 200, 1, 3, 2],
    [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
    [],
    [1],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 3, 5, 7],
];

for (const nums of testCases) {
    console.log(`Input:       ${JSON.stringify(nums)}`);
    console.log(`Output:      ${longestConsecutive(nums)}`);
    console.log("-".repeat(35));
}