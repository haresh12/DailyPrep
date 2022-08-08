// BIG NOTE : NEVER CHECK C0NDITION LIKE THIS : IF(VALUE) IF(!VALUE) BECAUSE IF VALUE IS 0 THEN
// INSIDE CONDITION JAVASCRIPT TAKES AS FALSE AND IF 1 THEN JS WILL CONSIDER AS TRUE
class Node {
  constructor(value,next){
    this.value = value;
    this.next = next;
  }
}
class LinkedList {

  constructor(value) {
    this.head = new Node(value, null);
    this.tail = this.head;
    this.length = 1;
  }

 append(value){
  if(value == null || value === undefined)return;
  const newNode = new Node(value,null);
  this.tail.next = newNode;
  this.tail =  newNode;
  this.length++
  return this.length
 } 

 prepend(value){
  if(!value) return;
  const newNode = new Node(value,null);
  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  return this.length;
}

// DRAW AND DO AS MAY AS TIME YOU CAN 
// https://www.youtube.com/watch?v=71NqKy7287g
reverse(){
  if(this.length === 1) return this.head;
   let prev = null;
   let current = this.head;
   while(current){
    let next = current.next
    current.next = prev;
    prev = current;
    current = next; // this way it will move ahead 
   }
   // Now till this point all the points are connected to prev node
   // Only thing we need to do is swap the head and tail
   let temp = this.head;
   this.head = this.tail;
   this.tail = temp;
  return this; 
 }
insert(index , value){
  if(!value || index === undefined) return;

  // what if index is greater then or equal to the length of linked list in that case we need to append it to last
  if(index >= this.length){
    return this.append(value); // which add value at the end to list
  }
  if(index === 0){
    return this.prepend(value); // because this handles all head and tail referance stuff
  }
  const newNode = new Node(value);
  let nodeBefore = this.head;
  // index !== 1 because we need node before index where we want to add the value
  while(index > 1){
    nodeBefore = nodeBefore.next;
    index--;
  }
  newNode.next = nodeBefore.next;
  nodeBefore.next = newNode;
  this.length++
  return this.printList();
}
// if you will pass indext 0 then js will treat as boolean and !0 is going to be true and we will return from condition

 remove(index){
   if(index === undefined  || index >= this.length) return;
   let nodeBefore = this.head;
   while(index > 1){
    nodeBefore = nodeBefore.next;
    index--;
   }
   let removeNode = nodeBefore.next; // this is the node we need to remove
   let nextNode = removeNode.next; // this is the node we have after the node that we need to remove
   nodeBefore.next = nextNode; // so only thing we have to do is connect nodeBefore directly to nextNode this way remove node won't have any reference.
   this.length--;
   return this.printList()
 }
   // to print all the values of LinkedList
   printList(head){
     let array = [];
     let currentNode = head;
     while(currentNode !== null){
       array.push(currentNode.value)
       currentNode = currentNode.next;
     }
     return array;
   }
}

const list = new LinkedList(10);
// list.append(20);
// list.append(30);
// list.append(40);
// console.log(list.reverse())

const l1  = new LinkedList(3);
l1.append(7);



const l2  = new LinkedList(9);
l2.append(2);


// First biggest code ever written by my self 
function addTwoNumbersLeetCode2(l1,l2){
 let first = l1.head;
 let second = l2.head;
 let l3 = new Node((first.value + second.value)%10, null);
 let head = l3; // THIS IS WHERE I LEARNED 20% OF LINKEDLIST
 let fn = first.next;
 let sn = second.next;
 let addOne = first.value + second.value >=10 ? true : false;
 while(fn  && sn ){
  let val = (fn.value + sn.value);
  if(addOne){
    val+=1;
    addOne = false;
  }
  let newNode = new Node(val%10,null);
  if(val >= 10){
    addOne = true;
  }
  l3.next = newNode;
  l3 = newNode
  fn = fn.next;
  sn = sn.next;
 }
 while(fn){
  let val = fn.value;
  if(addOne){
    val+=1;
    addOne = false;
  }
  let newNode = new Node(val%10,null);
  l3.next = newNode;
  l3 = newNode
  fn = fn.next;
  if(val >= 10){
    addOne = true;
  }
 }
 while(sn){
  let val = sn.value;
  if(addOne){
    val+=1;
    addOne = false;
  }
  let newNode = new Node(val%10,null);
  l3.next = newNode;
  l3 = newNode
  sn = sn.next;
  if(val >= 10){
    addOne = true;
  }
 }
 // Even after doing all this if we still have addOne true means we still need to add one more
 // node at last with val 1 because why val 1 because max 9 + 9 can be 18 we adding modulo and 
 // passing reminder 1 to next number. (HARD TO EXPLAIN BUT EASY TO UNDERSTAND)
 console.log(addOne)
 if(addOne){
  let newNode = new Node(1,null);
   l3.next = newNode;
 }
 return head; 
}

const head = addTwoNumbersLeetCode2(l1,l2);
// console.log(head)


// Remove Duplicates from Storted List
const l4  = new LinkedList(1);
l4.append(1);
l4.append(2);
l4.append(3);
l4.append(3);
l4.append(4);
l4.append(4);
function removeSortedList(){
 let map = {}
 let head = l4.head;
 let index = 0;
 while(head){
   if(map[head.value]){
     
   }
 }
}

// console.log(JSON.stringify(removeSortedList()))

const linkedList = new LinkedList(1);
linkedList.append(0)
linkedList.append(1)

// TOOK ALMOST 1 HOUR NOT THAT GOOD FOR EASY PROBLEM
function isPalindromLinkedList(){
let s1 = [];
let currentHead = linkedList.head;
let tempHead = linkedList.head;
while(tempHead != null){
  s1.push(tempHead.value)
  tempHead = tempHead.next;
}
while(currentHead != null){
  if(currentHead.value !== s1.pop()){
    return false
  }
   currentHead = currentHead.next;
}
return true;
}

console.log("isPalindromLinkedList",isPalindromLinkedList())



