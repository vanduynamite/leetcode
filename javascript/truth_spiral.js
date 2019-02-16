
const truthSpiral = arr => {
  let i = 0; j = 0;

  while (arr[i][j+1] || arr[i][j-1] || (arr[i+1] && arr[i+1][j]) || (arr[i-1] && arr[i-1][j])) {
    arr[i][j] = false;
    if (arr[i][j+1]) j++;
    else if (arr[i+1] && arr[i+1][j]) i++;
    else if (arr[i][j-1]) j--;
    else if (arr[i-1] && arr[i-1][j]) i--;
  }

  arr[i][j] = false;

  return arr;
};

const arr = [
  [true, true, true, true],
  [true, true, true, true],
  [true, true, true, true],
  [true, true, true, true],
  [true, true, true, true],
  [true, true, true, true],
  [true, true, true, true],
  [true, true, true, true],
];

console.log(truthSpiral(arr));
