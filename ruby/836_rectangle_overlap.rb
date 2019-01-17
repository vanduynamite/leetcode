# A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are
# the coordinates of its bottom-left corner, and (x2, y2) are the coordinates
# of its top-right corner.
#
# Two rectangles overlap if the area of their intersection is positive.  To be
# clear, two rectangles that only touch at the corner or edges do not overlap.
#
# Given two (axis-aligned) rectangles, return whether they overlap.
#
# Example 1:
#
# Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
# Output: true
# Example 2:
#
# Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
# Output: false
# Notes:
#
# Both rectangles rec1 and rec2 are lists of 4 integers.
# All coordinates in rectangles will be between -10^9 and 10^9.

def is_rectangle_overlap(rec1, rec2)
  return true if helper1(rec1, rec2)
  return true if helper1(rec2, rec1)
  false
end

def helper1(rec1, rec2)
  return true if helper2([rec1[0],rec1[1]], rec2)
  return true if helper2([rec1[2],rec1[3]], rec2)
  return true if helper2([rec1[0],rec1[3]], rec2)
  return true if helper2([rec1[2],rec1[1]], rec2)
  return true if helper2([rec1[0],(rec1[1]+rec1[3])/2], rec2)
  return true if helper2([(rec1[0]+rec1[2])/2,rec1[3]], rec2)
  return true if helper2([rec1[2],(rec1[1]+rec1[3])/2], rec2)
  return true if helper2([(rec1[0]+rec1[2])/2,rec1[1]], rec2)

  false
end

def helper2(point, rec2)
  return true if (point[0] > rec2[0]) && (point[0] < rec2[2]) && (point[1] > rec2[1]) && (point[1] < rec2[3])
  false
end

p is_rectangle_overlap([0,0,2,2], [1,1,3,3])
p is_rectangle_overlap([1,0,3,2], [0,1,4,3])
p is_rectangle_overlap([0,0,4,4], [1,1,2,2])
p is_rectangle_overlap([0,0,2,2], [1,0,3,2])
p is_rectangle_overlap([0,0,2,2], [0,1,2,3])
p is_rectangle_overlap([1,0,3,2], [1,0,2,3])
