export {};

function separateDigits(nums: number[]): number[] {
  let results = [];
  for (const num of nums) {
    let result = Array.from(String(num)).map((i) => Number(i));
    results.push(...result);
  }
  return results;
}

const test_cases = [
  [13, 25, 32], // → [1, 3, 2, 5, 3, 2]
  [7, 1, 3, 9], // → [7, 1, 3, 9], all single digits
  [100, 200], // → [1, 0, 0, 2, 0, 0], zeros in digits
  [99, 77], // → [9, 9, 7, 7]
  [1], // → [1], single element
];


for(const test of test_cases){
    console.log(separateDigits(test))
}