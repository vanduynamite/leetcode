

const flipGridColors = (grid, start) => {
  const q = [start];
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const otherColor = (grid[start[0]][start[1]] + 1) % 2;

  let pos, x1, y1, x2, y2;
  while (q.length > 0) {
    pos = q.shift();
    x1 = pos[0];
    y1 = pos[1];
    dirs.forEach(dir => {
      x2 = x1 + dir[0];
      y2 = y1 + dir[1];
      if (grid[x2] !== undefined && grid[x2][y2] !== undefined &&
          grid[x2][y2] !== otherColor) q.push([x2, y2]);
    });

    grid[x1][y1] = otherColor;
  }

  return grid;
};

const grid = [
  [1,0,1,0,0,1,0,1,1],
  [0,0,1,0,0,1,0,0,1],
  [1,1,1,1,1,1,0,1,1],
  [0,1,0,0,0,0,0,0,1],
  [0,1,0,1,0,0,0,0,0],
  [0,1,0,1,1,0,1,1,0],
  [0,1,0,0,0,1,1,1,0],
  [0,0,0,1,0,1,1,1,1],
  [0,1,0,0,0,0,1,0,0],
];

console.log(flipGridColors(grid, [2,1]));
