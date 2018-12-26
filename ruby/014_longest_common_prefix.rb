# Write a function to find the longest common prefix string amongst
# an array of strings.
#
# If there is no common prefix, return an empty string "".
#
# Example 1:
#
# Input: ["flower","flow","flight"]
# Output: "fl"
# Example 2:
#
# Input: ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
# Note:
#
# All given inputs are in lowercase letters a-z.

def longest_common_prefix(arr)
  result = ""
  return result if arr.length == 0 || arr[0].length == 0

  i = 0
  fin = false

  until fin
    letter = arr[0][i]
    arr.each { |str| fin = true if i >= str.length || str[i] != letter }
    result += letter unless fin
    i += 1
  end

  result
end


# p longest_common_prefix(["flower","flow","flight"]) # "fl"
# p longest_common_prefix(["dog","racecar","car"]) # ""
# p longest_common_prefix([]) # ""
# p longest_common_prefix([""]) # ""
p longest_common_prefix(["a"]) # "a"
