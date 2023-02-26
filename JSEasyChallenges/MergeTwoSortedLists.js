// 21. Merge Two Sorted Lists
// Easy
// 17.2K
// 1.6K
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

//   Definition for singly-linked list.
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


var mergeTwoLists = function(list1, list2) {
    // create a new linked list for the merged list
    let mergedList = new ListNode(null);
    let current = mergedList;
    
    // pointers to iterate through the two input lists
    let p1 = list1;
    let p2 = list2;
    
    // iterate through both lists, adding nodes to the merged list in sorted order
    while (p1 !== null && p2 !== null) {
        if (p1.val <= p2.val) {
            current.next = p1;
            p1 = p1.next;
        } else {
            current.next = p2;
            p2 = p2.next;
        }
        current = current.next;
    }
    
    // add any remaining nodes from the non-empty list
    if (p1 !== null) {
        current.next = p1;
    } else if (p2 !== null) {
        current.next = p2;
    }
    
    // return the head of the merged list (skip the initial null node)
    return mergedList.next;
};

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

// Call the mergeTwoLists function with the two linked lists
let mergedList = mergeTwoLists(list1, list2);

// Print out the merged list for testing purposes
let current = mergedList;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
 