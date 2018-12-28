# Given an array nums of n integers and an integer target, are there elements
# a, b, c, and d in nums such that a + b + c + d = target? Find all unique
# quadruplets in the array which gives the sum of target.
#
# Note:
#
# The solution set must not contain duplicate quadruplets.
#
# Example:
#
# Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
#
# A solution set is:
# [
#   [-1,  0, 0, 1],
#   [-2, -1, 1, 2],
#   [-2,  0, 0, 2]
# ]

require 'set'
require 'byebug'

def four_sum(arr, target)
  # p arr
  result_indices = Set.new
  results = []

  two_sums = Hash.new { |h, k| h[k] = [] }

  (0...arr.length - 2).each do |i|
    (i + 1..arr.length - 1).each do |j|
      two_sums[arr[i] + arr[j]] << [i, j]
    end
  end

  two_sums.each do |val, indices|
    if two_sums.include?(target - val)
      indices.each do |i, j|
        two_sums[target - val].each do |k, l|
          if i != k && i != l && j != k && j != l
            result_indices.add([i, j, k, l].sort)
          end
        end
      end
    end
  end

  result_indices.each do |indices|
    result = indices.map { |i| arr[i] }.sort
    results << result unless results.include?(result)
  end

  results

end

# p four_sum([1, 0, -1, 0, -2, 2], 0)
# p four_sum([0,0,0,0], 1)
p four_sum([-3,-2,-1,0,0,1,2,3], 0)

# [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1],[-3,0,1,2],[-2,-1,0,3]]
# [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
