# Given n pairs of parentheses, write a function to generate all combinations
# of well-formed parentheses.
#
# For example, given n = 3, a solution set is:
#
# [
#   "((()))",
#   "(()())",
#   "(())()",
#   "()(())",
#   "()()()"
# ]

require 'set'

def generate_parenthesis(n)
  return [''] if n == 0

  results = Set.new
  prev_results = generate_parenthesis(n - 1)

  prev_results.each do |pr|
    (0..pr.length / 2).each do |i|
      result = pr[0...i] + '()' + pr[i..-1]
      results.add(result) unless results.include?(result)
    end
  end

  results.to_a

end

p generate_parenthesis(1) # ['()']
p generate_parenthesis(2) # ['()()', '(())']
p generate_parenthesis(3) # [
                          #   "((()))",
                          #   "(()())",
                          #   "(())()",
                          #   "()(())",
                          #   "()()()"
                          # ]
