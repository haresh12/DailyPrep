/*
   Problem Challenge 1: Palindrome LinkedList (medium)

   Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

   Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. 
   The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.
*/


class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  // Good way to create small linked list for test cases
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(3);
  head.next.next.next.next = new Node(2);
  head.next.next.next.next.next = new Node(1);
  head.next.next.next.next.next.next =  null;


  function isPalindrome(head){
    // find the middle element
    let first = head
    let middleNode = findMiddleNode(head);
    let reverseFromMiddle = reverse(middleNode);
    let isPalindrome = true;
    while(reverseFromMiddle !== null){
        if(first.val !== reverseFromMiddle.val){
            isPalindrome = false;
            break;
        }
        reverseFromMiddle = reverseFromMiddle.next;
        first = first.next;
    }
    return isPalindrome;
  }

  function findMiddleNode(node){
   let slow = node;
   let fast = node;
   
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
  }

  
function reverse(head){
 let prev = null;
 let curr = head;
 while(curr !== null){
  let next = curr.next; // ONE LINE CAN WASTE YOU 30 MIN  
  curr.next = prev;
  prev = curr;
  curr = next;
 }
 return prev;
}

// Nothing is hard just bad mindset is taking long time
console.log(isPalindrome(head)
)