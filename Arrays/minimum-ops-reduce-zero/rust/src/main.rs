struct Solution;

fn main() {
    let test_cases = vec![
        (vec![1, 1, 4, 2, 3], 5),
        (vec![5, 6, 7, 8, 9], 4),
        (vec![3, 2, 20, 1, 1, 3], 10),
        (vec![1, 1], 3),
        (vec![1, 1, 1, 1, 1], 5),
        (vec![5], 5),
        (vec![1, 2, 3, 4], 3),
    ];

    for (nums, x) in test_cases {
        println!("Input:       nums={:?}, x={}", nums, x);
        println!("Output:      {}", Solution::min_operations(nums, x));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn min_operations(nums: Vec<i32>, x: i32) -> i32 {
        let target= nums.iter().sum::<i32>() - x;
        if target < 0 {
            return -1
        }
        if target == 0 {
            return nums.len() as i32
        }

        let mut current_sum = 0i32;
        let mut left = 0;
        let mut max_len: Option<usize> = None;

        for (right, &num) in nums.iter().enumerate() {
            current_sum += num;

            while current_sum > target && left <= right {
                current_sum -= nums[left];
                left+=1;
            }
            if current_sum == target {
                let current_len = right - left + 1;
                max_len = Some(max_len.map_or(current_len, |max| max.max(current_len)))
            }
        }
        // match max_len {
        //     None => -1,
        //     Some(len) => (nums.len() - len) as i32
        // }
        max_len.map_or(-1, |len| (nums.len() - len) as i32)
    }
}