fn main() {
    let test_cases = vec![
        vec![1, 2, 3, 4],
        vec![1, 1, 1, 1, 1],
        vec![3],
        vec![0, 0, 0],
    ];

    for nums in test_cases {
        println!("Input:       {:?}", nums);
        println!("Solution 1:  {:?}", running_sum_new(nums.clone()));
        println!("Solution 2:  {:?}", running_sum_inplace(nums.clone()));
        println!("{}", "-".repeat(35));
    }
}

fn running_sum_new(nums: Vec<u32>) -> Vec<u32> {
    let mut results = Vec::with_capacity(nums.len());

    // if nums.is_empty() {
    //     results
    // } else {
    results.push(nums[0]);

    for i in 1..nums.len() {
        results.push(results[i - 1] + nums[i])
    }

    results
    // }
}

fn running_sum_inplace(mut nums: Vec<u32>) -> Vec<u32> {
    if nums.len() <= 1 {
        return nums;
    }

    for i in 1..nums.len() {
        nums[i] += nums[i - 1]
    };
    nums
}
