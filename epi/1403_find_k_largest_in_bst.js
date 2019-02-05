class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// const findKLargest = (root, k) => {
//   let node;
//   const stack = [root];
//   const results = [];
//
//   while (results.length < k) {
//     node = stack[stack.length-1];
//     if (node.right) {
//       stack.push(node.right);
//       node.right = null;
//     } else {
//       stack.pop();
//       results.push(node.val);
//       if (node.left) stack.push(node.left);
//     }
//   }
//
//   return results;
// };

const findKLargest = (root, k) => {
  const result = [];

  const helper = (node) => {
    if (node.right) helper(node.right);
    if (result.length === k) return;
    result.push(node.val);
    if (result.length === k) return;
    if (node.left) helper(node.left);
  };

  helper(root);

  return result;
};


const g = new Node(70);
const l = new Node(55);
const f = new Node(50, null, l);
const c = new Node(60, f, g);
const h = new Node(5);
const k = new Node(16);
const j = new Node(17, k);
const i = new Node(15, null, j);
const d = new Node(10, h, i);
const e = new Node(30);
const b = new Node(20, d, e);
const a = new Node(40, b, c);

console.log(findKLargest(a, 10));
