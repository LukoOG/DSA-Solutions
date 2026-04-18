function removeDuplicates(nums: number[]): number {
    let newArr: number[] = [];

    for(let i = 0; i < nums.length; i++){
        if(!newArr.includes(nums[i])){
            newArr.push(nums[i])
        };
    };

    return newArr.length
};