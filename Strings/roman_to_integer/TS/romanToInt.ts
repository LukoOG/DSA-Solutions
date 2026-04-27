export {};

const ROMAN = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
} as const

type RomanKey = keyof typeof ROMAN;

function romanToInt(roman: string): number{
    let result = 0;
    let n = roman.length;

    for(let i = 0; i < n; i++){
        let current: RomanKey = roman[i] as RomanKey;
        let next: RomanKey = roman[i+1] as RomanKey;
        if (ROMAN[current] < ROMAN[next]){
            result -= ROMAN[current]
        } else{
            result += ROMAN[current]
        }
    }

    return result
}

const testCases: string[] = ["III", "IV", "IX", "LVIII", "MCMXCIV", "I", "MMMCMXCIX"];

for (const s of testCases) {
    console.log(`Input:       ${JSON.stringify(s)}`);
    console.log(`Output:      ${romanToInt(s)}`);
    console.log("-".repeat(35));
}