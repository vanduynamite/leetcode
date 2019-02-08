class MinHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  add(val) {
    this.heap.push(val);
    this.size++;
    this._heapifyUp();
  }

  pop() {
    this._switchEls(0, this.size - 1);
    const val = this.heap.pop();
    this.size--;
    this._heapifyDown();
    return val;
  }

  peek() {
    return this.heap.pop();
  }

  _heapifyUp() {
    let i = this.size - 1, j = Math.floor((i - 1)/2);
    while (i > 0 && this.heap[i] < this.heap[j]) {
      this._switchEls(i, j);
      i = j;
      j = Math.floor((i - 1) / 2);
    }
  }

  _heapifyDown() {
    let i = 0, l = 2 * i + 1, r = 2 * i + 2;
    let switched = true;

    while (switched) {
      switched = false;
      if (i === this.size - 1) break; // i has become the last element

      if (this.heap[i] > this.heap[l] &&
        (!this.heap[r] || this.heap[l] <= this.heap[r])) {
        this._switchEls(i, l);
        i = l;
        switched = true;
      } else if (this.heap[i] > this.heap[r] && this.heap[r] <= this.heap[l]) {
        this._switchEls(i, r);
        i = r;
        switched = true;
      }
      l = 2 * i + 1;
      r = 2 * i + 2;
    }

  }

  _switchEls(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

}


const sortAlmostSorted = (arr, k) => {
  const heap = new MinHeap();
  const results = [];

  for (let i = 0; i < arr.length + k; i++) {
    if (i >= k) results.push(heap.pop());
    if (i < arr.length) heap.add(arr[i]);
  }

  return results;
};


const arr = [3,-1,2,6,4,5,8];
console.log(sortAlmostSorted(arr, 2));
