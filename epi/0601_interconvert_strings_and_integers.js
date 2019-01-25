// integer to string conversion
//

const strToInt = (str) => {

  '0'.charCodeAt(0);

  // incomplete
};

const intToStr = (int) => {
  let result = [];
  while (int > 0) {
    result = [int%10].concat(result);
    int = Math.floor(int/10);
  }
  return result.join('');
};


console.log(intToStr(314)); // '314'
// console.log(strToInt('314')); // 314
