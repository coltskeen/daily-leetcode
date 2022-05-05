const LinkedList = require('./day6-linkedList');

const ll = new LinkedList();

ll.prepend(10);
ll.prepend(20);
ll.remove();

console.log(ll.size());
console.log(ll.first());
ll.print();