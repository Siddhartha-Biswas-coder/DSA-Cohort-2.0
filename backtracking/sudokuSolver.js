const BOARD_SIZE = 9;
const BOX_SIZE = 3;
const EMPTY_CELL = ".";

const MIN_DIGIT = 1;
const MAX_DIGIT = 9;

var solve = function (board, row, col) {
  // All rows have been processed
  if (row === BOARD_SIZE) {
    return true;
  }

  let nextRow;
  let nextCol;

  //Move to the next Cell
  if (col === BOARD_SIZE - 1) {
    nextRow = row + 1;
    nextCol = 0;
  } else {
    nextRow = row;
    nextCol = col + 1;
  }

  // Skip cells that are already filled
  if (board[row][col] !== EMPTY_CELL) {
    return solve(board, nextRow, nextCol);
  }

  // Try every possible digit
  for (let digit = MIN_DIGIT; digit <= MAX_DIGIT; digit++) {
    const value = String(digit);

    if (isValid(board, row, col, value)) {
      //choose
      board[row][col] = value;

      //Explore
      if (solve(board, nextRow, nextCol)) {
        return true;
      }

      //BackTrack
      board[row][col] = EMPTY_CELL;
    }
  }

  //No valid digit was found
  return false;
};

var isValid = function (board, row, col, value) {
  // Check row and column
  for (let index = 0; index < BOARD_SIZE; index++) {
    if (board[row][index] === value) {
      return false;
    }

    if (board[index][col] === value) {
      return false;
    }
  }

  // Find the top-left corner of the 3x3 box
  const boxStartRow = Math.floor(row / BOX_SIZE) * BOX_SIZE;
  const boxStartCol = Math.floor(col / BOX_SIZE) * BOX_SIZE;

  // Check the 3x3 box
  for (let rowOffset = 0; rowOffset < BOX_SIZE; rowOffset++) {
    for (let colOffset = 0; colOffset < BOX_SIZE; colOffset++) {
      const currentRow = boxStartRow + rowOffset;
      const currentCol = boxStartCol + colOffset;

      if (board[currentRow][currentCol] === value) {
        return false;
      }
    }
  }

  return true;
};

var solveSudoku = function (board) {
  solve(board, 0, 0);
};
