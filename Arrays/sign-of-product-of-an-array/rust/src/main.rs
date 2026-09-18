struct Solution;

fn main() {
    let test_cases = vec![
        vec![-1, -2, -3, -4, 3, 2, 1],
        vec![1, 5, 0, 2, -3],
        vec![-1, 1, -1, 1, -1],
        vec![1, 2, 3, 4],
        vec![-1, -1, -1],
        vec![0],
    ];

    for nums in test_cases {
        println!("Input:       {:?}", nums);
        println!("Output:      {}", Solution::array_sign(nums));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn array_sign(nums: Vec<i32>) -> i32 {
        let mut sign = 1i32;
        for i in nums {
            if i == 0 {
                return 0
            } else if i < 0{
                sign *= -1
            }
        }
        sign
    }
}