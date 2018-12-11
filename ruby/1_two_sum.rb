require 'byebug'

def two_sum(nums, target)
    hash = {}

    nums.each_with_index do |el, i|
        diff = target - el
        return [hash[diff], i] if hash[diff]
        hash[el] = i
    end

end

p two_sum([2, 7, 11, 15], 9)
