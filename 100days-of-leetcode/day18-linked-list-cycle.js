/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again 
 * by continuously following the next pointer. Internally, pos is used to denote the index 
 * of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */


//SOLUTION 1
var hasCycle = function(head) {
    let current = head;
    let comp = head;
    if(!head) return false;
    if(!comp.next || !comp.next.next) return false;
    while( current && comp.next.next) {
        if(!current.next) return false;
        else{
            current = current.next;
            comp = comp.next.next;
            if(!comp.next || !comp.next.next) return false;
        }
        if(current === comp) return true;
    }
    return false;
};

// SOLUTION 2: 
var hasCycle = function(head) {
    let current = head;
    let comp = head;
    while(comp && comp.next) {
        current = current.next;
        comp = comp.next.next;
        if(current === comp) return true;
    }
    return false;
};