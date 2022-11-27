/*
   Leetcode : 206 :
   Given the head of a singly linked list, reverse the list, and return the reversed list.

   // https://www.youtube.com/watch?v=ugQ2DVJJroc best of recursive and iterative solution
*/

class Node {
  constructor(val,next){
    this.val = val;
    this.next = next;
  }
}

/*
  Took most of the time just to understand that how can i return newHead 
  its like return something else and change in something else strategy
*/
let newHead = null; 
var reverseList = function(head) {
  newHead = null; // RESETING IS IMPORTENT IF YOU ARE USING GLOBAL VARIABLE
  reverse(head); 
  return newHead;
};
function reverse(head){
 if(head === null){
  return null;
 }
 let node = reverse(head.next);
 if(node === null){
   newHead = head;
   return head;
 }
 head.next = null;
 node.next = head;
 return head;
}

function reverseListIteratively(head){
 let current = head;
 let prev = null;
  while(current != null){
    let temp = head.next; // so we don't loss the connection with next 
     current.next = prev; // [1,2,3] 1 ko null se connect kro 2 ko 1 se and 3 ko 2 se
     current = temp ; // these is where temp is importent else we won't able to move ahead in list
     prev = current;
  }
  return prev;
}