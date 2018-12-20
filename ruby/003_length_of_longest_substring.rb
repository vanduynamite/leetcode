# Given a string, find the length of the longest substring without repeating characters.
#
# Example 1:
#
# Input: "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.
# Example 2:
#
# Input: "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:
#
# Input: "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


def length_of_longest_substring(s)

  result = ''
  longest_result = 0
  hash = {}
  i = 0

  while i < s.length
     letter = s[i]

     if hash[letter]
       result = ''
       i = hash[letter]
       hash = {}
     else
       hash[letter] = i
       result += letter
       longest_result = result.length if result.length > longest_result
     end

     i += 1
  end

  longest_result

end


p length_of_longest_substring('abcabcbb')
p length_of_longest_substring('bbbbb')
p length_of_longest_substring('pwwkew')
p length_of_longest_substring(' ')
p length_of_longest_substring("dvdf")
