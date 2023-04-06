/*
  Rearrange a LinkedList : 

  Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.
  Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

  Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
  Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 

  Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
  Output: 2 -> 10 -> 4 -> 8 -> 6 -> null
*/
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next =  null;

function reArrangeList(head){
 
  // Step first easy same as prev question
  let midNode = findMid(head);
  // Step second reverse from mid
  let headSecondHalf = reverse(midNode);
  let headFirstHalf = head
  while (headFirstHalf !== null && headSecondHalf !== null) {
    temp = headFirstHalf.next;
    headFirstHalf.next = headSecondHalf;
    headFirstHalf = temp;

    temp = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp;
  }
  // set the next of the last node to 'null'
  if (headFirstHalf !== null) {
    headFirstHalf.next = null;
  }
 return head
}


function reverse(head){
 let prev = null;
 let curr = head;
 while(curr !== null){
  let next = curr.next; // understand this line you will understand life
  curr.next = prev;
  prev = curr;
  curr = next;
 }
 return prev;
}

function findMid(head){
 let slow = head.next;
 let fast = head.next.next;

 while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
 }
 return slow;
}
console.log(reArrangeList(head))