

var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let best = 0;
  let chars = new Set();

  for (var i = 0; i < s.length; i++) {
    if (chars.has(s[i])) {
      while (chars.has(s[i])) {
        chars.delete(s[left]);
        left++;
      }
    } else if (i - left + 1 > best) {
      best = i - left + 1;
    }
    chars.add(s[i]);

  }

  return best;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('tmmzuxt'));
