use std::collections::HashMap;

struct Solution;

fn main() {
    let test_cases = vec![
        ("anagram", "nagaram"),
        ("rat", "car"),
        ("a", "a"),
        ("a", "b"),
        ("aa", "a"),
        ("listen", "silent"),
    ];

    for (s, t) in test_cases {
        println!("Input:       s={:?}, t={:?}", s, t);
        println!("Output:      {}", Solution::is_anagram(s.to_string(), t.to_string()));
        println!("{}", "-".repeat(35));
    }
}

impl Solution{
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len(){
            return false
        }
        let s_map = s.bytes().fold(HashMap::new(), |mut acc, x|{
            *acc.entry(x).or_insert(0) += 1;
            acc
        });

        let t_map = t.bytes().fold(HashMap::new(), |mut acc, x|{
            *acc.entry(x).or_insert(0) += 1;
            acc
        });

        s_map == t_map
    }
}