struct Solution;

fn main() {
    let test_cases = vec![
        vec![1, 2, 3],
        vec![6, 5, 7, 9, 2, 2],
        vec![5, 5],
        vec![1],
        vec![5, 5, 5, 5],
    ];

    for cost in test_cases {
        println!("Input:       {:?}", cost);
        println!("Output:      {}", Solution::minimum_cost(cost));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    fn minimum_cost(mut cost: Vec<i32>) -> i32 {
        cost.sort_by(|a, b| b.cmp(a));
        // let mut i: usize = 0;
        let mut total_cost = 0;

        for i in 0..cost.len() {
            if i % 3 == 2 {
                continue;
            };
            total_cost += cost[i];
            // i += 1;
        }

        total_cost
    }
}
