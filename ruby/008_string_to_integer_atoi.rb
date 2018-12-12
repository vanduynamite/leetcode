# Implement atoi which converts a string to an integer.
#
# The function first discards as many whitespace characters as necessary until the
# first non-whitespace character is found. Then, starting from this character,
# takes an optional initial plus or minus sign followed by as many numerical
# digits as possible, and interprets them as a numerical value.
#
# The string can contain additional characters after those that form the integral
# number, which are ignored and have no effect on the behavior of this function.
#
# If the first sequence of non-whitespace characters in str is not a valid
# integral number, or if no such sequence exists because either str is empty or
# it contains only whitespace characters, no conversion is performed.
#
# If no valid conversion could be performed, a zero value is returned.
#
# Note:
#
# Only the space character ' ' is considered as whitespace character.
# Assume we are dealing with an environment which could only store integers
# within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical
# value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN
# (−231) is returned.
#
# Example 1:
# Input: '42'
# Output: 42
#
# Example 2:
# Input: '   -42'
# Output: -42
# Explanation: The first non-whitespace character is '-', which is the minus sign.
#              Then take as many numerical digits as possible, which gets 42.
#
# Example 3:
# Input: '4193 with words'
# Output: 4193
# Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
#
# Example 4:
# Input: 'words and 987'
# Output: 0
# Explanation: The first non-whitespace character is 'w', which is not a numerical
#              digit or a +/- sign. Therefore no valid conversion could be performed.
#
# Example 5:
# Input: '-91283472332'
# Output: -2147483648
# Explanation: The number '-91283472332' is out of the range of a 32-bit signed integer.
#              Thefore INT_MIN (−231) is returned.


def my_atoi(str)
  # discard whitespace
  # besides whitespace, only allow +/- to start, then numbers

  num_started = false
  sign = 1
  num = 0

  str.chars.each do |el|

    case el
    when ' '
      break if num_started
    when '-'
      break if num_started
      sign = -1
      num_started = true
    when '+'
      break if num_started
      num_started = true
    when '0'
      num_started = true
      num = num * 10 + 0
    when '1'
      num_started = true
      num = num * 10 + 1
    when '2'
      num_started = true
      num = num * 10 + 2
    when '3'
      num_started = true
      num = num * 10 + 3
    when '4'
      num_started = true
      num = num * 10 + 4
    when '5'
      num_started = true
      num = num * 10 + 5
    when '6'
      num_started = true
      num = num * 10 + 6
    when '7'
      num_started = true
      num = num * 10 + 7
    when '8'
      num_started = true
      num = num * 10 + 8
    when '9'
      num_started = true
      num = num * 10 + 9
    else
      break
    end

  end

  if sign == 1
    num > 2147483647 ? 2147483647 : num
  else
    num > 2147483648 ? -2147483648 : -num
  end

end

puts my_atoi('hello')
puts my_atoi(' +1 ')
puts my_atoi(' -31 ')
puts my_atoi(' -31f ')
puts my_atoi('42')
puts my_atoi('   -42')
puts my_atoi('4193 with words')
puts my_atoi('words and 987')
puts my_atoi('-91283472332')
puts my_atoi('2147483648')

# 32 => ' '
# 43 => '+'
# 45 => '-'
# 48 => '0'
# 49 => '1'
# 50 => '2'
# 51 => '3'
# 52 => '4'
# 53 => '5'
# 54 => '6'
# 55 => '7'
# 56 => '8'
# 57 => '9'
