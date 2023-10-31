class Node {
  constructor(data) {
    this.data = data;
    this.next;
  }
}

class LinkedList {
  constructor() {
    this.head;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  print() {
    let final = [];
    let current = this.head;
    while (current) {
      final.push(current.data);
      current = current.next;
    }
    console.log(final);
  }
}
module.exports = { LinkedList };
