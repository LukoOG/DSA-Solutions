struct NumArray {
    pub prefix: Vec<i32>,
}

impl NumArray {
    //preferred for loop variant
    pub fn _new(nums: Vec<i32>) -> Self {
        let mut prefix = Vec::with_capacity(nums.len() + 1);
        prefix.push(0);

        let mut current_sum = 0;
        for num in nums {
            current_sum += num;
            prefix.push(current_sum);
        }

        Self { prefix }
    }

    fn new(nums: Vec<i32>) -> Self {
        let prefix = std::iter::once(0)
            .chain(nums.into_iter().scan(0, |state, x| {
                *state += x;
                Some(*state)
            }))
            .collect();
        Self { prefix }
    }

    fn sum_range(&self, left: i32, right: i32) -> i32 {
        self.prefix[(right + 1) as usize] - self.prefix[left as usize]
    }
}

fn main() {
    let test_cases = vec![
        (
            vec![-2, 0, 3, -5, 2, -1],
            vec![(0, 2), (2, 5), (0, 5)],
            vec![1, -1, -3],
        ),
        (
            vec![1, 2, 3, 4, 5],
            vec![(0, 4), (1, 3), (0, 0)],
            vec![15, 9, 1],
        ),
        (vec![5], vec![(0, 0)], vec![5]),
    ];

    for (nums, queries, expected) in test_cases {
        let obj = NumArray::new(nums.clone());
        let results: Vec<i32> = queries.iter().map(|&(l, r)| obj.sum_range(l, r)).collect();
        println!("nums:        {:?}", nums);
        println!("queries:     {:?}", queries);
        println!("Output:      {:?}", results);
        println!("Expected:    {:?}", expected);
        println!("{}", "-".repeat(35));
    }
}
