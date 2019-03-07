const isValidBST = (root, min=null, max=null) => {
  if (root === null) return true;

  if (root.left) {
    if (root.left.val >= root.val) return false;
    else if (min !== null && root.left.val <= min) return false;
  }

  if (root.right) {
    if (root.right.val <= root.val) return false;
    else if (max !== null && root.right.val >= max) return false;
  }

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
