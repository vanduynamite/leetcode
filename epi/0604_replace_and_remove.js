
const solution = arr => {
  console.log(arr);
  let i = 0;
  let k = -1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 'b') {
      arr[i] = arr[j];
      i++;
      k++;
    }
    if (arr[j] === 'a') {
      k++;
    }

  }

  for (let j = i - 1; j >= 0; j--) {
    if (arr[j] === 'a') {
      arr[k] = 'd';
      arr[k-1] = 'd';
      k -= 2;
    } else {
      arr[k] = arr[j];
      k--;
    }
  }

  return arr;
};

console.log(solution('acdbbca'.split('')));
console.log(solution('ca'.split('')));
