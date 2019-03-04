const searchBST = (root, val) => {
  if (root === null || root.val === val) return root;
  else if (val < root.val) return searchBST(root.left, val);
  else if (val > root.val) return searchBST(root.right, val);
};
