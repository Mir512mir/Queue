class Queue {
    constructor(capacity) {
      this.arr = new Array(capacity);
      this.head = 0;
      this.tail = 0;
      this.capacity = capacity;
      this.count = 0;
    }
  
  empty() {
      return this.count === 0;
    }
  
  push(element) {
      if (this.count === this.capacity) {
        throw new Error('Queue is full');
      }
  
  this.arr[this.tail] = element;
  this.tail = (this.tail + 1) % this.capacity;
  this.count++;
  }
  
  pop() {
      if (this.count === 0) {
        throw new Error('Queue is empty');
      }
  
  let element = this.arr[this.head];
  this.head = (this.head + 1) % this.capacity;
  this.count--;
  
  return element;
  }
  
  size() {
      return this.count;
    }
  }