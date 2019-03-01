const change = (amount, coins) => {
  const results = [new Array(amount+1).fill(0)];
  results[0][0] = 1;

  for (let i = 0; i < coins.length; i++) {
    const thisRow = [];

    for (let j = 0; j <= amount; j++) {
      thisRow[j] = 0;

      for (let k = 0; k <= j / coins[i]; k++) {
        thisRow[j] += results[results.length - 1][j - k * coins[i]];
      }
    }

    results.push(thisRow);
  }

  return results[results.length - 1][amount];
};


// const changePaths = (total, arr) => {
//   const results = [];
//   if (total === 0) return [results];
//   if (total !== 0 && arr.length === 0) return results;
//
//   const num = arr[0];
//   const accumulator = [];
//
//   for (let i = 0; i <= Math.floor(total/num); i++) {
//     const subResults = change(total - i * num, arr.slice(1));
//     subResults.forEach(r => results.push(accumulator.concat(r)));
//     accumulator.push(num);
//   }
//
//   return results;
// };

console.log(change(5, [1,2,5]));
