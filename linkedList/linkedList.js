function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.prev = null;
  else this.head = null;
  return val;
}
LinkedList.prototype.search = function (searchValue) {
  var currentNode = this.head;
  while (currentNode) { 
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
}

LinkedList.prototype.indexOf = function (searchValue) {
  var currentNode = this.head;
  var i = 0;
  while (currentNode) { 
    if (currentNode.value === searchValue) return i;
    currentNode = currentNode.next;
    i++
  }
  return null;
}

var myLL = new LinkedList();

// myLL.addToTail(10);
// myLL.addToTail(20);
myLL.addToHead(100);
myLL.addToHead(200);
myLL.addToHead(3000);
myLL.addToTail('aaa');
myLL.addToTail(30);
myLL.addToTail(40);

// myLL.removeHead()
// myLL.removeTail();
console.log(myLL.indexOf('aaa'));

