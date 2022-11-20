/*
  Leetcode : 21
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

This question is easy with array but reqirement is we need to do it with LINKEDLIST ALSO

*/

// First merge to sorted arraylist
let list1 = [0]
let list2 = [1,3,4]

function mergeTwoArrayList(list1,list2){
  if(list1.length === 0 && list2.length === 0){
    return [];
  }else if(list1.length === 0){
    return list2;
  }else if(list2.length === 0){
    return list1;
  }
  let list = [];
  let i = 0;
  let j = 0;
  let total = list1.length + list2.length;
  while(i + j < total){
    if(list1[i] && list2[j]){
      if(list1[i] < list2[j]){
        list.push(list1[i]);
        i++;
      }else{
        list.push(list2[j]);
        j++;
      }
    }else{
      while(i < list1.length){
        list.push(list1[i]);
        i++;
      }
      while(j < list2.length){
        list.push(list2[j]);
        j++;
      }
    }
  }
  return list;
}

console.log(mergeTwoArrayList(list1,list2));

// With LinkedList

class Node {
  constructor(val,next){
    this.val = val;
    this.next = next;
  }
}
// first linked list
let ll1 = null;

// second linked list
let ll2 = {
  val : 1,
  next : null
}

// GOOD JOB WITH THIS TRY TO JUST REDUCE THE CODE DONE BY SELF GREAT
function mergeTwoLinkedList(ll1,ll2){
  let head = null;
  let list = null;
  while(ll1 && ll2){
    let newNode = null;
    if(ll1.val < ll2.val){
       newNode = new Node(ll1.val,null);
       ll1 = ll1.next;
    }else{
      newNode = new Node(ll2.val,null);
      ll2 = ll2.next;
    }
    if(head === null){
      list = head = newNode;
   }else{
      list.next = newNode;
      list = newNode;
   }  
  }

  while(ll1){
    let node =  new Node(ll1.val,null)
    if(head === null){
      list = head = node;
   }else{
    list.next = node;
    list = node;
   }
   ll1 = ll1.next
  }
  while(ll2){
    let node =  new Node(ll2.val,null)
    if(head === null){
      list = head = node;
   }else{
    list.next =node;
    list=node;
   }
   ll2 = ll2.next
  }
  return head;
}

console.log(JSON.stringify(mergeTwoLinkedList(ll1,ll2)))
