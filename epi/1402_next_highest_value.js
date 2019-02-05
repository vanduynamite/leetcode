class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const nextHighestValue = (root, val) => {
  let best = null;
  let node = root;

  while (node) {
    if (node.val > val) {
      if ((best && node.val < best.val) || !best) best = node;
    }

    if (node.val > val) node = node.left;
    else node = node.right;
  }

  return best;
};


const g = new Node(70);
const f = new Node(50);
const c = new Node(60, f, g);
const h = new Node(5);
const k = new Node(16);
const j = new Node(17, k);
const i = new Node(15, null, j);
const d = new Node(10, h, i);
const e = new Node(30);
const b = new Node(20, d, e);
const a = new Node(40, b, c);

console.log(nextHighestValue(a, 10));
