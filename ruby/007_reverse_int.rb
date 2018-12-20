# Given a 32-bit signed integer, reverse digits of an integer.
#
# Example 1:
# Input: 123
# Output: 321

# Example 2:
# Input: -123
# Output: -321

# Example 3:
# Input: 120
# Output: 21

# Note:
# Assume we are dealing with an environment which could only store integers within
# the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this
# problem, assume that your function returns 0 when the reversed integer overflows.

def reverse(x)
  result = 0
  sign = x.abs == x ? 1 : -1
  x = x.abs

  while x > 0
    result = 10 * result + x % 10
    x /= 10
  end

  result > 2147483647 ? 0 : result * sign
end

puts reverse(321)
puts reverse(-321)
puts reverse(-2147483647)
