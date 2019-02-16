
const straight = (arr, k) => {
  const hashCount = {};
  let total = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (!hashCount[arr[i]]) hashCount[arr[i]] = 0;
    hashCount[arr[i]]++;
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(hashCount, total);
    console.log(arr[i]);
    if (total === 0) return true;

    let j = 0, valid = true;
    while (valid && j < k) {
      if (!hashCount[arr[i]+j]) valid = false;
      j++;
    }
    if (valid) {
      for (let j = 0; j < k; j++) hashCount[arr[i]+j]--;
      total -= k;
    }
  }

  return total === 0;

};

const arr = [8,8,9,7,7,7,6,7,10,6];


// [8,8,9,7,7,7,6,7,10,6]


const k = 2;
console.log(straight(arr, k));
