export {} //to turn each TS file into it's own module

function richestCustomer(accounts: number[][]){
    let maxWealth = 0;
    for (const account of accounts){
        let currentMaxWealth = account.reduce((val1, val2) => val1 + val2, 0)

        maxWealth = Math.max(maxWealth, currentMaxWealth)
    }

    return maxWealth
}


const testCases = [
        [[1, 2, 3], [4, 5, 6]],        // expected: 15
        [[1, 1, 1], [2, 2, 2]],        // expected: 6
        [[3]],                         // expected: 3
        [[0, 0, 0], [0, 0, 0]],        // expected: 0
        [[10, 0], [3, 7], [5, 5]],     // expected: 10
        [[1, 5], [7, 3], [3, 5]],      // expected: 10
        [[2, 8, 7], [7, 1, 3], [1, 9, 5]],  // expected: 17
    ]
    
for(const testCase of testCases){
    console.log(`Input:             ${JSON.stringify(testCase)}`)
    console.log(`Solution:          ${JSON.stringify(richestCustomerGPT(testCase))}`)
    console.log("_".repeat(35))
}

//this is a concise solution given from GPT
function richestCustomerGPT(accounts: number[][]): number {
    return Math.max(
        ...accounts.map(acc => acc.reduce((a, b) => a + b, 0))
    );
}