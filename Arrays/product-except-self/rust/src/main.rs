struct Solution;

fn main() {
    let test_cases = vec![
        vec![1, 2, 3, 4],
        vec![-1, 1, 0, -3, 3],
        vec![0, 0],
        vec![1, 1],
        vec![-1, -1, -1, -1],
        vec![2, 3],
    ];

    for nums in test_cases {
        println!("Input:       {:?}", nums);
        println!("Output:      {:?}", Solution::product_except_self(nums));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        vec![0]
    }
}