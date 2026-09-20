export {}

//unoptimized due to variable array allocation and overhead of const ch of s
function _reverseDegree(s: string): number{
    let [sum, idx] = [0, 1]
    for(const ch of s){
        sum += idx * (123 - ch.charCodeAt(0))
        idx += 1
    }
    return sum
}

function reverseDegree(s: string): number{
    let sum = 0;
    for(let i = 1; i <= s.length; i++){
        sum += i * (123 - s[i-1].charCodeAt(0))
    };
    return sum
}

const testCases: string[] = ["abc", "zza", "a", "z", "az", "reverse"];

for (const s of testCases) {
    console.log(`Input:       ${JSON.stringify(s)}`);
    console.log(`Output:      ${reverseDegree(s)}`);
    console.log("-".repeat(35));
}