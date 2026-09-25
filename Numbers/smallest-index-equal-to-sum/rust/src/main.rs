struct Solution;

fn main() {
    let test_cases = vec![
        vec![1, 3, 2],
        vec![1, 10, 11],
        vec![0, 1, 2, 3, 4],
        vec![5, 4, 3, 2, 1],
        vec![0],
        vec![1, 2, 3, 4, 10],
    ];

    for nums in test_cases {
        println!("Input:       {:?}", nums);
        println!("Output:      {}", Solution::smallest_index(nums));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    fn sum_of_digits(mut num: i32) -> i32 {
        let mut sum = 0i32;
        while num > 0{
            let d = num % 10;
            sum +=d;
            num /= 10;
        }
        sum
    }
    pub fn smallest_index(nums: Vec<i32>) -> i32 {
        for (i, &num) in nums.iter().enumerate() {
            if i as i32 == Self::sum_of_digits(num) { return i as i32 }
        }

        -1
    }
}