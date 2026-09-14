struct Solution;

fn main() {
    let test_cases = vec![
        (vec![0, 0, 2, 2], vec![1, 1, 3, 3]),
        (vec![0, 0, 1, 1], vec![1, 0, 2, 1]),
        (vec![0, 0, 1, 1], vec![2, 2, 3, 3]),
        (vec![0, 0, 3, 3], vec![1, 1, 2, 2]),
        (vec![0, 0, 2, 2], vec![0, 0, 2, 2]),
        (vec![0, 0, 2, 2], vec![3, 0, 5, 2]),
    ];

    for (rec1, rec2) in test_cases {
        println!("Input:       rec1={:?}, rec2={:?}", rec1, rec2);
        println!("Output:      {}", Solution::is_rectangle_overlap(rec1, rec2));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn is_rectangle_overlap(rec1: Vec<i32>, rec2: Vec<i32>) -> bool {
        // let [x1, y1, x2, y2] = rec1[..];
        // let [x3, y3, x4, y4] = rec2[..];

        !(rec1[2] <= rec2[0] || rec1[0] >= rec2[2] || rec1[3] <= rec2[1] || rec1[1] >= rec2[3])
    }
}