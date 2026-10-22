use std::{collections::VecDeque, println};
struct Solution;

fn main() {
    let test_cases = vec![
        (vec![vec![1, 1, 1], vec![1, 1, 0], vec![1, 0, 1]], 1, 1, 2),
        (vec![vec![0, 0, 0], vec![0, 0, 0]], 0, 0, 0),
        (vec![vec![0, 0, 0], vec![0, 1, 1]], 1, 1, 1),
        (vec![vec![1, 1, 1], vec![1, 1, 0], vec![1, 0, 1]], 0, 0, 3),
        (vec![vec![1]], 0, 0, 2),
    ];

    for (image, sr, sc, color) in test_cases {
        let original = image.clone();
        let result1 = Solution::flood_fill_bfs(image.clone(), sr, sc, color);
        let result2 = Solution::flood_fill_dfs(image, sr, sc, color);
        println!(
            "Input:       image={:?}, sr={}, sc={}, color={}",
            original, sr, sc, color
        );
        println!("Output(BFS):      {:?}", result1);
        println!("Output(DFS):      {:?}", result2);
        println!("{}", "-".repeat(35));
    }
}

impl Solution {
    pub fn flood_fill_dfs(mut image: Vec<Vec<i32>>, sr: i32, sc: i32, color: i32) -> Vec<Vec<i32>> {
        let original_color = image[sr as usize][sc as usize];
        if original_color == color {
            return image;
        }
        let rows = image.len();
        let cols = image[0].len();
        const DIRECTIONS: [(i32, i32); 4] = [(1, 0), (-1, 0), (0, 1), (0, -1)];

        image[sr as usize][sc as usize] = color;
        let mut stack: Vec<(usize, usize)> = vec![(sr as usize, sc as usize)];

        while let Some((cr, cc)) = stack.pop() {
            for (dr, dc) in DIRECTIONS {
                let nr = cr as i32 + dr;
                let nc = cc as i32 + dc;
                if nr < 0 || nc < 0 {
                    continue;
                }
                let (nr, nc) = (nr as usize, nc as usize);
                if nr >= rows || nc >= cols || image[nr][nc] != original_color {
                    continue;
                }
                image[nr][nc] = color;
                stack.push((nr, nc));
            }
        }
        image
    }

    pub fn flood_fill_bfs(mut image: Vec<Vec<i32>>, sr: i32, sc: i32, color: i32) -> Vec<Vec<i32>> {
        let original_color = image[sr as usize][sc as usize];
        if original_color == color {
            return image;
        }
        let rows = image.len();
        let cols = image[0].len();
        const DIRECTIONS: [(i32, i32); 4] = [(1, 0), (-1, 0), (0, 1), (0, -1)];

        let mut queue = VecDeque::new();
        image[sr as usize][sc as usize] = color;
        queue.push_back((sr, sc));

        while let Some((cr, cc)) = queue.pop_front() {
            for (dr, dc) in DIRECTIONS {
                let (nr, nc) = (cr + dr, cc + dc);
                if nr < 0 || nc < 0 {
                    continue;
                }
                let (nr, nc) = (nr as usize, nc as usize);
                if nr >= rows || nc >= cols || image[nr][nc] != original_color {
                    continue;
                }
                image[nr][nc] = color;
                queue.push_back((nr as i32, nc as i32));
            }
        }
        image
    }
}
