/**
* Given the head of a sorted linked list, 
* delete all duplicates such that each element appears only once. 
* Return the linked list sorted as well.
**/

/** EXAMPLE:
* Input: head = 1 -> 1 -> 2 -> null
* Output: 1 -> 2 -> null
**/

var deleteDuplicates = function(head) {
    let currentNode = head;
    while(currentNode && currentNode.next) { 
        if(currentNode.val === currentNode.next.val) {
            currentNode.next = currentNode.next.next; 
        } else {
            currentNode = currentNode.next;
        }
    }
    return head;
};