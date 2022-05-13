/**
 * Given the head of a singly linked list, reverse the list, 
 * and return the reversed list.
 */

//Time Complexity: O(N)
var reverseList = function(head) {
    let current = head;
    let previous = null;
    let forward = head;
    while(current) {
        forward = forward.next;
        current.next = previous;
        previous = current;
        current = forward;
    }
    return previous; 
};