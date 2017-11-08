function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, val, next) { 
  this.key = key;
  this.val = val;
  this.next = next || null;
}

HashTable.prototype.hash = function (key) {
  var total = 0;
  for (var i = 0; i < key.length; i++){
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
}

HashTable.prototype.insert = function (key, val) { 
  var index = this.hash(key);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, val);
  else if (this.buckets[index].key === key){
    this.buckets[index].val = val;
  }
  else { 
    var currentNode = this.buckets[index];
    while (currentNode.next) { 
      if (currentNode.next.key === key) { 
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, val);
  }
}

HashTable.prototype.get = function (key) { 
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else { 
    var currentNode = this.buckets[index];
    while (currentNode) { 
      if (currentNode.key === key) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }
}

HashTable.prototype.retrieveAll = function () { 
  var allNodes = [];
  for (var i = 0; i < this.numBuckets; i++){ 
    var currentNode = this.buckets[i];
    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
}
var myHt = new HashTable(30);
// console.log(myHt.hash('Becca'));

myHt.insert('Dean', 'dean@gmail.com');
myHt.insert('Dane', 'dane@yahoo.com');
myHt.insert('Megan', 'megan@gmail.com');
myHt.insert('Dean', 'deanmachine@gmail.com');
myHt.insert('Deaan', 'deanmachine@gmail.com');
myHt.insert('Alona', 'Alona@gmail.com');
myHt.insert('Joe', 'Joe@gmail.com');
myHt.insert('Samanta', 'Samanta@gmail.com');


console.log(myHt.retrieveAll());