struct Solution();

fn main() {
    let test_cases = vec!["III", "IV", "IX", "LVIII", "MCMXCIV", "I", "MMMCMXCIX"];

    for s in test_cases {
        println!("Input:       {:?}", s);
        println!("Output:      {}", Solution::roman_to_int(s.to_string()));
        println!("{}", "-".repeat(35));
    }
}

fn roman_value(c: char) -> Option<i32> {
    match c {
        'I' => Some(1),
        'V' => Some(5),
        'X' => Some(10),
        'L' => Some(50),
        'C' => Some(100),
        'D' => Some(500),
        'M' => Some(1000),
        _ => None,
    }
}

impl Solution {
    fn roman_to_int(s: String) -> i32 {
        let mut result = 0i32;
        let mut chars = s.chars().peekable();

        while let Some(c) = chars.next(){
            let current = roman_value(c).unwrap();
            if let Some(&x) = chars.peek() {
                let next = roman_value(x).unwrap();
                if next > current {
                    result -= current;
                    continue;
                };
            };
            result += current;
        };

        result
    }
}
