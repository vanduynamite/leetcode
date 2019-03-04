class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


const isValidBST = (root, min=null, max=null) => {
  if (root === null) return true;

  if (root.left) {
    if (root.left.val > root.val) return false;
    else if (min !== null && root.left.val < min) return false;
  }

  if (root.right) {
    if (root.right.val < root.val) return false;
    else if (max !== null && root.right.val > max) return false;
  }

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

// const g = new Node(70);
// const f = new Node(50);
// const c = new Node(60, f, g);
// const d = new Node(10);
// const e = new Node(30);
// const b = new Node(20, d, e);
// const a = new Node(40, b, c);

const a = new Node(1, new Node(1));

console.log(isValidBST(a));
