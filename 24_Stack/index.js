class Stack {
  constructor() {
    this.stackArray = [];
    this.elementIndex = 0;
  }

  push(element) {
    this.stackArray[this.elementIndex] = element;
    this.elementIndex++;
  }

  pop() {
    if (this.stackArray.length === 0) {
      return "Stack is empty";
    } else {
      const finalElement = this.stackArray[this.stackArray.length - 1];
      this.stackArray.length = this.stackArray.length - 1;
      return finalElement;
    }
  }
}

module.exports = { Stack };
