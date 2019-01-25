
// clearly this can be done in O(n+m) using two pointers to follow each one
// increment each pointer until it's equal or greater than the other pointer

// what about O(nlogm)? n is shorter array, m is longer array
// for each n value, search to see if it's in m. add if so
// takes O(1) space.
// could be a bit clever and find the least and most indexes from longer array
// to make it O(nlogn + 2logm), 2logm to find the best start and end of m

const solution = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  const results = [];

  while (arr1[p1] && arr2[p2]) {
    if (arr1[p1] > arr2[p2]) {
      p2++;
    } else if (arr2[p2] > arr1[p1]) {
      p1++;
    } else { // they are equal!
      if (results[results.length-1] !== arr1[p1]) results.push(arr1[p1]);
      p1++;
      p2++;
    }
  }

  return results;
};


const arr1 = [2,3,3,5,5,6,7,7,8,12];
const arr2 = [5,5,6,8,8,9,10,10];
console.log(solution(arr1, arr2)); // [5,6,8]
