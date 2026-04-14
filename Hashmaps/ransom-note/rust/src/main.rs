use std::collections::HashMap;

fn main() {
    let test_cases = vec![
        ("a", "b"),          // false - letter not in magazine
        ("aa", "ab"),        // false - not enough a's
        ("aa", "aab"),       // true  - exact letters available
        ("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbeggbjgeggbg"), // true  - long magazine
        ("", "abc"),         // true  - empty ransom note
    ];

    for (ransom_note, magazine) in test_cases {
        println!("Ransom Note: {:?}", ransom_note);
        println!("Magazine:    {:?}", magazine);
        println!("Output:      {}", Solution::can_construct(
            ransom_note.to_string(),
            magazine.to_string()
        ));
        println!("{}", "-".repeat(35));
    }
}

impl Solution{
    fn can_construct(ransom_note: String, magazine: String) -> bool{
        let mut magazine_map: HashMap<&str, i32> = HashMap::new();

        for (i, &item) in magazine.as_bytes().iter().enumerate(){
            if magazine_map.contains_key(&i){
                magazine_map.
            } else {
                magazine_map.insert(&i, *item)
            }
        };

    }
}