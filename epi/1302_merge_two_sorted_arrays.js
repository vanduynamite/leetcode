
function mergeSortedArrays(arr1, arr2) {
  let p1 = arr1.length - 1;
  let p2 = arr2.length - 1;
  while (p2 >= 0) {
    if (arr1[p1] && arr1[p1] > arr2[p2]) {
      arr1[p1+p2+1] = arr1[p1];
      p1--;
    } else {
      arr1[p1+p2+1] = arr2[p2];
      p2--;
    }
  }
  return arr1;
}

console.log(mergeSortedArrays([5,13,17], [3,7,11,19]));
