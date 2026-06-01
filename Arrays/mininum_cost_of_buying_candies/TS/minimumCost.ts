export {};

function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);
  let seen: number[] = [];
  let totalCost = 0;
  let i = 0;
  while(i < cost.length){
    const currentCost = cost[i];
    if(seen.length < 2){
        totalCost += currentCost;
        seen.push(cost[i])
    } else if(seen.every((a) => a >= currentCost )){
        seen.length = 0; //clear the seen
    } else {
        // console.log(cost, `index ${i}`)
        totalCost += currentCost
    }
    i += 1
  };
  return totalCost
}

const testCases: number[][] = [
    [1, 2, 3],
    [6, 5, 7, 9, 2, 2],
    [5, 5],
    [1],
    [5, 5, 5, 5],
];

for (const cost of testCases) {
    console.log(`Input:       ${JSON.stringify(cost)}`);
    console.log(`Output:      ${minimumCost(cost)}`);
    console.log("-".repeat(35));
}
