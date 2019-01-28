class MaxHeap {
  constructor() {
    this.heap = [];
    this.coordinates = [];
    this.size = 0;
  }

  add(data) {
    this.heap.push(data[0]);
    this.coordinates.push(data[1]);
    this.size++;
    this._heapifyUp();
  }

  pop() {
    this._switchEls(0, this.size - 1);
    this.heap.pop();
    const point = this.coordinates.pop();
    this.size--;
    this._heapifyDown();
    return point;
  }

  peek() {
    return this.heap[0];
  }

  _heapifyUp() {
    let i = this.size - 1, j = Math.floor((i - 1)/2);
    while (i > 0 && this.heap[i] > this.heap[j]) {
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

      if (this.heap[i] < this.heap[l] &&
        (!this.heap[r] || this.heap[l] >= this.heap[r])) {
        this._switchEls(i, l);
        i = l;
        switched = true;
      } else if (this.heap[i] < this.heap[r] && this.heap[r] >= this.heap[l]) {
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
    [this.coordinates[i], this.coordinates[j]] = [this.coordinates[j], this.coordinates[i]];
  }

}

var kClosest = function(points, k) {

  const heap = new MaxHeap();

  points.forEach(point => {
    const dist = Math.sqrt(Math.pow(point[0],2) + Math.pow(point[1],2));
    if (heap.size < k) {
      heap.add([dist, point]);
    } else if (dist < heap.peek()) {
      heap.pop();
      heap.add([dist, point]);
    }
  });

  return heap.coordinates;
};

// Input: points = [[3,3],[5,-1],[-2,4]], K = 2
// Output: [[3,3],[-2,4]]

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));
