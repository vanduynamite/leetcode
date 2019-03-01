const makeChange = (total, arr) => {
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

// console.log(makeChange(12, [2,3,7]));
// console.log(makeChange(12, [1,2,3,6,12]));

// DP table methodology
// const makeChange = (total, arr) => {
//     const results = [new Array(total+1).fill(0)];
//     results[0][0] = 1;
//
//     for (let i = 0; i < arr.length; i++) {
//         const thisRow = [];
//
//         for (let j = 0; j <= total; j++) {
//             thisRow[j] = 0;
//
//             for (let k = 0; k <= j / arr[i]; k++) {
//                 thisRow[j] += results[results.length - 1][j - k * arr[i]];
//             }
//         }
//
//         results.push(thisRow);
//     }
//
//     return results[results.length - 1][total];
// };
//
// console.log(makeChange2(12, [2,3,7]));
