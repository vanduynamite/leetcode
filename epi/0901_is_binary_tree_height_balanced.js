
function isTreeBalanced(root, depth=0) {

  let leftDepth = depth;
  let rightDepth = depth;

  if (root.left) leftDepth = isTreeBalanced(root.left, depth + 1);
  if (root.right) rightDepth = isTreeBalanced(root.right, depth + 1);
  console.log('');
  console.log(`Node depth ${depth}, value ${root.value}: leftDepth ${leftDepth}, rightDepth ${rightDepth}, diff: ${Math.abs(leftDepth - rightDepth)}`);

  // console.log(Math.abs(leftDepth - rightDepth) <= 1);
  if (leftDepth === false || rightDepth === false) return false;

  if (Math.abs(leftDepth - rightDepth) <= 1) {
    if (depth === 0) {
      return true;
    } else {
      return Math.max(leftDepth, rightDepth);
    }
  } else {
    return false;
  }

}



class TreeNode {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const p = new TreeNode(28);
// const o = new TreeNode(271, p);
const o = new TreeNode(271);
const n = new TreeNode(257);
const m = new TreeNode(641);
const l = new TreeNode(401, m);
const k = new TreeNode(1, l, n);
// const j = new TreeNode(2, k);
const j = new TreeNode(2);
// const i = new TreeNode(6, j, o);
const i = new TreeNode(6);
const h = new TreeNode(17);
// const g = new TreeNode(3);
// const g = new TreeNode(3, h);
const g = new TreeNode(3);
const f = new TreeNode(561, g);
// const f = new TreeNode(561);
const e = new TreeNode(0);
const d = new TreeNode(28);
const c = new TreeNode(271, d, e);
// const c = new TreeNode(271);
const b = new TreeNode(6, c, f);
const a = new TreeNode(314, b, i);

console.log(isTreeBalanced(a));
