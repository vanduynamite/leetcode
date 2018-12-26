# Given n non-negative integers a1, a2, ..., an , where each represents a point
# at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
# of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis
# forms a container, such that the container contains the most water.
#
# Note: You may not slant the container and n is at least 2.
#
# Example:
#
# Input: [1,8,6,2,5,4,8,3,7]
# Output: 49

def max_container(arr)

  left = 0
  right = arr.length - 1
  result = 0

  while left < right

    new_area = (right - left) * [arr[left], arr[right]].min
    result = new_area if new_area > result

    if arr[right] < arr[left]
      right -= 1
    else
      left += 1
    end

  end

  result

end

p max_container([1,1]) # 1
p max_container([1,2]) # 1
p max_container([2,2]) # 2
p max_container([2,1,2]) # 4
p max_container([2,1,4,2,7,4,2]) # 12
p max_container([1,8,6,2,5,4,8,3,7]) # 49
