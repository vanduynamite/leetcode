// Example 1:
//
// Input: ["2", "1", "+", "3", "*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:
//
// Input: ["4", "13", "5", "/", "+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:
//
// Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// Output: 22

const evalRPN = arr => {
  const stack = [];

  arr.forEach(el => {
    if (!isNaN(parseInt(el))) {
      stack.push(parseInt(el));
    } else {
      const val1 = stack.pop();
      const val2 = stack.pop();
      if (el === '+') stack.push(val2 + val1);
      if (el === '*') stack.push(val2 * val1);
      if (el === '-') stack.push(val2 - val1);
      if (el === '/') stack.push(val2 / val1 - (val2 / val1) % 1);
    }
  });
  return stack.pop();
};


console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22
