class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


const isBinaryTreeBST = (root, min=null, max=null) => {

  if (root === null) return true;

  if (root.left) {
    if (root.left.value > root.value) {
      return false;
    } else if (min !== null && root.left.value < min) {
      return false;
    }
  }

  if (root.right) {
    if (root.right.value < root.value) {
      return false;
    } else if (max !== null && root.right.value > max) {
      return false;
    }
  }

  return isBinaryTreeBST(root.left, min, root.value) && isBinaryTreeBST(root.right, root.value, max);

};

const g = new Node(70);
const f = new Node(50);
const c = new Node(60, f, g);
const d = new Node(10);
const e = new Node(30);
const b = new Node(20, d, e);
const a = new Node(40, b, c);

console.log(isBinaryTreeBST(a));
