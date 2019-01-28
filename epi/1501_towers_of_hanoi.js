
const hanoi = stacks => {
  const move = (from, index, to) => {
    if (index === stacks[from].length - 1) {
      stacks[to].push(stacks[from].pop());
    } else {
      const stonesMoved = stacks[from].length - index - 1;
      move(from, index + 1, 3-from-to);
      stacks[to].push(stacks[from].pop());
      move(3-from-to, stacks[3-from-to].length - stonesMoved, to);
    }
  };

  move(0, 0, 2);
  return stacks;
};

const s1 = [7,6,5,4,3,2,1];
const s2 = [];
const s3 = [];

hanoi([s1, s2, s3]);
