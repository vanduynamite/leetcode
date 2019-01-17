def contains_duplicate(nums)
  set = Hash.new

  nums.each do |num|
    return true if set[num]
    set[num] = true
  end

  false
end

p contains_duplicate([1,2,3,4,1])
p contains_duplicate([])
