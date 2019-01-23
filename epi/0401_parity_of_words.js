const solution1 = (words) => {

  num_ones = 0;

  words.forEach(word => {
    while (word > 0) {
      num_ones ^= word & 1;
      word = word >> 1;
    }
  });
  return num_ones % 2;

};

const solution2 = (words) => {

  num_ones = 0;

  words.forEach(word => {
    while (word > 0) {
      num_ones ^= 1;
      // this operation, X & (X-1) drop the lowest 1 in X
      word = word & (word - 1);
    }
  });
  return num_ones % 2;

};

const solution3 = (words) => {

  lookup = {
    0: 0, //0000
    1: 1, //0001
    2: 1, //0010
    3: 0, //0011
    4: 1, //0100
    5: 0, //0101
    6: 0, //0110
    7: 1, //0111
    8: 1, //1000
    9: 0, //1001
    10: 0, //1010
    11: 1, //1011
    12: 0, //1100
    13: 1, //1101
    14: 1, //1110
    15: 0, //1111
  };

  result = 0;

  words.forEach(word => {
    for (i = 0; i < 16; i++) {
      fourBit = word >> (i*4);
      console.log(fourBit);
      fourBit &= 15;
      console.log(fourBit);
      result ^= lookup[fourBit];
    }
  });

  return result;

};

console.log(solution3([72]));
