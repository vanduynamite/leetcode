# Starting with a positive integer N, we reorder the digits in any order
# (including the original order) such that the leading digit is not zero.
#
# Return true if and only if we can do this in a way such that the resulting
# number is a power of 2.
#
#
#
# Example 1:
# Input: 1
# Output: true

# Example 2:
# Input: 10
# Output: false

# Example 3:
# Input: 16
# Output: true

# Example 4:
# Input: 24
# Output: false

# Example 5:
# Input: 46
# Output: true
#
# Note:
#
# 1 <= N <= 10^9

def reordered_power_of2(n) #O(29logN)
  return true if n == 1
  n = digit_count(n)
  get_potentials.each { |p| return true if p == n }
  return false
end

def get_potentials() # O(29logN)
  num = 2
  results = []
  while num < 10**9
    results << digit_count(num)
    num *= 2
  end
  results
end

def digit_count(num) # O(logN)
  results = Hash.new(0)
  while num > 0
    results[num % 10] += 1
    num /= 10
  end
  results
end

p reordered_power_of2(1)
p reordered_power_of2(10)
p reordered_power_of2(16)
p reordered_power_of2(46)
