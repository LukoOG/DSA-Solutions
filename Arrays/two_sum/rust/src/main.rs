use std::collections::HashMap;

struct Solution();

fn main() {
    let test_cases = vec![
        (vec![2, 7, 11, 15], 9),
        (vec![3, 2, 4], 6),
        (vec![3, 3], 6),
        (vec![1, 2, 3, 4], 7),
        (vec![-1, -2, -3, -4], -6),
    ];

    for (nums, target) in test_cases {
        println!("Input:       nums={:?}, target={}", nums, target);
        println!("Output:      {:?}", Solution::two_sum(nums, target));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32>{
        let mut seen: HashMap<i32, i32> = HashMap::new();

        for (i, &num) in nums.iter().enumerate() {
            let complement = target - num;

            if let Some(&index) = seen.get(&complement) {
                return vec![index, i as i32]
            }

            seen.insert(num,i as i32);
        };

        vec![-1]
    }
}