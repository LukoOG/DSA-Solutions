fn main() {
    let test_cases = vec![1, 3, 5, 15, 16];

    for n in test_cases {
        println!("Input:       {}", n);
        println!("Output:      {:?}", fizzbuzz(n));
        println!("{}", "-".repeat(35));
    }
}

fn fizzbuzz(n: i32) -> Vec<String>{
    let mut results: Vec<String> = Vec::new();
   
    for i in 1..=n{
        let divisible_by_3 = i % 3 == 0;
        let divisible_by_5 = i % 5 == 0;

        if divisible_by_3 && divisible_by_5{
            results.push("FizzBuzz".to_string())
        } else if divisible_by_3 {
            results.push("Fizz".to_string())
        } else if divisible_by_5 {
            results.push("Buzz".to_string())
        } else {
            results.push(i.to_string());
        }
    };

    results
}