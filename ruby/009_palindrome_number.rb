# Determine whether an integer is a palindrome. An integer is a palindrome when
# it reads the same backward as forward.
#
# Example 1:
# Input: 121
# Output: true

# Example 2:
# Input: -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes
# 121-. Therefore it is not a palindrome.

# Example 3:
# Input: 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

def is_palindrome_num(x)
  return false if x < 0
  return true if x == 0

  digits = (Math.log(x) / Math.log(10)).floor + 1

  (digits / 2).times do |i|
    return false unless (x % 10) == x / (10 ** (digits - 2*i - 1)) % 10
    x /= 10
  end

  true

end


puts is_palindrome_num(54445)
puts is_palindrome_num(10111201)
