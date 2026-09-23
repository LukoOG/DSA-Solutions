use std::collections::VecDeque;

// paste your implementation here
struct MyStack {
    queue: VecDeque<i32>,
}

impl MyStack {
    fn new() -> Self {}
    fn push(&mut self, x: i32) {}
    fn pop(&mut self) -> i32 {}
    fn top(&mut self) -> i32 {}
    fn empty(&self) -> bool {}
}

fn run_test(ops: &[&str], args: &[Option<i32>], expected: &[Option<i32>]) {
    let mut stack = MyStack::new();
    let mut results: Vec<String> = vec![];

    for (i, &op) in ops.iter().enumerate() {
        match op {
            "push"  => { stack.push(args[i].unwrap()); results.push("null".to_string()); }
            "pop"   => results.push(stack.pop().to_string()),
            "top"   => results.push(stack.top().to_string()),
            "empty" => results.push(stack.empty().to_string()),
            _       => {}
        }
    }

    println!("Ops:         {:?}", ops);
    println!("Args:        {:?}", args);
    println!("Output:      {:?}", results);
    println!("Expected:    {:?}", expected);
    println!("{}", "-".repeat(35));
}

fn main() {
    run_test(
        &["push", "push", "top", "pop", "empty"],
        &[Some(1), Some(2), None, None, None],
        &[None, None, Some(2), Some(2), Some(0)],
    );
    run_test(
        &["push", "empty", "pop", "empty"],
        &[Some(5), None, None, None],
        &[None, Some(0), Some(5), Some(1)],
    );
    run_test(
        &["push", "push", "push", "pop", "top", "pop", "empty"],
        &[Some(1), Some(2), Some(3), None, None, None, None],
        &[None, None, None, Some(3), Some(2), Some(2), Some(0)],
    );
}