export {}

function furthestDistanceFromOrigin(moves: string): number {
    let ace = 0
    let distFromOrigin = 0
    for (const move of moves) {
        if (move == 'L') distFromOrigin--;
        else if (move == 'R') distFromOrigin++;
        else if (move == '_') ace++
    };
    return Math.abs(distFromOrigin) + ace

};

const testCases: string[] = [
    "L_RL__R",
    "_R__LL_",
    "_______",
    "LLLLRR",
    "RRRRRR",
    "L",
];

for (const moves of testCases) {
    console.log(`Input:       ${JSON.stringify(moves)}`);
    console.log(`Output:      ${furthestDistanceFromOrigin(moves)}`);
    console.log("-".repeat(35));
}