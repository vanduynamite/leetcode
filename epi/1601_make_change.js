global.count = 0;

const makeChange = (total, arr) => {
  count++;
  const results = [];
  if (total === 0) return [results];
  if (total !== 0 && arr.length === 0) return results;

  const num = arr[0];
  const accumulator = [];

  for (let i = 0; i <= Math.floor(total/num); i++) {
    const subResults = makeChange(total - i * num, arr.slice(1));
    subResults.forEach(r => results.push(accumulator.concat(r)));
    accumulator.push(num);
  }

  return results;
};

console.log(count);
console.log(makeChange(12, [2,3,7]));
console.log(count);
// console.log(makeChange(12, [1,2,3,6,12]));



// num = 2, i = 0, subTotal = 2, arr = [1], accumulator = []
// num = 1, i = 0, subTotal = 2, arr = [], accumulator = []
// subResults = false, accumulator = [1]
// num = 1, i = 1, subTotal = 1, arr = [], accumulator = [1]
// subResults = false, accumulator = [1, 1]
// num = 1, i = 2, subTotal = 0, arr = [], accumulator = [1, 1]
// subResults = [], accumulator = [1, 1]
// results = [[1, 1]]
// accumulator = [1,1,1]
// subResults = [[1, 1]], accumulator = []
// results = [[1, 1]]
// accumulator = [2]
// num = 2, i = 1, subTotal = 0, arr = [1], accumulator = [2]
// num = 1...base case reached, results = [[]]
// subResults = [[]], accumulator = [2]
// results = [[1,1], [2]]
