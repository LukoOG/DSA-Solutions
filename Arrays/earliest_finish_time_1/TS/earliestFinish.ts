export {};

function earliestFinishTime(landStartTime: number[],landDuration: number[],waterStartTime: number[],waterDuration: number[],): number {
  //land order
  let minLandOrder = Infinity;
  for (let i = 0; i < landStartTime.length; i++) {
    let startEnd = landStartTime[i] + landDuration[i];
    const validWaterDuration: number[] = waterDuration.map((e, i)=>{
        if(startEnd < waterStartTime[i]){
            return waterStartTime[i] - startEnd + e
        };
        return e
    });
    minLandOrder = Math.min(minLandOrder, startEnd + Math.min(...validWaterDuration))
  };

  let minWaterOrder = Infinity;
  //water order
  for (let i = 0; i < waterStartTime.length; i++) {
    let startEnd = waterStartTime[i] + waterDuration[i];
    const validLandDuration: number[] = landDuration.map((e, i)=>{
        if(startEnd < landStartTime[i]){
            return landStartTime[i] - startEnd + e
        };
        return e
    })
    minWaterOrder = Math.min(minWaterOrder, startEnd + Math.min(...validLandDuration))
  };

  return Math.min(minLandOrder, minWaterOrder)
}

const testcases = [
  {
    landStartTime: [2, 8],
    landDuration: [4, 1],
    waterStartTime: [6],
    waterDuration: [3],
    expected: 9,
  },

  {
    landStartTime: [5],
    landDuration: [3],
    waterStartTime: [1],
    waterDuration: [10],
    expected: 14,
  },

  {
    landStartTime: [1],
    landDuration: [2],
    waterStartTime: [3],
    waterDuration: [1],
    expected: 4,
  },

  {
    landStartTime: [10],
    landDuration: [1],
    waterStartTime: [1],
    waterDuration: [1],
    expected: 11,
  },

  {
    landStartTime: [1],
    landDuration: [2],
    waterStartTime: [10],
    waterDuration: [1],
    expected: 11,
  },

  {
    landStartTime: [10],
    landDuration: [2],
    waterStartTime: [1],
    waterDuration: [1],
    expected: 12,
  },

  {
    landStartTime: [1, 6],
    landDuration: [3, 2],
    waterStartTime: [2, 4],
    waterDuration: [5, 1],
    expected: 5,
  },

  {
    landStartTime: [1, 5],
    landDuration: [10, 1],
    waterStartTime: [3],
    waterDuration: [1],
    expected: 7,
  },

  {
    landStartTime: [1, 1],
    landDuration: [1, 2],
    waterStartTime: [1, 1],
    waterDuration: [2, 3],
    expected: 3,
  },

  {
    landStartTime: [1000],
    landDuration: [1000],
    waterStartTime: [1000],
    waterDuration: [1000],
    expected: 3000,
  },
];

let i = 0;
for(const { landStartTime, landDuration, waterStartTime, waterDuration, expected } of testcases){
    console.log("input: ", testcases[i])
    console.log(`output: ${earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration)}`)
    console.log(`Expected: ${expected}`)
    console.log('-----------------------')
    i+=1
}