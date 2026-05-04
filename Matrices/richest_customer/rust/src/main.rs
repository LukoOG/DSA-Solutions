use std::cmp::{Ordering};

fn main() {
    let test_cases = vec![
        vec![vec![1, 2, 3], vec![4, 5, 6]],        // expected: 15
        vec![vec![1, 1, 1], vec![2, 2, 2]],        // expected: 6
        vec![vec![3]],                             // expected: 3
        vec![vec![0, 0, 0], vec![0, 0, 0]],        // expected: 0
        vec![vec![10, 0], vec![3, 7], vec![5, 5]], // expected: 10
        vec![vec![1, 5], vec![7, 3], vec![3, 5]],  // expected: 10
        vec![vec![2, 8, 7], vec![7, 1, 3], vec![1, 9, 5]],  // expected: 17
    ];

    for test_case in test_cases {
        println!("Input:    {:?}", test_case);
        println!("Solution: {}", richest_customer(test_case));
        println!("{}", "_".repeat(35));
    }
}

fn richest_customer(accounts: Vec<Vec<i32>>) -> i32 {
    let mut max_wealth: i32 = 0;

    for account in accounts{
        let sum = account.iter().sum();
        max_wealth = match max_wealth.cmp(&sum){
            Ordering::Greater => max_wealth,
            Ordering::Equal => max_wealth,
            Ordering::Less => sum
        }
    }
    max_wealth
}

//This is a more concise version from GPT--again
#[allow(unused)]
fn richest_customer_gpt(accounts: Vec<Vec<i32>>) -> i32 {
    accounts
        .iter()
        .map(|acc| acc.iter().sum::<i32>())
        .max()
        .unwrap_or(0) // handle empty input
}