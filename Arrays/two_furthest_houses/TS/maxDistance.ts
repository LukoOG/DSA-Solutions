export {}

function maxDistance(colors: number[]): number {
    let furthestDist = 0;
    let leftestColor = new Map<number, number>();
    for(let i = 0; i < colors.length; i++){
        const color = colors[i]
        if(!leftestColor.has(color)){
            leftestColor.set(color, i)
        };

        for (const key of leftestColor.keys()){
            console.log(key)
            if(color !== key){
                furthestDist = Math.max(furthestDist, i - leftestColor.get(key)!)
            }
        }
    } 
    console.log(leftestColor)
    return furthestDist
};

const test_case = [4,4,4,11,4,4,11,4,4,4,4,4]

console.log(maxDistance(test_case))