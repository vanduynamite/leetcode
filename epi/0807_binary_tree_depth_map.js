class TreeNode {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const solution = root => {
  const result = [];
  const nodeQueue = [[root, 0]];

  while (nodeQueue.length > 0) {
    const entry = nodeQueue.shift();
    const node = entry[0];
    const depth = entry[1];

    if (result[depth] === undefined) result[depth] = [];
    result[depth].push(node.value);

    if (node.left) nodeQueue.push([node.left, depth + 1]);
    if (node.right) nodeQueue.push([node.right, depth + 1]);
  }

  return result;
};

const p = new TreeNode(28);
const o = new TreeNode(271, null, p);
const n = new TreeNode(257);
const m = new TreeNode(641);
const l = new TreeNode(401, null, m);
const k = new TreeNode(1, l, n);
const j = new TreeNode(2, null, k);
const i = new TreeNode(6, j, o);
const h = new TreeNode(17);
const g = new TreeNode(3, h);
const f = new TreeNode(561, g);
const e = new TreeNode(0);
const d = new TreeNode(28);
const c = new TreeNode(271, d, e);
const b = new TreeNode(6, c, f);
const a = new TreeNode(314, b, i);

console.log(solution(a));
