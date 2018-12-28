# Given a string containing digits from 2-9 inclusive, return all possible
# letter combinations that the number could represent.
#
# A mapping of digit to letters (just like on the telephone buttons) is given
# below. Note that 1 does not map to any letters.
#
# 2 - abc
# 3 - def
# 4 - ghi
# 5 - jkl
# 6 - mno
# 7 - pqrs
# 8 - tuv
# 9 - wxyz
#
# Example:
#
# Input: "23"
# Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
#
# Note:
#
# Although the above answer is in lexicographical order, your answer could be
# in any order you want.

require 'byebug'

def letter_combinations(str)
  return [] if str.empty?
  map = {
    '2' => ['a','b','c'],
    '3' => ['d','e','f'],
    '4' => ['g','h','i'],
    '5' => ['j','k','l'],
    '6' => ['m','n','o'],
    '7' => ['p','q','r','s'],
    '8' => ['t','u','v'],
    '9' => ['w','x','y','z'],
  }

  results = ['']

  str.chars.each do |num|
    new_results = []
    map[num].each do |letter|
      results.each do |res|
        new_results << (res += letter)
      end
    end
    results = new_results
  end

  results
end

p letter_combinations("23") # ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
p letter_combinations("")
