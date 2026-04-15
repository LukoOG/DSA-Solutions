
struct Solution();

fn main() {
    let test_cases = vec![
        (vec!["hello", "i", "am", "leetcode", "here"], "leetcode", 3),
        (vec!["hello", "i", "am", "leetcode", "here"], "here", 2),
        (vec!["hello", "i", "am", "leetcode", "here"], "hello", 1),
        (vec!["a", "b", "leetcode"], "leetcode", 0),
        (vec!["a"], "a", 0),
    ];

    for (words, target, start_index) in test_cases {
        let words_owned: Vec<String> = words.iter().map(|s| s.to_string()).collect();
        println!("Input:       words={:?}, target={:?}, startIndex={}", words, target, start_index);
        println!("Output:      {}", Solution::closest_target(words_owned, target.to_string(), start_index));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn closest_target(words: Vec<String>, target: String, start_index: i32) -> i32 {
        
        6
    }
}