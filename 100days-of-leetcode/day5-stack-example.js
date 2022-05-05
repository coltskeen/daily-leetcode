function Stack(){   
    var items = [];   
    var top = 0;   //other methods go here 
    console.log(this);
    //Push an item in the Stack   
    this.push = function(element){      items[top++] = element   } //top++, first performs the operation then increment's the value 
    //Pop an item from the Stack   
    this.pop = function(){      return items[--top];   } //--top, first decrements the value then performs the operation 
    //Peek top item of the Stack   
    this.peek = function(){      return items[top - 1];   } 
    //Is Stack empty   
    this.isEmpty = function(){     return top === 0;   } 
    //Clear the Stack   
    this.clear = function(){     top = 0;   } 
    //Size of the Stack   
    this.size = function(){      return top;   }
}

var stack = new Stack(); //creating new instance of Stack 
stack.push(1); 
stack.push(2); 
stack.push(3); 
console.log(stack.peek()); 
console.log(stack.isEmpty()); 
console.log(stack.size()); 
console.log(stack.pop()); 
console.log(stack.size()); 
stack.clear(); 
console.log(stack.isEmpty()); 
//Output: 3 false 3 3 2 true