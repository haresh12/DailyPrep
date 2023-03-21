// /*
//     Start of LinkedList Cycle (medium):

//     Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
 
//     Won't lie with self both i thing i remember the algo for this but dry run is not done for the case where we move fast
//     and slow with same speed
// */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// // Good way to create small linked list for test cases
// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = head.next; // 6 next is reaching back to 3

// /*
//  Great that good submitted in first time : https://leetcode.com/problems/linked-list-cycle-ii/submissions/915296883/
//  BUT AGAIN FOR THESE QUESTION PLEASE DO DRY RUN
// */
// function startingPoint(head) {
//   let slow = head;
//   let fast = isCycle(head);
//   if (!fast) return null;

//   // Make sure we need to move one step at type DRY run not done for this step
//   while (true) {
//     if (slow === fast) {
//       break;
//     }
//     slow = slow.next;
//     fast = fast.next;
//   }
//   return slow.val;
// }
// // First we need to check that is linkedlist has cycle or not

// function isCycle(head) {
//   if (head === null) return null;

//   let slow = head;
//   let fast = head;

//   while (fast !== null) {
//     slow = slow.next ?? null;
//     fast = fast.next.next ?? null;
//     if (slow === fast) {
//       return slow;
//     }
//   }
//   return null;
// }

// console.log(startingPoint(head));

foo();

if(true){
  function foo(){
    console.log('1');
  }
}else{
  function foo(){
    console.log('2');
  }
}

 