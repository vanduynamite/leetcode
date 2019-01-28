const solution = (arr) => {

  arr[arr.length - 1]++;
  let i = arr.length - 1;

  while (i > 0 && arr[i] >= 10) {
    arr[i] %= 10;
    arr[i-1]++;
    i--;
  }

  if (arr[0] === 10) {
    arr[0] = 0;
    arr.unshift(1);
  }

  return arr;

};


console.log(solution([9,9]));
