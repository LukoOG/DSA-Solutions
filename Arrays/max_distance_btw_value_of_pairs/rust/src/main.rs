fn main() {
    let test_cases = vec![
        (vec![55, 30, 5, 4, 2], vec![100, 20, 10, 10, 5]),
        (vec![2, 2, 2], vec![10, 10, 1]),
        (vec![30, 29, 19, 5], vec![25, 25, 25, 25, 25]),
        (vec![5, 4, 3, 2, 1], vec![5, 4, 3, 2, 1]),
        (vec![1], vec![1]),
    ];

    for (nums1, nums2) in test_cases {
        println!("Input:       nums1={:?}, nums2={:?}", nums1, nums2);
        println!("Output:      {}", Solution::max_distance(nums1, nums2));
        println!("{}", "-".repeat(35));
    }
}