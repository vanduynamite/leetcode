require 'byebug'

def solution(s)

  # remove AA, BB, or CC
  # repeat as long as possible...I sense recursion
  # am I returning ANY string, so like tracking them all? or only the end result
  # I think only the end result

  stack = ""

  (0...s.length).each do |i|
    if stack.length > 0 && stack[-1] == s[i]
      stack = stack[0...-1]
    else
      stack += s[i]
    end
  end

  stack
end

p solution("ACCAABBC")
# p solution("ACAC")
p solution("ABCABCCBACBA")
