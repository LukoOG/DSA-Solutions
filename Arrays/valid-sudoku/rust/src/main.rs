struct Solution;

fn main() {
    let valid_board = vec![
        vec!['5','3','.','.','7','.','.','.','.'],
        vec!['6','.','.','1','9','5','.','.','.'],
        vec!['.','9','8','.','.','.','.','6','.'],
        vec!['8','.','.','.','6','.','.','.','3'],
        vec!['4','.','.','8','.','3','.','.','1'],
        vec!['7','.','.','.','2','.','.','.','6'],
        vec!['.','6','.','.','.','.','2','8','.'],
        vec!['.','.','.','4','1','9','.','.','5'],
        vec!['.','.','.','.','8','.','.','7','9'],
    ];

    let invalid_board = vec![
        vec!['8','3','.','.','7','.','.','.','.'],
        vec!['6','.','.','1','9','5','.','.','.'],
        vec!['.','9','8','.','.','.','.','6','.'],
        vec!['8','.','.','.','6','.','.','.','3'],
        vec!['4','.','.','8','.','3','.','.','1'],
        vec!['7','.','.','.','2','.','.','.','6'],
        vec!['.','6','.','.','.','.','2','8','.'],
        vec!['.','.','.','4','1','9','.','.','5'],
        vec!['.','.','.','.','8','.','.','7','9'],
    ];

    for board in vec![valid_board, invalid_board] {
        println!("Output:      {}", Solution::is_valid_sudoku(board));
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        let mut rows = vec![0; 9];
        let mut cols = vec![0; 9];
        let mut boxes = vec![0; 9];
        for i in 0..9 {
            for j in 0..9 {
                let digit = board[i][j];
                if digit != '.' {
                    let val = digit as u8 - b'0'; //guaranteed to be '1' - '9'
                    let mask = 1 << val;
                    let box_idx = (j / 3) + (i / 3) * 3;
                    if rows[i]&mask != 0 || cols[j]&mask != 0 || boxes[box_idx]&mask != 0 {
                        return false
                    }
                    rows[i] |= mask;
                    cols[j] |= mask;
                    boxes[box_idx] |= mask;
                }
            }
        }
        true
    }
}