class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// this one is O(n^2)
// const reconstructBST = preorder => {
//
//   const helper = (left, right) => {
//     if (right - left === 0) return null;
//     let i = left + 1;
//     while (preorder[i] < preorder[left]) i++;
//     return new Node(preorder[left], helper(left + 1, i), helper(i, right));
//   };
//
//   return helper(0, preorder.length);
//
// };


// this one is O(n)!
const reconstructBST = preorder => {
  let i = 0;

  const helper = (left, max=null) => {
    if (!preorder[left]) return null;
    if (max && preorder[left] > max) return null;

    i++;

    const root = new Node(preorder[left]);
    root.left = helper(left+1, root.value);
    root.right = helper(i, max);

    return root;
  };

  return helper(0);
};



//         40
//       /   \
//      20     60
//    /  \      \
//   10   25     70
//       /       / \
//      22     65   80

// const inorder = [10, 20, 22, 25, 40, 60, 65, 70, 80];
const preorder = [40, 20, 10, 25, 22, 60, 70, 65, 80];
const result = reconstructBST(preorder);
console.log(result);
console.log(result.left);
console.log(result.right);
