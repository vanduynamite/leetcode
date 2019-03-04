function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

const buildTreeSlow = (inorder, postorder) => {
  // send indices instead of slices to keep time complexity down
  const rebuildTreeHelper = (inLeft, inRight, postLeft, postRight) => {
    if (inRight - inLeft === 1) return new TreeNode(inorder[inLeft]);
    if (inRight - inLeft <= 0) return null;

    const root = new TreeNode(postorder[postRight-1]);
    const i = inorder.indexOf(root.val); // this line is causing another O(n) operations per cycle
    const newPostRight = postLeft + (i - inLeft);

    root.left = rebuildTreeHelper(inLeft, i, postLeft, newPostRight);
    root.right = rebuildTreeHelper(i + 1, inRight, newPostRight, postRight - 1);

    return root;
  };

  return rebuildTreeHelper(0, inorder.length, 0, postorder.length);
};

console.log(buildTreeSlow([9,3,15,20,7], [9,  15, 7,  20, 3]));
                                   // 0   1   2   3   4
