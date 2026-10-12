struct Solution;

fn main() {
    let test_cases = vec![0, 1, 2, 5, 8, 16];

    for n in test_cases {
        println!("Input:       {}", n);
        println!("Output:      {:?}", Solution::count_bits(n));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn count_bits(n: i32) -> Vec<i32> {
        let mut dp: Vec<i32> = vec![0;(n+1) as usize];
        for i in 1..=n {
            dp[i as usize] = dp[(i>>1) as usize] + (i & 1)
        }
        dp
    }

    pub fn _count_bits(n: i32) -> Vec<i32> {
        BitCounter::new(n).collect()
    }
}

pub struct BitCounter {
    max: usize,
    current: usize,
    dp: Vec<i32>,
}

impl BitCounter {
    pub fn new(n: i32) -> Self {
        Self {
            max: n as usize,
            current: 0,
            dp: vec![0], 
        }
    }
}

impl Iterator for BitCounter {
    type Item = i32;

    fn next(&mut self) -> Option<Self::Item> {
        if self.current > self.max {
            return None;
        }

        if self.current == 0 {
            self.current += 1;
            return Some(0); 
        }

        let val = self.dp[self.current >> 1] + (self.current & 1) as i32;
        self.dp.push(val);
        
        self.current += 1;
        Some(val)
    }
}