
function kthLargest(arr, k) {
  let recurse = 0;
  let on = 0;

  function helper(arr, k) {
    recurse++;
    const pivot = arr[0];
    const smaller = [];
    const larger = [];
    on++;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) smaller.push(arr[i]);
      if (arr[i] > pivot) larger.push(arr[i]);
    }

    if (larger.length === (k - 1)) return pivot;
    if (larger.length === k) { // find smallest element in larger
      let smallest = larger[0];
      on++;
      larger.forEach(el => {
        if (el < smallest) smallest = el;
      });
      return smallest;
    }
    if (larger.length === (k - 2)) { // find largest element in smaller
      let largest = smaller[0];
      on++;
      smaller.forEach(el => {
        if (el > largest) largest = el;
      });
      return largest;
    }
    if (larger.length > (k - 1)) return helper(larger, k);
    if (larger.length < (k - 1)) return helper(smaller, k - larger.length - 1);

  }

  const result = helper(arr, k);
  console.log(`Recursive steps: ${recurse}`);
  console.log(`O(n): ${on}`);
  return result;
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
let arr = [];
for (let i = 1; i < 1000000; i++) arr.push(i);
arr = shuffle(arr);

console.log(kthLargest(arr, 500000));
//
//
// L = [8], S = [5,6,4,2,1,3]
//
// k = 1: 8, find the largest in L
// k = 2: 7, it's the pivot!
// k = 3: 6, largest element in smaller
// k = 4: 5, look at smaller with K = 2
//   k = 2, L = [6], S = [4,2,1,3], it's the pivot
// k = 5:
