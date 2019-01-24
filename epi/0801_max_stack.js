class MaxStack {

  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.maxStack.length === 0 || val >= this.max()) this.maxStack.push(val);
  }

  pop() {
    const val = this.stack.pop();
    if (this.max() === val) this.maxStack.pop();
    return val;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  max() {
    return this.maxStack[this.stack.length - 1];
  }

}
