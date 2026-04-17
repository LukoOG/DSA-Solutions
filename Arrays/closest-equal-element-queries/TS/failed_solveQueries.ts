export {}
//using two pointer technique from my last solution

function solveQueries(nums: number[], queries: number[]): number[] {
    //add if condition for length of set(queries) == length of queries
    //if they're equal, then it means nums has unique elements 
    // so all queries will be [-1] * length of queries
    let ans = [];

    if(nums.length <= 1){
        return [-1]
    }

    for(let i = 0; i < queries.length; i++){
        const startIndex = queries[i];
        
        const target = nums[startIndex];

        let [left, right] = [startIndex, startIndex];

        const n = nums.length;
        let steps = 0;

        // console.log("pointers", left, right)

        while(steps < n ){    
            steps++;

            left = (left - 1 + n) % n
            right = (right + 1) % n
            // console.log("startIndex:", startIndex, "after", left, right);

            if(nums[left] == target || nums[right] == target){
                ans.push(steps);
                break
            };

            if (steps == n-1){
                ans.push(-1)
                break
            }
        };
    };

    return ans
};


const testCases: [number[], number[]][] = [
    [[1, 2, 3, 1, 2], [0, 1, 2]],
    [[1, 1, 1], [0, 1, 2]],
    [[1, 2, 3], [0, 1, 2]],
    [[1, 2, 1, 3, 2], [0, 4]],
    [[5], [0]],
    [[3, 3], [1]] //expect 1
];

for (const [nums, queries] of testCases) {
    console.log(`Input:       nums=${JSON.stringify(nums)}, queries=${JSON.stringify(queries)}`);
    console.log(`Output:      ${JSON.stringify(solveQueries(nums, queries))}`);
    console.log("-".repeat(35));
}

// const n = 5;
// const [i, j] = [0, 1]
// console.log(`Input:       nums=${JSON.stringify(testCases[n][i])}, queries=${JSON.stringify(testCases[n][j])}`);
// console.log(`Output:      ${JSON.stringify(solveQueries(testCases[n][i], testCases[n][j]))}`);