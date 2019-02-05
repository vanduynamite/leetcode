class Interval {
  constructor(left, right, leftClosed, rightClosed) {
    this.left = left;
    this.right = right;
    this.leftClosed = leftClosed;
    this.rightClosed = rightClosed;
  }
}

const unionOfIntervals = intervals => {

  const sortIntervals = intervals => {
    if (intervals.length <= 1) return intervals;
    const left = [];
    const right = [];
    intervals.forEach((interval, i) => {
      if (i === 0) return;
      if (interval.left < intervals[0].left) left.push(interval);
      if (interval.left >= intervals[0].left) right.push(interval);
    });
    return sortIntervals(left).concat(intervals[0]).concat(sortIntervals(right));
  };

  const mergeIntervals = (int1, int2) => {
    const interval = new Interval();

    if (int1.left < int2.left) {
      interval.left = int1.left;
      interval.leftClosed = int1.leftClosed;
    } else if (int1.left > int2.left) {
      interval.left = int2.left;
      interval.leftClosed = int2.leftClosed;
    } else {
      interval.left = int1.left;
      interval.leftClosed = int1.leftClosed;
      if (int2.leftClosed) interval.leftClosed = true;
    }

    if (int1.right > int2.right) {
      interval.right = int1.right;
      interval.rightClosed = int1.rightClosed;
    } else if (int1.right < int2.right) {
      interval.right = int2.right;
      interval.rightClosed = int2.rightClosed;
    } else {
      interval.right = int1.right;
      interval.rightClosed = int1.rightClosed;
      if (int2.rightClosed) interval.rightClosed = true;
    }

    return interval;
  };

  const intervalsIntersect = (int1, int2) => {
    if (int2.left > int1.left) {
      if (int2.left < int1.right) return true;
      if (int2.left === int1.right && (int2.leftClosed || int1.rightClosed)) return true;
    } else if (int2.left === int1.left) {
      return (int1.leftClosed || int2.leftClosed);
    }
    // because they will be in order we don't need to test for int2.left < int1.left

    return false;
  };

  intervals = sortIntervals(intervals);

  const results = [];
  let currentInterval = new Interval(intervals[0].left, intervals[0].right, intervals[0].leftClosed, intervals[0].rightClosed);
  let i = 1;

  while (i < intervals.length) {
    if (intervalsIntersect(currentInterval, intervals[i])) {
      currentInterval = mergeIntervals(currentInterval, intervals[i]);
    } else {
      results.push(currentInterval);
      currentInterval = new Interval(intervals[i].left, intervals[i].right, intervals[i].leftClosed, intervals[i].rightClosed);
    }
    i++;
  }

  results.push(currentInterval);
  return results;
};

const intervals = [];
intervals.push(new Interval(1, 1, true, true));
intervals.push(new Interval(16, 17, false, false));
intervals.push(new Interval(3, 4, true, false));
intervals.push(new Interval(12, 16, false, true));
intervals.push(new Interval(5, 7, true, false));
intervals.push(new Interval(7, 8, true, false));
intervals.push(new Interval(13, 15, false, false));
intervals.push(new Interval(2, 4, true, true));
intervals.push(new Interval(8, 11, true, false));
intervals.push(new Interval(0, 3, false, false));
intervals.push(new Interval(9, 11, false, true));
intervals.push(new Interval(12, 14, true, true));

console.log(unionOfIntervals(intervals));
