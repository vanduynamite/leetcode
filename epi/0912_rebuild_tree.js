class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const rebuildTree = (inorder, preorder) => {

  const lookup = {};
  for (let i = 0; i < inorder.length; i++) lookup[inorder[i]] = i;

  const rebuildTreeHelper = (inLeft, inRight, preLeft, preRight) => {
    if (inRight - inLeft === 1) return new Node(inorder[inLeft]);
    if (inRight - inLeft <= 0) return null;

    const root = new Node(preorder[preLeft]);
    const i = lookup[root.value];
    const newPreLeft = preLeft + 1 + i - inLeft;

    root.left = rebuildTreeHelper(inLeft, i, preLeft + 1, newPreLeft);
    root.right = rebuildTreeHelper(i + 1, inRight, newPreLeft, preRight);

    return root;
  };

  return rebuildTreeHelper(0, inorder.length, 0, preorder.length);
};

const result = rebuildTree('FBAEHCDIG', 'HBFEACDGI');
console.log(result);
