
const minSubArrayLen = (target, arr) => {
  let left = 0;
  let sum = 0;
  let best = null;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= target) {
      if (!best || i - left + 1 < best) best = i - left + 1;
      sum -= arr[left];
      left++;
    }
  }

  return best || 0;
};

const arr = [7,1,2,1,6,3,1,2];
console.log(minSubarraySumSize(arr, 9));
