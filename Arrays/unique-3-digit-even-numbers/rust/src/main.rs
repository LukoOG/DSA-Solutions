struct Solution;

fn main() {
    let test_cases = vec![
        vec![1, 2, 3],
        vec![2, 2, 8, 8, 2],
        vec![0, 2, 0],
        vec![0, 0, 0],
        vec![1, 3, 5],
        vec![0, 1, 2, 3],
    ];

    for digits in test_cases {
        println!("Input:       {:?}", digits);
        println!("Output:      {}", Solution::total_numbers(digits));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn total_numbers(digits: Vec<i32>) -> i32{
        let mut count = 0;
        let mut vis = [false; 1000];
        for i in 0..digits.len(){
            for j in 0..digits.len(){
                for k in 0..digits.len(){
                    if i == j || i == k || k == j {
                        continue;
                    }
                    let digit = digits[i] * 100 + digits[j] * 10 + digits[k];
                    if digit % 2 == 0 && digit / 100 > 0 && !vis[digit as usize]{
                        vis[digit as usize] = true;
                        count+=1
                    }
                }
            }
        }
        count
    }
}