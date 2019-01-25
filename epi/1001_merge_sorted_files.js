class MinHeapWithIndex {
  constructor(sortedArr=[]) {
    this.heap = sortedArr;
    this.length = this.heap.length;
  }

  heapifyUp() {
    let switched = true;
    let index = this.length - 1;
    let parentIndex;
    while (switched && index > 0) {
      switched = false;
      parentIndex = Math.floor(index/2);
      if (this.heap[index][0] < this.heap[parentIndex][0]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
        switched = true;
      }
    }
  }

  heapifyDown() {
    let switched = true;
    let idx = 0;
    let lIdx;
    let rIdx;

    while (switched) {
      switched = false;
      lIdx = 2 * idx + 1;
      rIdx = 2 * idx + 2;

      if (lIdx >= this.length) return;

      if (rIdx >= this.length) {
        if (this.heap[idx][0] > this.heap[lIdx][0]) {
          [this.heap[idx], this.heap[lIdx]] = [this.heap[lIdx], this.heap[idx]];
          idx = lIdx;
          switched = true;
        }
      } else {
        if (this.heap[idx][0] > this.heap[lIdx][0] && this.heap[lIdx][0] <= this.heap[rIdx][0]) {
          [this.heap[idx], this.heap[lIdx]] = [this.heap[lIdx], this.heap[idx]];
          idx = lIdx;
          switched = true;
        } else if (this.heap[idx][0] > this.heap[rIdx][0] && this.heap[rIdx][0] <= this.heap[lIdx][0]) {
          [this.heap[idx], this.heap[rIdx]] = [this.heap[rIdx], this.heap[idx]];
          index = rIdx;
          switched = true;
        }
      }
    }
  }

  pop() {
    [this.heap[0], this.heap[this.length - 1]] = [this.heap[this.length - 1], this.heap[0]];
    const value = this.heap.pop();
    this.length--;
    this.heapifyDown();
    return value;
  }

  push(value) {
    this.heap.push(value);
    this.length++;
    this.heapifyUp();
  }


}

const mergeKLists = lists => {
  const heap = new MinHeapWithIndex();
  const result = [];
  let lowestVal;
  let index;

  // initialize the heap with the lowest element from each list
  for (i = 0; i < lists.length; i++) {
    if (lists[i].length > 0) heap.push([lists[i].shift(), i]);
  }

  while (heap.length > 0) {
    [lowestVal, i] = heap.pop();
    result.push(lowestVal);
    if (lists[i].length > 0) heap.push([lists[i].shift(), i]);
  }

  return result;
};


// const arr = [[3],[0]];
// const heap = new MinHeapWithIndex(arr);
// heap.heapifyDown();
// // console.log(heap.pop());
// console.log(heap);

console.log(mergeKLists([[3, 5, 7], [0, 6], [0, 6, 28]]));
