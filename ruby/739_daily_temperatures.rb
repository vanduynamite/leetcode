# Given a list of daily temperatures T, return a list such that, for each day
# in the input, tells you how many days you would have to wait until a warmer
# temperature. If there is no future day for which this is possible, put 0 instead.
#
# For example, given the list of temperatures
# T = [73, 74, 75, 71, 69, 72, 76, 73],
# your output should be [1, 1, 4, 2, 1, 1, 0, 0].
#
# Note: The length of temperatures will be in the range [1, 30000].
# Each temperature will be an integer in the range [30, 100].


def daily_temperatures_slow(t)

  results = Array.new(t.length, 0)
  stack = []

  t.each_with_index do |temp, i|
    until stack.length == 0 || stack[-1][0] >= temp
      results[stack[-1][1]] = i - stack[-1][1]
      stack.pop
    end
    stack << [temp, i]
  end

  results

end

p daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73])
p daily_temperatures([78, 77, 76, 75, 74, 73, 72, 71])
p daily_temperatures([78, 77, 76, 75, 74, 73, 72, 71].reverse)
p daily_temperatures([])
p daily_temperatures([77])
p daily_temperatures([30, 100])
p daily_temperatures([100, 30])
