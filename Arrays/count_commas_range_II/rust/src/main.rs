use std::ops::Add;

struct Solution;

fn main() {
    let test_cases: Vec<u64> = vec![
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
    pub fn count_commas(n: u64) -> u64 {
        let mut m = n;
        let mut highest_power = 0_u64;
        while m > 999 {
            m /= 1000;
            highest_power+=1
        }
        let mut previous_no_commas = 0;
        for i in 1..highest_power {
            let no_of_ints = 999 * 1000_u64.pow(i as u32);
            previous_no_commas += no_of_ints * i;
        }
        let partial_integers = n.add(1) - 1000_u64.pow(highest_power as u32);
        let partial_no_commas = partial_integers * highest_power;

        partial_no_commas + previous_no_commas

    }
}