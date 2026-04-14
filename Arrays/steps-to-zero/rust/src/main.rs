fn main() {
    let test_cases = vec![0, 1, 2, 6, 14];

    for n in test_cases {
        println!("Input:       {}", n);
        println!("Output:      {}", steps_to_zero(n));
        println!("{}", "-".repeat(35));
    }
}

fn steps_to_zero(mut n: i32) -> i32 {
    let mut steps = 0;
    loop {
        if n == 0 {
            break;
        };

        if n % 2 == 0 {
            n /= 2
        } else {
            n -= 1
        };
        steps += 1;
    }
    steps
}

//bitwise implemetation from GPT
#[allow(unused)]
fn steps_to_zero_gpt(mut n: i32) -> i32 {
    let mut steps = 0;

    while n > 0 {
        if n & 1 == 0 {
            // Even number, divide by 2
            n >>= 1;
        } else {
            // Odd number, subtract 1
            n -= 1;
        }
        steps += 1;
    }

    steps
}