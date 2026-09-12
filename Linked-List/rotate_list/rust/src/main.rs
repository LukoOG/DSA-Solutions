fn main() {
    let test_cases = vec![
        (vec![1, 2, 3, 4, 5], 2),
        (vec![0, 1, 2], 4),
        (vec![1], 0),
        (vec![1, 2], 1),
        (vec![1, 2, 3], 3),
    ];

    for (values, k) in test_cases {
        let original = values.clone();
        let head = build_linked_list(values);
        let result = Solution::rotate_right(head, k);
        println!("Input:       {:?}, k={}", original, k);
        println!("Output:      {:?}", linked_list_to_array(result));
        println!("{}", "-".repeat(35));
    }
}