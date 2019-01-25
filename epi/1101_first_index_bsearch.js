
const firstIndexBsearch = (arr, target) => {

  let l = 0;
  let r = arr.length - 1;
  let m;

  while (l < r) {
    m = Math.floor((r-l)/2 + l);
    if (arr[m] > target) {
      r = m - 1;
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m; // return m // regular bsearch
    }
  }

  if (arr[l] === target) return l;

  return null;
};

const arr = [-14, -10, 2, 108, 108, 243, 258, 258, 258, 401];
console.log(firstIndexBsearch(arr, 108)); // 3, broken = 4
console.log(firstIndexBsearch(arr, 258)); // 6, broken = 7
console.log(firstIndexBsearch([0, 0, 0, 0, 0, 0,1], 1));
console.log(firstIndexBsearch([1], 1));
console.log(firstIndexBsearch([], 1));
