use std::cmp::min;

struct Solution();

fn main() {
    let test_cases = vec![
        (vec![1, 2, 3, 4, 5], 5, 3),   // target at end, start in middle → 2
        (vec![1, 2, 3, 4, 5], 1, 4),   // target at start, start at end → 4
        (vec![1, 2, 3, 4, 5], 3, 2),   // target in middle, start nearby → 1
        (vec![1, 2, 2, 2, 3], 2, 0),   // multiple targets, closest wins → 1
        (vec![5], 5, 0),               // single element → 0
    ];

    for (nums, target, start) in test_cases {
        println!("Input:       nums={:?}, target={}, start={}", nums, target, start);
        println!("Output:      {}", Solution::get_min_distance(nums, target, start));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    fn get_min_distance(nums: Vec<i32>, target: i32, start: i32) -> i32{
        // let mut min_dist = nums.len();
        let mut min_dist = i32::MAX; //the Idiomatic approach: rust for unknown i32 value

        for i in 0..nums.len(){
            if nums[i] == target {
                min_dist = min(min_dist, (start - i as i32).abs());
            };
        };

        min_dist
    }
}