# Implement pow(x, n), which calculates x raised to the power n (xn).
#
# Example 1:
#
# Input: 2.00000, 10
# Output: 1024.00000
# Example 2:
#
# Input: 2.10000, 3
# Output: 9.26100
# Example 3:
#
# Input: 2.00000, -2
# Output: 0.25000
# Explanation: 2-2 = 1/22 = 1/4 = 0.25
# Note:
#
# -100.0 < x < 100.0
# n is a 32-bit signed integer, within the range [−2^31, 2^31 − 1]

def my_pow(x, n)
  return 1 / my_pow(x, -n) if n < 0
  return 1 if n == 0

  if n % 2 == 0
    half_pow = my_pow(x, n / 2)
    half_pow * half_pow
  else
    half_pow = my_pow(x, (n - 1) / 2)
    half_pow * half_pow * x
  end

end

p my_pow(2.1, 3)
p my_pow(2.0, -2)
p my_pow(0.44894, -5) #54.83508
p my_pow(2, 2**10)
