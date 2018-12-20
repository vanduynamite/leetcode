def int_to_roman(num)
  arr = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]

  str = ''
  arr.each do |div, roman|
    (num / div).times { str += roman }
    num %= div
  end
  str
end

p int_to_roman(3) # III
p int_to_roman(4) # IV
p int_to_roman(9) # IX
p int_to_roman(58) # LVIII
p int_to_roman(1994) # MCMXCIV
p int_to_roman(497) # CDXCVII
