
const reverseNumber = num => {
  if (num < 0) return -reverseNumber(-num);

  let result = 0;

  while (num > 0) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  return result;
};

console.log(reverseNumber(-314));
console.log(reverseNumber(42));
console.log(reverseNumber(0));
