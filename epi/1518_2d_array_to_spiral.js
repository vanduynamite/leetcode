
const spiral = arr => {
  let l = t = 0;
  let r = b = arr.length - 1;

  const result = [];

  while (l <= r) {
    for(let i = l; i < r; i++) result.push(arr[t][i]);
    for(let i = t; i < b; i++) result.push(arr[i][r]);
    for(let i = r; i > l; i--) result.push(arr[b][i]);
    for(let i = b; i > t; i--) result.push(arr[i][l]);

    l++;
    r--;
    t++;
    b--;
  }

  return result;
};

const arr = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(spiral(arr));

const arr2 = [];
const n = 4;
for (let i = 0; i < n**2; i++) {
  const row = Math.floor(i/n);
  const col = i%n;
  if (col === 0) arr2[row] = [];
  arr2[row][col] = i+1;
}
console.log(arr2);
console.log(spiral(arr2));
