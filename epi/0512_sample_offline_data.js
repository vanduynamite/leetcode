
const solution = (arr, size) => {

  for (let i = 0; i < size; i++) {
    let numPotentials = arr.length - i;
    let candidateIndex = Math.floor(Math.random() * numPotentials) + i;
    let left = arr.slice(0, candidateIndex);
    let right = arr.slice(candidateIndex + 1);
    let candidate = arr[candidateIndex];
    arr = [candidate].concat(left).concat(right);
  }
  return arr.slice(0, size);
};

console.log(solution([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 6));
