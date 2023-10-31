class Queue {
  constructor(max = 10) {
    this.items = [];
    this.readIndex = 0;
    this.writeIndex = 0;
    this.maxCount = max;
    this.size = 0;
  }
  enqueue(item) {
    if (this.size === this.maxCount) {
      console.log("Queue is full");
      return;
    }
    this.items[this.writeIndex] = item;
    this.writeIndex++;
    this.size++;
  }
  dequeue() {
    if (this.size === 0) {
      console.error("Queue is Empty");
      return null;
    }

    const item = this.items[this.readIndex];

    this.readIndex++;
    this.size--;

    return item;
  }
}

module.exports = { Queue };
