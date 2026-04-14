use std::collections::HashMap;

struct Solution();

fn main() {
    let test_cases = vec![
        ("a", "b"),                                               // false - letter not in magazine
        ("aa", "ab"),                                             // false - not enough a's
        ("aa", "aab"),                                            // true  - exact letters available
        ("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbeggbjgeggbg"), // true  - long magazine
        ("", "abc"),                                              // true  - empty ransom note
    ];

    for (ransom_note, magazine) in test_cases {
        println!("Ransom Note: {:?}", ransom_note);
        println!("Magazine:    {:?}", magazine);
        println!(
            "Output:      {}",
            Solution::can_construct(ransom_note.to_string(), magazine.to_string())
        );
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    fn can_construct(ransom_note: String, magazine: String) -> bool {
        let mut magazine_map: HashMap<u8, i32> = HashMap::new();

        for (_i, item) in magazine.as_bytes().iter().enumerate() {
            let value = magazine_map.get(&item).copied().unwrap_or_default();
            magazine_map.insert(*item, value + 1);
        }

        for char in ransom_note.as_bytes().iter() {
            let value = magazine_map.get(char).copied().unwrap_or_default();
            if value == 0 {
                return false;
            };
            magazine_map.insert(*char, value - 1);
        }
        true
    }
}
