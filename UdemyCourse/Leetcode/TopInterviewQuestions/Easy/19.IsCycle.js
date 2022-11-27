/*

Leetcode  : 141
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list,
where the tail connects to the 1st node (0-indexed).
*/


class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// // In leetcode no position given so this one won't work
// function isCycle(node,pos){
//  if(node === null || pos < 0) return false;
//  // step first find node in that position.
//  let nodeAtPos = getNodeAt(node,pos)
//  // step two loop through the list from head to tail in nodeAtpos count is 2 then cycle else not
//  let head = node;
//  let count = 0;
//  while(head == null || count == 2){
//     if(head === nodeAtPos){
//       count++;
//     }
//     head = head.next;
//  }
//   return count === 2;
// }

// function getNodeAt(node,pos){
//   let nodeAtPos = node;
//   while(pos !== 0 && node != null){
//     nodeAtPos = nodeAtPos.next;
//   }
//   return node;
// }

// non optimize solution with hashmap
 // Brut forst solution because for this we need to apply specific algorithem
 // Also this solution won't work when have same value in linked list like [2,2,2,2]
function isCycle(node){
let map = {};
let temp = node;
while(temp !== null){
  if(temp.val in map){
    return true;
  }
  map[temp.val] = true;
  temp = temp.next;
}
return false
}


/*
   So this is what we need to use here : Floyd's Cycle Detection Algorithm
   Approch is known as like slow and fast pointer
   https://www.youtube.com/watch?v=jcZtMh_jov0  Good Explanation
*/
function detectCycle(node){
 let slow = node;
 let fast = node;

 while(fast && fast.next){
    fast = fast.next.next; // Tum do kadam chlo
    slow = slow.next; // Hum ek kadam chalege is tarha khi raste pe mil jayege
    //This condition should be after we do fast.next.next and slow.next else vo aate he return 
    // true kr dega because starting me fast === slow hai hmne he rakha he
    if(fast === slow){
      return true
    }
 }
 return false
}

/*
  With help of above question we can do one more leetcode question which is starting point
  of cycle and here also we are going to use same above algorithm.

  STEP ONE SAME APPROCH FIND WHETHER WE HAVE CYCLE OR NOT 
  NOW SEE IF WE HAVE CYCLE THEN SLOW === FAST RIGHT THEN RETURN THEN NODE FROM 
  DETECT CYCLE FUNCTION ELSE RETURN NULL

  STEP TWO START ONE POINTER FROM ORIGNAL HEAD AND START ONE POINTER FROM SLOW OR FAST
  MOVE THEM ONE ONE STEP LIKE head.next And slow.next LOOP UNTIL BOTH ARE NOT SAME. 

  NO BECAUSE QUESTION IS HOW YOU ARE SURE THAT BOTH WILL BE SAME AT SOME POINT SO ANSWER
  IS THAT WE ARE DOING THIS STEP TWO ONLY IF WE DETECT THE CYCLE AND ACCORDING TO  FLYED
  ALGORITHM WE IF WE DO STEP TWO THEM WE CAN GET TO THE STARTING POINT

     https://www.youtube.com/watch?v=jcZtMh_jov0  Good Explanation HERE
*/

function detectCycleTwo(node){
 let slow  = node;
 let fast = node;
 while(fast && fast.next){
   fast = fast.next.next;
   slow = slow.next;
 }
 if(fast === slow){
  return fast;
 }
 return null;
}
// LEETCODE 142
function startingPoint(node){
  let temp = node;
  let end = detectCycleTwo(node);
  if(end === null){
    return null;
  }
  // YOU REACH HERE MEANS THERE IS 100% CYCLE
  while(true){
    if(temp === end){
        return temp;
       }
   temp = temp.next;
   end = end.next;
   // THIS CHANGES EVERYTHING THING WHY IT SHOULD BE ABOVE TWO LINE [1,2] TRY WITH THIS INPUT
  //  if(temp === end){
  //   return temp;
  //  }
  }
}