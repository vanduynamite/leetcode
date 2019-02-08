
const smallestInCyclicallySortedArray = arr => {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (right - left > 0) {
    mid = Math.floor((right - left) / 2 + left);
    if (arr[mid] > arr[mid + 1]) return arr[mid + 1];
    if (arr[mid] < arr[right]) right = mid;
    else left = mid + 1;
  }
  return arr[left];
};

let arr = [2,3,4,5,6,7,8,1];
console.log(smallestInCyclicallySortedArray(arr));
