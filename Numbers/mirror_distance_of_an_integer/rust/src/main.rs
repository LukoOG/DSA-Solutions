struct Solution();

fn main() {
    println!("Hello, world!");
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