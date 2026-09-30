struct Solution;

fn main() {
    let test_cases = vec![
        vec![2, 2, 1],
        vec![4, 1, 2, 1, 2],
        vec![1],
        vec![0, 0, 5],
        vec![-1, -1, 3],
    ];

    for nums in test_cases {
        println!("Input:       {:?}", nums);
        println!("Output:      {}", Solution::single_number(nums));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        nums.iter().fold(0, |acc, &n| acc ^ n)
    }
}