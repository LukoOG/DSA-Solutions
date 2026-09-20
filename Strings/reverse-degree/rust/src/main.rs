struct Solution;

fn main() {
    let test_cases = vec!["abc", "zza", "a", "z", "az", "reverse"];

    for s in test_cases {
        println!("Input:       {:?}", s);
        println!("Output:      {}", Solution::reverse_degree(s.to_string()));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn reverse_degree(s: String) -> i32 {
        let mut sum = 0i32;

        for (i, &b) in s.as_bytes().iter().enumerate() {
            sum += (i as i32 + 1) * (123 - b as i32)
        }

        sum
    }
}