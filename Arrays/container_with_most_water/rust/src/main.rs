struct Solution();

fn main() {
    let test_cases = vec![
        vec![1, 8, 6, 2, 5, 4, 8, 3, 7],
        vec![1, 1],
        vec![4, 3, 2, 1, 4],
        vec![1, 2, 1],
        vec![1, 2, 3, 4, 5],
        vec![5, 4, 3, 2, 1],
    ];

    for height in test_cases {
        println!("Input:       {:?}", height);
        println!("Output:      {}", Solution::max_area(height));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    fn max_area(tank: Vec<i32>) -> i32 {
        let mut max_area = i32::MIN;
        let mut left = 0;
        let mut right = tank.len() - 1;

        while left < right {
            if tank[left] < tank[right] {
                let current_area = (right as i32 - left as i32) * tank[left];
                max_area = if max_area > current_area{
                    max_area
                } else {
                    current_area
                };
                left+=1;
            } else {
                let current_area: i32 = (right as i32 - left as i32) * tank[right];
                max_area = if max_area > current_area {
                    max_area
                } else {
                    current_area
                };
                right-=1;
            }
        }
        max_area
    }
}
