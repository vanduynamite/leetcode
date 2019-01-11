def two_sum(arr, target)
  return [1,2] if arr.length == 2
  i = 0
  j = arr.length - 1
  while i < j
    if arr[i] + arr[j] == target
      return [i+1, j+1]
    elsif arr[i] + arr[j] < target
      i += 1
    else
      j -= 1
    end
  end
end
