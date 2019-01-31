
const traverseGrid = (n, m) => {
  const cache = {};

  const exploreTraversal = (n, m) => {
    if (n === 1 || m === 1) return 1;
    if (cache[[n,m]]) {
      return cache[[n,m]];
    } else {
      const result = exploreTraversal(n, m-1) + exploreTraversal(n-1, m);
      cache[[n,m]] = result;
      cache[[m,n]] = result;
      return result;
    }
  };
  return exploreTraversal(n, m);
};

// console.log(traverseGrid(1,1));
// console.log(traverseGrid(2,1));
// console.log(traverseGrid(2,2));
// console.log(traverseGrid(3,3));
console.log(traverseGrid(50,50));
