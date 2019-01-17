# Given an integer array, you need to find one continuous subarray that if you
# only sort this subarray in ascending order, then the whole array will be sorted
# in ascending order, too.
#
# You need to find the shortest such subarray and output its length.
#
# Example 1:
# Input: [2, 6, 4, 8, 10, 9, 15]
# Output: 5
# Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the
# whole array sorted in ascending order.
# Note:
# Then length of the input array is in range [1, 10,000].
# The input array may contain duplicates, so ascending order here means <=.

require 'byebug'

def find_unsorted_subarray(nums)
  return 0 if nums.length <= 1

  left = 0
  right = nums.length - 1

  while left < right && nums[left] <= nums[left + 1]
    left += 1
  end

  while right >= left && nums[right] >= nums[left]
    right -= 1
  end

  right - left + 1

end

p find_unsorted_subarray([])
p find_unsorted_subarray([2]) # => 0
p find_unsorted_subarray([2,3])
p find_unsorted_subarray([1,2,3,4])
p find_unsorted_subarray([1,2,3,3,3])
puts ""
p find_unsorted_subarray([2,1])
p find_unsorted_subarray([1,3,2,3,3])
p find_unsorted_subarray([2,6,4,8])
p find_unsorted_subarray([1,2,3,4,6,5])
puts ""
p find_unsorted_subarray([1,3,2,2,2])
p find_unsorted_subarray([2, 6, 4, 8, 10, 9, 15])
