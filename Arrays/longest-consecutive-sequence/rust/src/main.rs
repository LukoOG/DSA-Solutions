struct Solution;

fn main() {
    let test_cases = vec![
        vec![100, 4, 200, 1, 3, 2],
        vec![0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
        vec![],
        vec![1],
        vec![1, 2, 3, 4, 5],
        vec![5, 4, 3, 2, 1],
        vec![1, 3, 5, 7],
    ];

    for nums in test_cases {
        println!("Input:       {:?}", nums);
        println!("Output:      {}", Solution::longest_consecutive(nums));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        0
    }
}