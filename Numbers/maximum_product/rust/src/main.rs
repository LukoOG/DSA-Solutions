use std::{cmp::Ordering, collections::HashSet};

struct Solution();

fn main() {
    println!("Hello, world!");
}

impl Solution {
    pub fn max_product(mut n: i32) -> i32 {
        let mut max1 = i32::MIN;
        let mut max2 = i32::MIN;
        while n > 0 {
            let d = n % 10;

            if d > max1 {
                max2 = max1;
                max1 = d;
            } else if d > max2 {
                max2 = d;
            } else if d == max1{
                max2 = d;
            }

            n /= 10;
        }

        max1 * max2
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn basic() {
        assert_eq!(Solution::max_product(12), 2);
    }

    #[test]
    fn reverse() {
        assert_eq!(Solution::max_product(21), 2);
    }

    #[test]
    fn increasing() {
        assert_eq!(Solution::max_product(12345), 20);
    }

    #[test]
    fn decreasing() {
        assert_eq!(Solution::max_product(54321), 20);
    }

    #[test]
    fn repeated_max() {
        assert_eq!(Solution::max_product(9998), 72);
    }

    #[test]
    fn only_zero_and_nine() {
        assert_eq!(Solution::max_product(909), 0);
    }

    #[test]
    fn many_duplicates() {
        assert_eq!(Solution::max_product(2211), 2);
    }

    #[test]
    fn alternating() {
        assert_eq!(Solution::max_product(919191), 9);
    }

    #[test]
    fn large() {
        assert_eq!(Solution::max_product(987654321), 72);
    }

    #[test]
    fn one_and_zeroes() {
        assert_eq!(Solution::max_product(1000000), 0);
    }

    #[test]
    fn repeating() {
        assert_eq!(Solution::max_product(767), 49);
    }
}
