/*
    Leetcode : 142 

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed).
It is -1 if there is no cycle. Note that pos is not passed as a parameter.
*/


class Node {
  constructor(val){
    this.val= val;
    this.next = null
  }
}
// PRODULY DONE IN 8 MIN WITHOUT ANY MISTAKE
function intersectionPoint(head1,head2){
 if(head1 === null || head1 === null) return null;
 let head1Length = 0;
 let head2Length = 0;
 let temp1 = head1;
 let temp2 = head2
 let head1Diff = 0; 
 let head2Diff = 0; 

 while(temp1){
  temp1 = temp1.next
  head1Length++;
 }
 while(temp2){
  temp2 = temp2.next;
  head2Length++;
 }

 if(head1Length > head2Length) {
   head1Diff = head1Length - head2Length;
 }else{
    head2Diff = head2Length - head1Length;
 }
 // reset
 temp1 = head1;
 temp2 = head2;
 if(head1Diff > 0){
  while(head1Diff !== 0){
    temp1 = temp1.next;
    head1Diff--;
  }
 }else{
    while(head2Diff !== 0){
      temp2 = temp2.next;
      head2Diff--;
    }
 }
 
 // IMPORTENT STEP STARTS NOW
  while(temp1 !== null && temp2 !== null){ 
     if(temp1 === temp2){   // should be checked first [1] [1] test case failed if put aftert
      return temp1;
    }
    temp1 = temp1.next;
    temp2 = temp2.next;
    // if(temp1 === temp2){ . Again isne dokha diya 
    //   return temp1;
    // }
  }
  return null
}

/*
   https://www.youtube.com/watch?v=G3-DhRFnUEA
  Now this question can be also done with floyd cycle detection algorighm but for that we need
  to do one extra thing like creating cycle between this two nodes.

  So loop through any list like list1 or list2 and suppose i am looping through list 1 and 
  find the tail of that list now once you find the tail connect it with head of list2 AND
  DON'T BE CONFUSE HERE ALL WE DID IS CREATED CYCLE BETWEEN 2 LIST NOW WE HAVE CYCLE AND 
  WE NEED TO FIND STARTING POINT 

  SIMPLE ONE STEP LOOK INTO QUESTION 21 FROM FLODER WHERE YOU NEED TO FIND STARTING POINT OF
  CYCLE BY FLOYED ALGORIGHM ONLY DIFFERENCE IS THAT WE DON'T NEED TO WRITE DETECT CYCLE FUNCTION
  BECAUSE WE ARE SURE THE THERE IS CYCLE : becasue hmne hi bnai he bhai

  THIS IS JUST ANOTHER WAY TO DO THIS QUESTION I THINK ABOVE SOLUTION IS ALSO FINE
*/