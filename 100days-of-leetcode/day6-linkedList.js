/* ***************************************************************** */

/* 
* Problem for today: implement a linked-list with the following methods:
* head() - Returns the value of the first node in the list
* prepend(num) - Adds a node with the given data to the start of the list
* append(num) - Adds a node with the given data to the end of the list
* remove() - Removes the first node from the list and returns its value
* size() - Returns the number of nodes in the list
* Note: it might be helpful to implement a print method for debugging 
* which iterates through the entire list and prints out all the nodes.
*/ 

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    first() {
        return this.head.value;
    }

    prepend(data) {
        //get the current head and replace it
        //add a new linkedlistnode and then reference it to the old head
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.size++;
    }

    remove() {
        this.head = this.head.next;
        this.size--;
    }
    size() {
        console.log(this.size.value);
        return this.size;
    }

    print() {
        let output = ''
        let current = this.head
        while(current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }
}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

module.exports = LinkedList;







  /* ************************************************************ */
  /* ************************************************************ */
  /* ************************************************************ */
  //INSTRUCTOR SOLUTION
  /* ************************************************************ */
  /* ************************************************************ */
  /* ************************************************************ */
  // const Node = (data) => ({ data, next: null });
  
  // const LinkedList = () => {
  //   let head = null;
  //   let count = 0;
  
  //   const prepend = (num) => {
  //     const node = Node(num);
  //     node.next = head;
  //     head = node;
  //     count++;
  //   };
  
  //   const append = (num) => {
  //     const newNode = Node(num);
  //     if (!head) {
  //       head = newNode;
  //     } else {
  //       let curr = head;
  //       while (curr.next) {
  //         curr = curr.next;
  //       }
  //       curr.next = newNode;
  //     }
  //     count++;
  //   };
  
  //   const first = () => head.data;
  
  //   const size = () => count;
  
  //   const remove = () => {
  //     if (!head) return null;
  
  //     const node = head;
  //     head = head.next;
  //     count--;
  //     return node.data;
  //   };
  
  //   const print = () => {
  //     if (!head) return;
  
  //     let curr = head;
  //     while (curr.next) {
  //       console.log(curr.data);
  //       curr = curr.next;
  //     }
  //     console.log(curr.data);
  //   };
  
  //   return { prepend, append, first, size, remove, print };
  // };
  
  // const ll = LinkedList();
  // ll.prepend(3);
  // ll.prepend(2);
  // ll.append(4);
  // ll.prepend(1);
  // ll.prepend(1);
  // ll.remove();
  // ll.print();
  
  /* ************************************************************ */
  