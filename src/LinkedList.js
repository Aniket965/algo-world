function Node(data) {
  this.data = data;
  this.next = null;
}
function LinkedList() {
  this.length = 0;
  this.head = null;
}
LinkedList.prototype.Add = function (data) {
  const node = new Node(data);
  if (this.head === null) {
    this.head = node;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
  return node;
};

LinkedList.prototype.get = function (index) {
  if (index > this.length) {
    return "Node doesn't exist";
  }
  let current = this.head;
  let count = 0;
  while (count < index - 1) {
    current = current.next;
    count++;
  }
  return current;
};
LinkedList.prototype.toString = function () {
  let currentNode = this.head;
  let str = '';
  while (currentNode) {
    str += `${currentNode.data}->`;
    currentNode = currentNode.next;
  }
  return str;
};
module.exports = {
  LinkedList,
};
