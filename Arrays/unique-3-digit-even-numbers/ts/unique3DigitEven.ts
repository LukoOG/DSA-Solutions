export {};

function totalNumbers(digits: number[]): number {
  //   let unique = new Set<number>(); not as optimized as bool array
  let vis = Array.from({ length: 1000 }, () => false);
  let count = 0;
  for (let i = 0; i <= digits.length; i++) {
    if (digits[i] == 0) {
      continue;
    }
    for (let j = 0; j <= digits.length; j++) {
      for (let k = 0; k <= digits.length; k++) {
        if (i == j || i == k || k == j) {
          continue;
        }
        let digit = digits[i] * 100 + digits[j] * 10 + digits[k];
        if (digit % 2 == 0 && !vis[digit]) {
          vis[digit] = true;
          count++;
          // unique.add(digit)
        }
      }
    }
  }
  return count;
}

const testCases: number[][] = [
  [1, 2, 3],
  [2, 2, 8, 8, 2],
  [0, 2, 0],
  [0, 0, 0],
  [1, 3, 5],
  [0, 1, 2, 3],
];

for (const digits of testCases) {
  console.log(`Input:       ${JSON.stringify(digits)}`);
  console.log(`Output:      ${totalNumbers(digits)}`);
  console.log("-".repeat(35));
}
