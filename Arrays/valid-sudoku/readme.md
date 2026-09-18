# Valid Sudoku

**Platform:** LeetCode — [Problem 36](https://leetcode.com/problems/valid-sudoku/)  
**Difficulty:** Medium  
**Topic:** Arrays, Hash Set, Matrix, Bit Manipulation

---

## Problem

Determine if a 9x9 Sudoku board is valid. A board is valid if each row, each column, and each of the nine 3x3 sub-boxes contains no duplicate digits. Empty cells are represented by `'.'`.

**Example:**

Input: valid 9x9 board
Output: true


---

## Approach — Two Iterations

### Solution 1 — Boolean Arrays (TypeScript & Python)
Maintain three 9x9 boolean arrays tracking seen digits for each row, column, and 3x3 box. For every non-empty cell, compute the digit index `d = digit - 1` and the box index `(j / 3) + (i / 3) * 3`. If the digit has already been marked in any of the three structures, the board is invalid. Otherwise mark it in all three and continue.

### Solution 2 — Bitmask (Typescript, Go & Rust)
The same logic but each row, column, and box is represented as a single integer used as a bitmask. A digit `val` maps to bit position `1 << val`. Checking for a duplicate becomes a bitwise AND — if `mask & existing != 0` the bit is already set. Recording a digit is a bitwise OR — `existing |= mask`. Nine integers replace nine arrays of nine booleans, making this more memory-efficient and cache-friendly.

The box index formula `(j / 3) + (i / 3) * 3` is the same in both — it maps any cell to one of the nine 3x3 boxes by grouping rows and columns into thirds.

### Pseudocode
```
// Solution 1 — Boolean Arrays
function isValidSudoku(board):
    rows = 9x9 bool array, all false
    cols = 9x9 bool array, all false
    boxes = 9x9 bool array, all false

    for i from 0 to 8:
        for j from 0 to 8:
            if board[i][j] == '.': continue

            d       = board[i][j] - 1
            box_idx = (j / 3) + (i / 3) * 3

            if rows[i][d] or cols[j][d] or boxes[box_idx][d]:
                return false

            rows[i][d] = cols[j][d] = boxes[box_idx][d] = true

    return true
```
```
// Solution 2 — Bitmask
function isValidSudoku(board):
    rows = int array of size 9, all 0
    cols = int array of size 9, all 0
    boxes = int array of size 9, all 0

    for i from 0 to 8:
        for j from 0 to 8:
            if board[i][j] == '.': continue

            mask    = 1 << (board[i][j] - '0')
            box_idx = (j / 3) + (i / 3) * 3

            if (rows[i] & mask) != 0 or (cols[j] & mask) != 0 or (boxes[box_idx] & mask) != 0:
                return false

            rows[i]        |= mask
            cols[j]        |= mask
            boxes[box_idx] |= mask

    return true
```
- **Time:** O(1) — board is always 9x9
- **Space:** O(1) — fixed size tracking structures

---

## Implementations

| Language | File |
|----------|------|
| Python | `python/valid_sudoku.py` |
| Rust | `rust/src/main.rs` |
| TypeScript | `TS/validSudoku.ts` |
| Go | `go/valid_sudoku.go` |

---

## Running Locally

**Python**
```bash
python3 valid_sudoku.py
```

**Rust**
```bash
cargo run
```

**TypeScript**
```bash
tsx validSudoku.ts
```

**Go**
```bash
go run valid_sudoku.go
```