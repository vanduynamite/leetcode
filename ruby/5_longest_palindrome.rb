# Given a string s, find the longest palindromic substring in s.
# You may assume that the maximum length of s is 1000.
#
# Example 1:
#
# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:
#
# Input: "cbbd"
# Output: "bb"

# I assume it can be done in O(n) time

def longest_palindrome(s)

  result = []
  arr = s.chars

  (0...arr.length).each do |i|
    (i...arr.length).each do |j|
      if is_palindrome?(arr[i..j])
        result = arr[i..j] if (j-i+1) >= result.length
      end
    end
  end

  result.join

end

def is_palindrome?(arr)

  (0..arr.length/2).each do |i|
    return false unless arr[i] == arr[arr.length - 1 - i]
  end

  true

end

puts longest_palindrome("baba")
puts longest_palindrome("babad")
puts longest_palindrome("cbbd")
puts longest_palindrome("bsnetpqmwhqjunkooftuosgkmkxpmvuehtlpwpktltwlvpdaycnhewdbdrhluyjldecezujgxixehsmjjuyerpllrvzqskizkulqzowzfvqcdsllvgupndbaiuzihcxklvxbodpnrymwobhlvllybdlfabfvnizjpriapuzszdhohfgezayokrivbgbgingspoxsridokhwekawchjdcpylvefubulvxneuizglrjktfcdirwnpqztdpsicslzaeiaibrepifxpxfkczwoumkkuaqkbjhxvasxflmrctponwwenvmtdaqaavubyrzbqjbjxpejmucwunanxwpomqyondyjuzxmzpevxqmbkrwcpdiiph")
