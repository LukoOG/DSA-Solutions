use std::collections::HashSet;
use std::cmp::max;

struct Solution;

fn main() {
    let test_cases = vec![
        vec![100, 4, 200, 1, 3, 2],
        vec![0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
        vec![],
        vec![1],
        vec![1, 2, 3, 4, 5],
        vec![5, 4, 3, 2, 1],
        vec![1, 3, 5, 7],
    ];

    for nums in test_cases {
        println!("Input:       {:?}", nums);
        println!("Output:      {}", Solution::longest_consecutive(nums));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let num_set: HashSet<i32> = nums.into_iter().collect();
        let mut longest = 0;

        for &num in &num_set {
            if !num_set.contains(&(num-1)) {
                let mut curr = num;
                let mut curr_longest = 0;

                while num_set.contains(&curr){
                    curr +=1;
                    curr_longest +=1
                }

                longest = max(longest, curr_longest)
            }
        }
        longest
    }
}