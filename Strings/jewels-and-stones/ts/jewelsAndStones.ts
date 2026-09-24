export {}

function numJewelsInStones(jewels: string, stones: string): number {
    const j = new Set(jewels)
    let count = 0
    for(let i = 0; i < stones.length; i++){
        if(j.has(stones[i])) count++
    }
    return count
}

const testCases: [string, string][] = [
    ["aA", "aAAbbbb"],
    ["z", "ZZZ"],
    ["a", "a"],
    ["a", "b"],
    ["abc", "aabbcc"],
    ["aA", ""],
];

for (const [jewels, stones] of testCases) {
    console.log(`Input:       jewels=${JSON.stringify(jewels)}, stones=${JSON.stringify(stones)}`);
    console.log(`Output:      ${numJewelsInStones(jewels, stones)}`);
    console.log("-".repeat(35));
}