
const isSudokuValid = grid => {

  const checkCount = (counter, value) => {
    if (value === 0) return true;
    if (counter[value] === 1) return false;
    return true;
  };

  const isRowValid = row => {
    const counter = {};
    for (let i = 0; i < 9; i++) {
      if (!checkCount(counter, grid[row][i])) return false;
      counter[grid[row][i]] = 1;
    }
    return true;
  };

  const isColValid = col => {
    const counter = {};
    for (let i = 0; i < 9; i++) {
      if (!checkCount(counter, grid[i][col])) return false;
      counter[grid[i][col]] = 1;
    }
    return true;
  };

  const isBlockValid = block => {
    const counter = {};
    for (let i = 0; i < 9; i++) {
      const row = 3 * Math.floor(block / 3) + Math.floor(i / 3);
      const col = 3 * (block % 3) + i % 3;
      const val = grid[row][col];
      if (!checkCount(counter, val)) return false;
      counter[val] = 1;
    }
    return true;
  };

  for (let i = 0; i < 9; i++) {
    if (!isRowValid(i)) return false;
    if (!isColValid(i)) return false;
    if (!isBlockValid(i)) return false;
  }
  return true;
};

const sudoku = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9],
];

console.log(isSudokuValid(sudoku));
