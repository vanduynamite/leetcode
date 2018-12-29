# Given an array nums of n integers and an integer target, find three integers
# in nums such that the sum is closest to target. Return the sum of the three
# integers. You may assume that each input would have exactly one solution.
#
# Example:
#
# Given array nums = [-1, 2, 1, -4], and target = 1.
#
# The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

require 'byebug'

def three_sum_closest(nums, target)

  nums.sort!
  closest = nums[0] + nums[1] + nums[2]

  (0...nums.length - 2).each do |i|
    left = i + 1
    right = nums.length - 1

    until left >= right
      result = nums[i] + nums[left] + nums[right]
      closest = result if (target - result).abs < (target - closest).abs
      return closest if closest == target

      if result < target
        left += 1
      else
        right -= 1
      end

    end

  end

  closest

end

p three_sum_closest([-1, 2, 1, -4], 1) # 2
p three_sum_closest([-1, 2, 1, -4], -10) # -4
p three_sum_closest([-1, 2, 1, -4], -1) # -1
p three_sum_closest([-1, 2, 1, -4], -2) # -1 / -3

[-4, -1, 1, 2]
