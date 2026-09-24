use std::collections::HashSet;

struct Solution;

fn main() {
    let test_cases = vec![
        ("aA", "aAAbbbb"),
        ("z", "ZZZ"),
        ("a", "a"),
        ("a", "b"),
        ("abc", "aabbcc"),
        ("aA", ""),
    ];

    for (jewels, stones) in test_cases {
        println!("Input:       jewels={:?}, stones={:?}", jewels, stones);
        println!("Output:      {}", Solution::num_jewels_in_stones(jewels.to_string(), stones.to_string()));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn _num_jewels_in_stones(jewels: String, stones: String) -> i32 {
        let jewels: HashSet<char> = jewels.chars().into_iter().collect();

        // stones.chars().fold(0, |mut acc, curr| {
        //     if jewels.contains(&curr){
        //         acc+=1
        //     }
        //     return acc
        // })
        stones.chars().filter(|c| jewels.contains(c)).count() as i32
    }

    //Using Boolean array
    pub fn num_jewels_in_stones(jewels: String, stones: String) -> i32 {
        let mut j = vec![false; 128];
        jewels.bytes().for_each(|byte| j[byte as usize] = true);
        
        stones.bytes().filter(|&byte| j[byte as usize]).count() as i32
    }
}