export {}

function minAddToMakeValid(s: string): number {
    let openNeeded = 0;
    let closeNeeded = 0;
    for(let i = 0; i < s.length; i++){
        const char = s[i]
        if(char == '('){
            closeNeeded++
        } else if (char == ')'){
            if(closeNeeded > 0) closeNeeded--;
            else openNeeded++
        }

    }
    return openNeeded + closeNeeded
}

const testCases: string[] = [
    "())",
    "(((",
    "()",
    "())))((",
    "",
    ")((", 
];

for (const s of testCases) {
    console.log(`Input:       ${JSON.stringify(s)}`);
    console.log(`Output:      ${minAddToMakeValid(s)}`);
    console.log("-".repeat(35));
}