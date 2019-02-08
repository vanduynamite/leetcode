
const integerSqrt = num => {
  let result = 0;
  let increment;

  while (Math.pow(num/(result+1),2) >= num) {
    increment = 1;
    while (Math.pow(num/(result+increment*2),2) > num) {
      increment *= 2;
      console.log(result + increment);
    }
    result += increment;
  }

  return result;
};

// console.log(integerSqrt(4));
// console.log(integerSqrt(9));
// console.log(integerSqrt(25));
// console.log(integerSqrt(36));
// console.log(integerSqrt(40));
// console.log(integerSqrt(49));
// console.log(integerSqrt(50));
// console.log(integerSqrt(624));
// console.log(integerSqrt(10000000000000000000000000000000));
// console.log(integerSqrt(626));
