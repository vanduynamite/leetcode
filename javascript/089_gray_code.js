

const grayCode = n => {
  if (n === 0) return [0];

  const results = grayCode(n - 1);
  const len = results.length;
  for (let i = 0; i < len; i++) {
    results.push(results[len-1-i] + Math.pow(2,n-1));
  }

  return results;

};

// const grayCode = n => {
//   const results = [0];
//   for (let i = 0; i < n; i++) {
//     const len = results.length;
//     for (let j = 0; j < len; j++) {
//       results.push(results[len-1-j] + Math.pow(2, i));
//     }
//   }
//   return results;
// };


console.log(grayCode(0));
console.log(grayCode(1));
console.log(grayCode(2));
console.log(grayCode(3));
console.log(grayCode(4));
