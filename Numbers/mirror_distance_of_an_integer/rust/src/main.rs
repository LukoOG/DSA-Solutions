struct Solution();

fn main() {
    let test_cases = vec![25, 10, 7, 121, 100, 1];

    for n in test_cases {
        println!("Input:       {}", n);
        println!("Output:      {}", Solution::mirror_distance(n));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn mirror_distance(n: i32) -> i32 {
        let mut reverse: i32 = 0;
        let mut number: i32 = n;

        while number > 0 {
            reverse = (reverse * 10) + (number % 10);
            number /= 10;
        };

        return n.abs_diff(reverse).try_into().unwrap()
    }
}