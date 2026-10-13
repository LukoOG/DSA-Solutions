struct Solution;

fn main() {
    let test_cases = vec![
        "())",
        "(((",
        "()",
        "())))((",
        "",
        ")((", 
    ];

    for s in test_cases {
        println!("Input:       {:?}", s);
        println!("Output:      {}", Solution::min_add_to_make_valid(s.to_string()));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn min_add_to_make_valid(s: String) -> i32 {
        let mut open_needed = 0;
        let mut close_needed = 0;

        for &c in s.as_bytes() {
            match c {
                b'(' => close_needed +=1,
                _ => {
                    if close_needed > 0 {
                        close_needed -= 1
                    } else {
                        open_needed += 1
                    }
                }
            }
        }

        open_needed + close_needed
    }
}