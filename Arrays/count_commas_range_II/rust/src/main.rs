struct Solution;

fn main() {
    let test_cases: Vec<i64> = vec![
        998,
        1002,
        1000,
        999_999,
        1_000_000,
        1_000_000_000_000_000,
    ];

    for n in test_cases {
        println!("Input:       {}", n);
        println!("Output:      {}", Solution::count_commas(n));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn count_commas(n: i64) -> i64 {
        return 0
    }
}