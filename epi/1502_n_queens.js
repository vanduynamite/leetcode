const initializeGrid = n => {
  const grid = [];

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row[j] = '.';
    }
    grid[i] = row;
  }

  return grid;
};

const validSpace = (r, c, n, grid) => {
  // console.log(grid);
  for (let i = 0; i < n; i++) {
    if (grid[i][c] === 'Q') return false;
    if (grid[r][c] === 'Q') return false;
    if (grid[(r+i)%n][(c+i)%n] === 'Q') return false;
    if (grid[(r+i)%n][(c-i+n)%n] === 'Q') return false;
  }
  return true;
};

const findValidSpaceInRow = (r, n, grid) => {
  if (r === n) {
    console.log(grid);
    return grid;
  }

  for (let c = 0; c < n; c++) {
    if (validSpace(r, c, n, grid)) {
      grid[r][c] = 'Q';
      validGrid = findValidSpaceInRow(r + 1, n, grid);
      if (!validGrid) {
        return false;
      }
    }
  }

  return false;
};

const solution = n => {
  const grid = initializeGrid(n);
  const results = [];

  findValidSpaceInRow(0, n, grid);

  return results;
};


console.log(solution(4));
