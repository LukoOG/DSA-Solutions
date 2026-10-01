use std::collections::HashSet;

struct Solution;

fn main() {
    let test_cases = vec![
        "()",
        "()[]{}",
        "(]",
        "([)]",
        "{[]}",
        "",
        "(((",
        "]",
    ];

    for s in test_cases {
        println!("Input:       {:?}", s);
        println!("Output:      {}", Solution::is_valid(s.to_string()));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    //Former way
    fn get_opening_bracket(c: char) -> Option<char> {
        match c {
            '}' => Some('{'),
            ')' => Some('('),
            ']' => Some('['),
            _ => None
        }
    }

    pub fn _is_valid(s: String) -> bool {
        let mut stack: Vec<char> = Vec::new();
        let closing = HashSet::from([']','}',')']);

        for c in s.chars(){
            if closing.contains(&c) {
                if stack.is_empty() || *stack.last().unwrap() != Self::get_opening_bracket(c).unwrap() {
                    return false
                }
                stack.pop().unwrap();
            } else {
                stack.push(c);
            }
        };

        stack.is_empty()
    }
    
    //Idomatic Rust way
    pub fn is_valid(s: String) -> bool {
        let mut stack: Vec<char> = Vec::new();

        for c in s.chars() {
            match c {
                '(' => stack.push(')'),
                '{' => stack.push('}'),
                '[' => stack.push(']'),
                _ => {
                    if stack.pop() != Some(c){
                        return false
                    }
                }
            }
        }
        stack.is_empty()
    }
}