class CircularQueue {
  constructor(initialCapacity) {
    this.capacity = initialCapacity;
    this.arr = new Array(initialCapacity);
    this.in = 0;
    this.out = 0;
    this.print();
  }

  numEl() {
    return this.in - this.out;
  }

  dequeue() {
    if (this.numEl() === 0) return null;
    this.out++;
    console.log(`Dequeueing ${this.arr[this.out-1]}`);
    this.print();
    return this.arr[this.out - 1];
  }

  enqueue(val) {
    if (this.in === this.capacity) {
      if (this.numEl() === this.capacity) this._resize();
      else this._shift();
    }
    this.arr[this.in] = val;
    this.in++;
    this.print();
  }

  _shift() {
    const numEl = this.numEl();
    for (let i = 0; i < numEl; i++) {
      this.arr[i] = this.arr[this.out];
      this.out++;
    }
    this.out = 0;
    this.in = numEl;
  }

  _resize() {
    const arr = new Array(this.capacity);
    this.capacity *= 2;
    this.arr = this.arr.concat(arr);
  }

  print() {
    console.log(this.arr);
    console.log(`Num Elements: ${this.numEl()}`);
    console.log(`In: ${this.in}`);
    console.log(`Out: ${this.out}`);
    console.log();
  }
}

const q = new CircularQueue(8);
q.dequeue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.enqueue(8);
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.enqueue(9);
