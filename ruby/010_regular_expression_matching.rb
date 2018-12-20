# Given an input string (s) and a pattern (p), implement regular expression
# matching with support for '.' and '*'.
#
# '.' Matches any single character.
# '*' Matches zero or more of the preceding element.
# The matching should cover the entire input string (not partial).
#
# Note:
#
# s could be empty and contains only lowercase letters a-z.
# p could be empty and contains only lowercase letters a-z, and characters
# like . or *.

# Example 1:
# Input:
# s = "aa"
# p = "a"
# Output: false
# Explanation: "a" does not match the entire string "aa".

# Example 2:
# Input:
# s = "aa"
# p = "a*"
# Output: true
# Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore,
# by repeating 'a' once, it becomes "aa".

# Example 3:
# Input:
# s = "ab"
# p = ".*"
# Output: true
# Explanation: ".*" means "zero or more (*) of any character (.)".

# Example 4:
# Input:
# s = "aab"
# p = "c*a*b"
# Output: true
# Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore
# it matches "aab".

# Example 5:
# Input:
# s = "mississippi"
# p = "mis*is*p*."
# Output: false

def is_match(s, p)
  # . matches a single character
  # * matches any number of the preceding character including 0
  # match to the entire string

  # s can be empty, only lowercase
  # p can be empty, only lowercase, plus . and *

  return false if p[0] == '*'
  return false if p.length == 0

  left_i = 0
  left_j = 0

  i = p.length - 1
  j = s.length - 1

  while i >= 0
    run = false
    letter = p[i]

    if letter == '*'
      i -= 1
      letter = p[i]
      run = true
    end

    if run
      while (s[j] == letter || letter == '.') && j >= 0
        j -= 1
      end
    else
      return false if j == -1
      return false unless s[j] == letter || letter == '.'
      j -= 1
    end

    i -= 1
  end

  j == -1

end

# p is_match('a','aa')  # false
# p is_match('a','.')   # true
# p is_match('a','*')   # false
# p is_match('a','a*')  # true


# p is_match('abbbbccccc','a*b*c*')  # true
# p is_match('mississippi','mis*is*p*.')  # false
# p is_match('baacbbb','ba*.b*b')  # true

# p is_match('aa','a')  # true

p is_match('aaa', 'ab*a*a') # true
p is_match('aaa', 'a.a*a') # true
p is_match('aaa', 'aa*a') # true
p is_match('aa', 'aa*a') # true

p is_match('bbaaa', 'bb*aa*a') # true
