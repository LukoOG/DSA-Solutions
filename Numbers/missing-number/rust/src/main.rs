struct Solution;

fn main() {
    let test_cases = vec![
        vec![3, 0, 1],
        vec![0, 1],
        vec![9, 6, 4, 2, 3, 5, 7, 0, 1],
        vec![0],
        vec![1],
    ];

    for nums in test_cases {
        println!("Input:       {:?}", nums);
        println!("Output:      {}", Solution::missing_number(nums));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let mut res = nums.len() as i32;
        for i in 0..nums.len(){
            res ^= i as i32 ^ nums[i]
        }
        res
    }
}