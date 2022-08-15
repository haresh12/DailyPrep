let arr = [1,2,3,4,5]
function createLinkedList()
// Bruteforce working in leetcode
function removeNthNodeFromListLeetcode(head , n){
  if(!head || head.next === null) return null;  
  let length = 0 ; 
  let tempHead = head;
  while(tempHead){
   tempHead = tempHead.next;
   length++;   
  }  
  // Now we have length and we have n and we need to remove from last means length - n-1
 let nodeBeforeDelete = head  
 while(length - n - 1 > 0){
   nodeBeforeDelete = nodeBeforeDelete.next;
    length--; 
 } 
   // Case when we don't go inside condition and we may need to remove head it self and change current head 
    if(length - n === 0){
      head = head.next;
      return head;
    }
 // At this point you reached at the node before the deleteNode 
    let deleteNode = nodeBeforeDelete.next
    let nodeAfterDelete = deleteNode.next;
    nodeBeforeDelete.next = nodeAfterDelete;
 return head;   
}

// Learned one more solution from pepcoding  (Two pointer solution)
// https://www.youtube.com/watch?v=ZVtJu3DpZHU
