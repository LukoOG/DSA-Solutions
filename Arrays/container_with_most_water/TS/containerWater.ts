export {};

function maxArea(tank: number[]): number {
  let left: number = 0;
  let right: number = tank.length - 1;
  let maxArea: number = 0;

  while (left < right) {
    const wall: number = Math.min(tank[left], tank[right]);
    const distance: number = right - left;

    const currentArea: number = wall * distance;
    maxArea = Math.max(currentArea, maxArea);
    if (tank[left] < tank[right]) {
      left++;
    } else if (tank[right] < tank[left]) {
      right--;
    } else {
        left++
    }
  }

  return maxArea;
}

const testCases: number[][] = [
  [1, 8, 6, 2, 5, 4, 8, 3, 7],
  [1, 1],
  [4, 3, 2, 1, 4],
  [1, 2, 1],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
];

// for (const height of testCases) {
//   console.log(`Input:       ${JSON.stringify(height)}`);
//   console.log(`Output:      ${maxArea(height)}`);
//   console.log("-".repeat(35));
// }

const height = testCases[0];
console.log(`Input:       ${JSON.stringify(height)}`);
console.log(`Output:      ${maxArea(height)}`);
console.log("-".repeat(35));
