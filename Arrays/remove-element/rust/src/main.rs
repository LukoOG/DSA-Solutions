struct Solution;

fn main() {
    let test_cases = vec![
        (vec![3, 2, 2, 3], 3),
        (vec![0, 1, 2, 2, 3, 0, 4, 2], 2),
        (vec![1], 1),
        (vec![1], 2),
        (vec![2, 2, 2], 2),
        (vec![1, 2, 3, 4], 5),
    ];

    for (mut nums, val) in test_cases {
        let original = nums.clone();
        let k = Solution::remove_element(&mut nums, val);
        println!("Input:       nums={:?}, val={}", original, val);
        println!("Output:      k={}, nums={:?}", k, &nums[..k as usize]);
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut k = 0;
        for i in 0..nums.len() {
            if nums[i] != val {
                nums[k] = nums[i];
                k+=1;
            }
        }

        k as i32
    }
}