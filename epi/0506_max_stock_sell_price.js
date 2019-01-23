const f = (arr) => {
  let min_value = arr[0];
  let max_profit = arr[1]-arr[0];

  arr.slice(1).forEach(el => {
    if (el < min_value) min_value = el;
    if (el - min_value > max_profit) max_profit = el - min_value;
  });

  return max_profit;
};

console.log(f([20,18,27,19,23]));
console.log(f([20,18,17,16,15]));
