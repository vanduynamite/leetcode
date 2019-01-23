const solution = function(num) {
  count = 0;

  while (num > 0) {
    count += num & 1;
    num = num >> 1;
  }

  return count;
};

console.log(solution(16));
