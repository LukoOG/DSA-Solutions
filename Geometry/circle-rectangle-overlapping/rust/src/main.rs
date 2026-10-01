use std::ops::Mul;

struct Solution;

fn main() {
    let test_cases = vec![
        (1, 0, 0, 1, -1, 3, 1),
        (1, 1, 1, -3, -3, 3, 3),
        (1, 0, 0, -1, 0, 0, 1),
        (1, 5, 5, 0, 0, 2, 2),
        (1, 0, 0, 1, 1, 2, 2),
        (2, 0, 0, 3, 3, 5, 5),
    ];

    for (radius, x_center, y_center, x1, y1, x2, y2) in test_cases {
        println!("Input:       radius={}, center=({},{}), rect=({},{})->({},{})",
            radius, x_center, y_center, x1, y1, x2, y2);
        println!("Output:      {}", Solution::check_overlap(radius, x_center, y_center, x1, y1, x2, y2));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn check_overlap(radius: i32, x_center: i32, y_center: i32, x1: i32, y1: i32, x2: i32, y2: i32) -> bool {
        let a = x_center - x1.max(x2.min(x_center));
        let b = y_center - y1.max(y2.min(y_center));

        a.mul(a) + b.mul(b) <= radius.pow(2)
    }
}