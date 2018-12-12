class MyQueue

  def initialize()
    @arr_in = []
    @arr_out = []
  end

  def push(x)
    @arr_in << x
    x
  end

  def pop
    if @arr_out.empty?
      @arr_in.length.times { @arr_out.push(@arr_in.pop) }
    end

    @arr_out.pop
  end

  def peek
    if @arr_out.empty?
      @arr_in.length.times { @arr_out.push(@arr_in.pop) }
    end

    @arr_out[-1]
  end

  def empty
    @arr_in.length == 0 && @arr_out.length == 0
  end

end
