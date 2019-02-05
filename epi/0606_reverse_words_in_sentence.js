

const reverseWordOrder = str => {
  return str.split(' ').reverse().join(' '); // O(3n)
  // let newStr = str.reverse()
  // some stuff
  // return newStr;
};


const str = 'Bob likes Alice';

console.log(reverseWordOrder(str)); // 'Alice likes Bob'
