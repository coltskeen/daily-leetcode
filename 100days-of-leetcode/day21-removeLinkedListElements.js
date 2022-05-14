/** 
 * Given the head of a linked list and an integer val, 
 * remove all the nodes of the linked list that has Node.val == val, 
 * and return the new head.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = new ListNode(-1);
    current.next = head;
    head = current;
    
    while(current) {
        if(current.next && current.next.val === val){
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head.next;
};

//TEST CASES:
console.log(removeElements([1, 2, 3, 7, 4, 7, 5], 7)) // [1, 2, 3, 4, 5]
console.log(removeElements([7, 7, 7, 7], 7)) // []
console.log(removeElements([7], 7)) // []
console.log(removeElements([], 7)) // []