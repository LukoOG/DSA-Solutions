use std::ops::Sub;

struct Solution;

fn main() {
    let test_cases = vec![1, 999, 1000, 1002, 10000, 100000];

    for n in test_cases {
        println!("Input:       {}", n);
        println!("Output:      {}", Solution::count_commas(n));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn count_commas(n: i32) -> i32 {
        0.max(n.sub(999))
    }
}