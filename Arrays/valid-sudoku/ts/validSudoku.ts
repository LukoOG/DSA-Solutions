export {};
//boolean array approach
function _isValidSudoku(board: string[][]): boolean {
  let rows: boolean[][] = Array.from({ length: 9 }).map(() => Array(9).fill(false));
  let cols: boolean[][] = Array.from({ length: 9 }).map(() => Array(9).fill(false));
  let boxes: boolean[][] = Array.from({ length: 9 }).map(() => Array(9).fill(false));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let digit = board[i][j];
      if (digit !== ".") {
        const d = Number(digit) - 1;
        let boxIdx = Math.floor(j / 3) + Math.floor(i / 3) * 3;
        if (rows[i][d] || cols[j][d] || boxes[boxIdx][d]) {
          return false;
        }
        rows[i][d] = cols[j][d] = boxes[boxIdx][d] = true;
      }
    }
  }
  return true;
}

//bitmask approach
function isValidSudoku(board: string[][]): boolean {
  let rows = new Uint16Array(9);
  let cols = new Uint16Array(9);
  let boxes = new Uint16Array(9);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let digit = board[i][j];
      if (digit !== ".") {
        const d = Number(digit) - 1;
        const mask = 1 << d;
        let boxIdx = Math.floor(j / 3) + Math.floor(i / 3) * 3;
        if ((rows[i]&mask )!= 0 || (cols[j]&mask) != 0 || (boxes[boxIdx]&mask) != 0) {
          return false;
        }
        rows[i] |= mask;
        cols[j] |= mask;
        boxes[boxIdx] |= mask;
      }
    }
  }
  return true;
}

const testCases: string[][][] = [
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ],
  [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ],
];

for (const board of testCases) {
  console.log(`Output:      ${isValidSudoku(board)}`);
  console.log("-".repeat(35));
}
