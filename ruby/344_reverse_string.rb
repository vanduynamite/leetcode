def reverse_string(s)
  a = s.length - 1
  (0..a).map { |i| s[a-i]}.join
end
