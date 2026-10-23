use std::collections::HashMap;

struct Solution;

fn main() {
    let test_cases = vec![
        (vec![1, 1, 1], 2),
        (vec![1, 2, 3], 3),
        (vec![1, -1, 1], 1),
        (vec![0, 0, 0], 0),
        (vec![-1, -1, 1], 0),
        (vec![1], 1),
        (vec![1, 2, 3, 4, 5], 15),
    ];

    for (nums, k) in test_cases {
        println!("Input:       nums={:?}, k={}", nums, k);
        println!("Output:      {}", Solution::subarray_sum(nums, k));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn subarray_sum(nums: Vec<i32>, k: i32) -> i32 {
        let mut count = 0;
        let mut seen = HashMap::<i32, i32>::with_capacity(nums.len());
        seen.insert(0,1);
        let mut curr_sum = 0i32;
        for num in nums {
            curr_sum += num;
            if let Some(&freq) = seen.get(&(&curr_sum - k)) {
                count += freq
            }
            *seen.entry(curr_sum).or_insert(0) += 1;
        }
        count
    }
}