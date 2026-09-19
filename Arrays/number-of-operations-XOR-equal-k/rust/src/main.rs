struct Solution;

fn main() {
    let test_cases = vec![
        (vec![2, 1, 3, 4], 1),
        (vec![2, 0, 2, 0], 0),
        (vec![1], 1),
        (vec![1], 0),
        (vec![0, 0, 0], 5),
    ];

    for (nums, k) in test_cases {
        println!("Input:       nums={:?}, k={}", nums, k);
        println!("Output:      {}", Solution::min_operations(nums, k));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn _min_operations(nums: Vec<i32>, k: i32) -> i32 {
        let mut xor = k;
        for num in nums {
            xor ^= num
        }
        let mut count = 0i32;
        while xor != 0 {
            xor &= xor - 1;
            count+=1
        }
        count
    }

    pub fn min_operations(nums: Vec<i32>, k: i32) -> i32 {
        let xor = nums.into_iter().fold(k, |acc, num| acc ^ num);
        xor.count_ones() as i32
    }
}