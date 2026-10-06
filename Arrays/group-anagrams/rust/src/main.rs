use std::collections::HashMap;

struct Solution;

fn main() {
    let test_cases = vec![
        vec!["eat", "tea", "tan", "ate", "nat", "bat"],
        vec![""],
        vec!["a"],
        vec!["abc", "bca", "cab", "xyz", "zyx"],
        vec!["ab", "ba", "abc", "cba", "bac"],
    ];

    for strs in test_cases {
        let owned: Vec<String> = strs.iter().map(|s| s.to_string()).collect();
        println!("Input:       {:?}", strs);
        println!("Output:      {:?}", Solution::group_anagrams(owned));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    fn create_key(s: &str) -> [u8;26] {
        let mut key = [0u8;26];
        s.bytes().for_each(|c| key[(c - b'a') as usize] += 1);
        key
    }
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut tab: HashMap<[u8; 26], Vec<String>> = HashMap::with_capacity(strs.len());
        for s in strs.into_iter() {
            let key = Self::create_key(&s);
            tab.entry(key).or_default().push(s);
        }

        tab.into_values().collect()
    }
}