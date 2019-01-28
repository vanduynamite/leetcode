
const hanoi = stacks => {

  let stackCalls = 0;

  const move = (from, index, to) => {
    stackCalls++;
    if (index === stacks[from].length - 1) {
      stacks[to].push(stacks[from].pop());
    } else {
      const stonesMoved = stacks[from].length - index - 1;
      move(from, index + 1, 3-from-to);
      stacks[to].push(stacks[from].pop());
      move(3-from-to, stacks[3-from-to].length - stonesMoved, to);
    }

    console.log(stacks);
  };

  move(0, 0, 2);
  console.log(stackCalls);
  return stacks;
};

const s1 = [5,4,3,2,1];
const s2 = [];
const s3 = [];

hanoi([s1, s2, s3]);
