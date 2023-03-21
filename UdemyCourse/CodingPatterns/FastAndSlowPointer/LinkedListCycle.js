/* 
  LinkedList Cycle (easy)

  Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.


  Approach comes in mind : 
  See we are sure that we need to use fast and slow approach so just move one pointer with speed of 1 and another pointer with speed
  of 2 if any of them reached to null means we don't have cycle but if non of them reached to null then 100% first pointer and second pointer
  will meet at some node and that means it has cycle
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
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next; // 6 next is reaching back to 3

/*
  Good that submitted  : https://leetcode.com/problems/linked-list-cycle/submissions/915258278/
  But here understanding of fast and slow approach is much more important to understand thing about
  for a moment like if we have only one node and its next is that node itself then how output true is
  coming why fast =  head.next.next is not failing in case of one node which has cycle with it self these
  all points are really important to understand
*/
/*
  Time and Space : 
  As we have concluded above, once the slow pointer enters the cycle, the fast pointer will meet the slow pointer in the same loop.
  Therefore, the time complexity of our algorithm will be O(N)  where ‘N’ is the total number of nodes in the LinkedList.

 The algorithm runs in constant space O(1).


*/
function isCycle(head) {
  if (head === null) return false;
  let slow = head.next;
  let fast = head.next?.next;
  while (slow !== null && fast !== null) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next ?? null;
    fast = fast.next?.next ?? null;
  }
  return false;
}

console.log(isCycle(head));

/*
  Similar Problems
  Problem 1: Given the head of a LinkedList with a cycle, find the length of the cycle.

  Now when i looked into this problem it was looking easy but i was not able to do it for like 20 minutes
  because of no dry run and one more reason is not thinking loudly.

  So how we will do now simple when fast and slow meets then we have cycle and as soon as you have cycle just
  run loop one more time from slow to slow or fast to fast.

  ALSO MISUNDERSTOOD THE ENTIRE QUESTION BHAI WE DON'T NEED ENTIRE LINKED LIST JUST CYCLE LENGTH MUST DRY RUN THIS

  TIME AND SPACE : Time and Space Complexity: The above algorithm runs in O(N)time complexity and O(1) space complexity.



*/

function countCycle(head) {
  if (head == null) return 0;
  let slow = head;
  let fast = head;

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return getCycleCount(slow); // fast or slow koi bi lo
    }
  }
  return 0;
}

function getCycleCount(slow) {
  let count = 0;
  let curr = slow;

  while (true) {
    curr = curr.next;
    count++;
    if (curr === slow) {
      break;
    }
  }
  return count;
}

console.log(countCycle(head));
