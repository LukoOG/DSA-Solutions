struct Solution();

fn main() {
    let test_cases = vec![
        vec![vec![1, 2, 3],
             vec![4, 5, 6],
             vec![7, 8, 9]],

        vec![vec![5, 1, 9, 11],
             vec![2, 4, 8, 10],
             vec![13, 3, 6, 7],
             vec![15, 14, 12, 16]],

        vec![vec![1]],

        vec![vec![1, 2],
             vec![3, 4]],
    ];

    for mut matrix in test_cases {
        let original = matrix.clone();
        Solution::rotate(&mut matrix);
        println!("Input:       {:?}", original);
        println!("Output:      {:?}", matrix);
        println!("{}", "-".repeat(35));
    }
}

impl Solution{
    fn rotate(matrix: &mut Vec<Vec<i32>>){
        let copy = matrix.clone();
        let n = matrix.len()-1;

        for (r, _) in copy.iter().enumerate(){
            let mut new_row: Vec<i32> = Vec::new();
            for j in (0..=n).rev(){
                let value = copy[j][r];
                new_row.push(value)
            }

            matrix[r] = new_row;
        }
    }
}