# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of
# rows like this: (you may want to display this pattern in a fixed font for better
# legibility)
#
# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"
#
# Write the code that will take a string and make this conversion given a number of rows:
#
# string convert(string s, int numRows);
# Example 1:
#
# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"
# Example 2:
#
# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:
#
# P     I    N
# A   L S  I G
# Y A   H R
# P     I

def convert(s, num_rows)
  return s if num_rows == 1
  
  result = Array.new(num_rows) { [] }
  cycle = num_rows * 2 - 2

  s.chars.each_with_index do |el, i|
    row = i % cycle
    row = cycle - row if row >= num_rows
    result[row] << el
  end

  result.flatten.join
end

s = 'PAYPALISHIRING'
p convert(s, 3)
p convert(s, 4)
