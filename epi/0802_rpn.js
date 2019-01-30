
const rpnEvaluator = str => {
  const arr = str.split(',');
  const stack = [];
  arr.forEach(el => {
    if (!isNaN(parseInt(el))) {
      stack.push(parseInt(el));
    } else {
      const val1 = stack.pop();
      const val2 = stack.pop();
      if (el === '+') stack.push( val1 + val2);
      if (el === 'x') stack.push( val1 * val2);
      if (el === '-') stack.push( val1 - val2);
      if (el === '/') stack.push( val1 / val2);
    }
  });
  return stack.pop();
};


console.log(rpnEvaluator('3,4,+,2,x,1,+'));
