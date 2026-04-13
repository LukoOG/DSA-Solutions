function fizzBuzz(n: number): string[]{
    let results = [];

    for(let i = 1; i <= n; i++){
        const divisibleBy3 = i % 3 === 0;
        const divisibleBy5 = i % 5 === 0;

        if(divisibleBy3 && divisibleBy5){
            results.push("FizzBuzz")
        } else if(divisibleBy3){
            results.push("Fizz")
        } else if(divisibleBy5) {
            results.push("Buzz")
        } else{
            results.push(i.toString())
        }
    }

    return results
}

const testCases: number[] = [1, 3, 5, 15, 16];

for (const n of testCases) {
    console.log(`Input:       ${n}`);
    console.log(`Output:      ${JSON.stringify(fizzBuzz(n))}`);
    console.log("-".repeat(35));
}