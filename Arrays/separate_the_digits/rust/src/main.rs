struct Solution();

fn main() {
    let test_cases = vec![
        vec![13, 25, 32],
        vec![7, 1, 3, 9],
        vec![100, 200],
        vec![99, 77],
        vec![1],
    ];

    for nums in test_cases {
        println!("Input:       {:?}", nums);
        println!("Output:      {:?}", Solution::separate_digits(nums));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    fn separate_digits(nums: Vec<i32>) -> Vec<i32> {
        let mut results = Vec::new();

        for num in nums {
            for i in num.to_string().chars(){
                results.push(i.to_digit(10).unwrap() as i32)
            }
        }

        results
    }
}