export {};

function isValid(s: string): boolean {
  let stack: string[] = [];
  const brackets: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (brackets[c]) { //true if it's an opening bracket
      stack.push(brackets[c]);
    } else {
        if(stack.pop() !== c){
            return false
        }
    }
  }
  return stack.length == 0
}

const testCases: string[] = [
  "()",
  "()[]{}",
  "(]",
  "([)]",
  "{[]}",
  "",
  "(((",
  "]",
];

for (const s of testCases) {
  console.log(`Input:       ${JSON.stringify(s)}`);
  console.log(`Output:      ${isValid(s)}`);
  console.log("-".repeat(35));
}
