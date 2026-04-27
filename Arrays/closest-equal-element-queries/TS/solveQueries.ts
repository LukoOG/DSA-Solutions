export {};
//preprocess + binary search

function solveQueries(nums: number[], queries: number[]): number[] {
  //1. Preprocess
  let queryMap = new Map<number, number[]>();
  for (let i = 0; i < nums.length; i++) {
    let arr = queryMap.get(nums[i]) ?? [];
    arr.push(i);
    queryMap.set(nums[i], arr);
  }

  let ans: number[] = [];
  const n = nums.length;
  for (const j of queries) {
    // let query = nums[queries[j]];
    let query = nums[j];

    const indices = queryMap.get(query)!;
    // console.log(valid_ans, j);
    //Binary search

    let [start, end] = [0, indices.length - 1];
    let middle: number;
    let indice_neighbors = [];

    while (start <= end) {
      middle = (start + end) >> 1; //floor division
      if (indices[middle] == j) {
        const left_idx = (indices.length + middle - 1) % indices.length;
        const right_idx = (middle + 1) % indices.length;
        indices[left_idx] !== j ? indice_neighbors.push(indices[left_idx]) : -1;
        indices[right_idx] !== j
          ? indice_neighbors.push(indices[right_idx])
          : -1;
        break;
      } else if (indices[middle] < j) {
        start = middle + 1;
      } else if (indices[middle] > j) {
        end = middle - 1;
      }
    }

    console.log(j, indices);
    console.log(indice_neighbors);

    indice_neighbors = indice_neighbors.map((k) =>
      Math.min(Math.abs(j - k), n - Math.abs(j - k)),
    );
    if(indice_neighbors.length < 1){
      ans.push(-1)
    } else {
      ans.push(Math.min(...indice_neighbors))
    }
  }
  return ans;
}

const testCases: [number[], number[]][] = [
  [
    [1, 2, 3, 1, 2],
    [0, 1, 2],
  ],
  [
    [1, 1, 1],
    [0, 1, 2],
  ],
  [
    [1, 2, 3],
    [0, 1, 2],
  ],
  [
    [1, 2, 1, 3, 2],
    [0, 4],
  ],
  [[5], [0]],
  [[3, 3], [1]], //expect 1
];

for (const [nums, queries] of testCases) {
  console.log(
    `Input:       nums=${JSON.stringify(nums)}, queries=${JSON.stringify(queries)}`,
  );
  console.log(`Output:      ${JSON.stringify(solveQueries(nums, queries))}`);
  console.log("-".repeat(35));
}

// const n = 5;
// const [i, j] = [0, 1]
// console.log(`Input:       nums=${JSON.stringify(testCases[n][i])}, queries=${JSON.stringify(testCases[n][j])}`);
// console.log(`Output:      ${JSON.stringify(solveQueries(testCases[n][i], testCases[n][j]))}`)
