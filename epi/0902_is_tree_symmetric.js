class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// function isSymmetric(root) {
//   // actually not a recursive problem..!
//   const leftStack = [root.left];
//   const rightStack = [root.right];
//   let leftNode, rightNode;
//
//   while (leftStack.length > 0) {
//     leftNode = leftStack.pop();
//     rightNode = rightStack.pop();
//     if (leftNode.val !== rightNode.val) return false;
//     if (leftNode.left && !rightNode.right) return false;
//     if (leftNode.right && !rightNode.left) return false;
//     if (rightNode.left && !leftNode.right) return false;
//     if (rightNode.right && !leftNode.left) return false;
//
//     if (leftNode.left && rightNode.right) {
//       leftStack.push(leftNode.left);
//       rightStack.push(rightNode.right);
//     }
//
//     if (leftNode.right && rightNode.left) {
//       leftStack.push(leftNode.right);
//       rightStack.push(rightNode.left);
//     }
//   }
//
//   return rightStack.length === 0;
// }

function isSymmetric(root) {
  function helper(left, right) {
    if (!left && !right) return true;
    if (left && right) {
      if (left.val !== right.val) return false;
      return helper(left.left, right.right) && helper(left.right, right.left);
    }
    return false;
  }
  return helper(root.left, root.right);
}


const g = new Node(10);
const f = new Node(30);
const c = new Node(20, f, g);
// const d = new Node(10);
const d = null;
const e = new Node(30);
const b = new Node(20, d, e);
const a = new Node(40, b, c);

console.log(isSymmetric(a));
