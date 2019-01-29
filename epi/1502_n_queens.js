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




const solution = n => {
  const grid = initializeGrid(n);

  const validSpace = (r, c) => {
    for (let i = 0; i < n; i++) {
      if (grid[i][c] === 'Q') return false; // check all rows
      if (grid[r][c] === 'Q') return false; // check all columns
      if (c+i < n && r+i < n && grid[r+i][c+i] === 'Q') return false; // check SE diagonals
      if (c-i >= 0 && r+i < n && grid[r+i][c-i] === 'Q') return false; // check SW diagonals
      if (c+i < n && r-i >= 0 && grid[r-i][c+i] === 'Q') return false; // check NE diagonals
      if (c-i >= 0 && r-i >= 0 && grid[r-i][c-i] === 'Q') return false; // check NW diagonals
    }
    return true;
  };

  const checkNextRow = r => {
    if (r === n) return [grid.map(r => r.join(''))];

    const results = [];
    const maxRow = r === 0 ? n / 2 : n;

    for (let c = 0; c < maxRow; c++) {
      if (validSpace(r, c)) {
        grid[r][c] = 'Q';
        checkNextRow(r + 1).forEach(g => results.push(g));
        grid[r][c] = '.';
      }
    }

    return results;
  };
  return checkNextRow(0, n);
};


console.log(solution(8));
