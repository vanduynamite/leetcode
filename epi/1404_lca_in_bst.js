
const solution = (root, n1, n2) => {
  if (n1.val > n2.val) [n1, n2] = [n2, n1];
  if (n2.val < root.val) return solution(root.left, n1, n2);
  if (n1.val > root.val) return solution(root.right, n1, n2);
  return root;
};
