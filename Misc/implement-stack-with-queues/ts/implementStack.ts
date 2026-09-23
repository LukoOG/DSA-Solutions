export {}

class MyStack {
    private queue: number[]
    constructor() {
        this.queue = []
    }

    push(x: number): void {
        const size = this.queue.length
        this.queue.push(x)
        for(let i = 0; i < size; i++){
            let left = this.queue[0]
            this.queue = this.queue.slice(1)
            this.queue.push(left)
        }

    }

    pop(): number {
        let value = this.queue[0]
        this.queue = this.queue.slice(1)
        return value
    }

    top(): number {
        return this.queue[0]
    }

    empty(): boolean {
        return this.queue.length == 0   
    }
}

const testCases = [
    {
        ops:      ["push", "push", "top", "pop", "empty"],
        args:     [[1],    [2],    [],    [],    []],
        expected: [null,   null,   2,     2,     false]
    },
    {
        ops:      ["push", "empty", "pop", "empty"],
        args:     [[5],    [],      [],    []],
        expected: [null,   false,   5,     true]
    },
    {
        ops:      ["push", "push", "push", "pop", "top", "pop", "empty"],
        args:     [[1],    [2],    [3],    [],    [],    [],    []],
        expected: [null,   null,   null,   3,     2,     2,     false]
    },
];

for (const { ops, args, expected } of testCases) {
    const stack = new MyStack();
    const results: (number | boolean | null)[] = [];

    for (let i = 0; i < ops.length; i++) {
        const op = ops[i];
        const arg = args[i];
        if (op === "push") { stack.push(arg[0]); results.push(null); }
        else if (op === "pop")   results.push(stack.pop());
        else if (op === "top")   results.push(stack.top());
        else if (op === "empty") results.push(stack.empty());
    }

    console.log(`Ops:         ${JSON.stringify(ops)}`);
    console.log(`Args:        ${JSON.stringify(args)}`);
    console.log(`Output:      ${JSON.stringify(results)}`);
    console.log(`Expected:    ${JSON.stringify(expected)}`);
    console.log("-".repeat(35));
}