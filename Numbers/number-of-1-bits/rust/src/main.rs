use std::println;

struct Solution;

fn main() {
    let test_cases: Vec<i32> = vec![11, 128, 2147483645, 0, 1, 2147483647];

    for n in test_cases {
        println!("Input:       {} (binary: {:b})", n, n);
        println!("Output:      {}", Solution::hamming_weight(n));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    fn denary_to_binary(mut n: i64) -> i64 {
        let mut binary = 0i64;
        let mut place_value = 1i64;

        while n > 0 {
            let quotient: i64 = n / 2;
            let remainder: i64 = n - (quotient * 2);

            binary = binary + (remainder * place_value);
            n = quotient;
            place_value *= 10
        }

        binary
    }

    //Count the remainders directly instead
    // pub fn hamming_weight(n: i32) -> i32 {
    //     let binary = Self::denary_to_binary(n.into());
    //     println!("{:?}", binary.to_string().chars());
    //     let count = binary.to_string().chars().fold(0, |mut acc, curr|{
    //         if curr == '1' {
    //             acc = acc + 1;
    //             return acc
    //         }
    //         acc
    //     });
    //     count
    // }
    pub fn hamming_weight(mut n: i32) -> i32 {
        let mut count = 0;

        while n > 0 {
            let quotient = n / 2;
            let remainder = n - (quotient * 2);
            if remainder == 1 {
                count += 1
            }
            n = quotient
        }

        count
    }
}
