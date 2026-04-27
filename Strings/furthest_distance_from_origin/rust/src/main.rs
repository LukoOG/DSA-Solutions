struct Solution();

fn main() {
    let test_cases = vec![
        "L_RL__R",
        "_R__LL_",
        "_______",
        "LLLLRR",
        "RRRRRR",
        "L",
    ];

    for moves in test_cases {
        println!("Input:       {:?}", moves);
        println!("Output:      {}", Solution::furthest_distance_from_origin(moves.to_string()));
        println!("{}", "-".repeat(35));
    }
}

impl Solution{
    fn furthest_distance_from_origin(moves: String) -> i32 {
        let mut ace: i32 = 0;
        let mut distance_origin: i32 = 0;

        for m in moves.chars(){
            if m == 'L' {
                distance_origin += 1
            } else if m == 'R' {
                distance_origin -= 1
            } else {
                ace += 1
            }
        };

        distance_origin.abs() + ace
    }
}