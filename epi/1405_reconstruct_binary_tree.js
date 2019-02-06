class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const reconstructBST = preorder => {
  const helper = (left, right) => {
    if (right - left === 0) return null;
    let i = left + 1;
    while (preorder[i] < preorder[left]) i++;
    return new Node(preorder[left], helper(left + 1, i), helper(i, right));
  };

  return helper(0, preorder.length);

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
console.log(reconstructBST(preorder));
