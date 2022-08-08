/*
   If we look into our current linked list code so in that we don't have any way to traverse backward so this is 
   where doubly linked list will be use and in doubly linked list we will able to traverse backward also because
   in that we are not managing next node but we will also manage the prev node.
*/
/*
   THERE ARE SOME OF THE EDGE CASES THAT WE NEED TO MANAGE LIKE NULL AND WHETHER WE HAVE NEXT VALUE OR PREV BEFORE MOVING IT
   THIS ALL THINGS NEED TO BE TAKE CARED HERE
*/
class Node {
  constructor(value,next,prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
class LinkedList {

  constructor(value) {
    this.head = new Node(value, null,null);
    this.tail = this.head;
    this.length = 1;
  }

 append(value){
  if(!value)return;
  const newNode = new Node(value,null);
  newNode.prev = this.tail; // this one line needed to add
  this.tail.next = newNode;
  this.tail =  newNode;
  this.length++
  return this.length
 } 

 prepend(value){
  if(!value) return;
  const newNode = new Node(value,null,null);
  this.head.prev = newNode;
  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  return this.length;
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
  // newNode.next = nodeBefore.next;
  // nodeBefore.next = newNode;
  // THIS INSERT PART IS HARDEST PART TO UNDERSTAND TILL NOW
  let followupNode = nodeBefore.next;
  followupNode.prev = newNode;
  newNode.next = followupNode   
  newNode.prev = nodeBefore; 
  nodeBefore.next = newNode;
  this.length++
  return this.printList();
}
// TO PRINT REVERSE LIST
 printReverseList(){
  let array = [];
  let currentNode = this.tail;
  // if we will check currentNode.prev !== null then it will miss the head part // MUST NEED TO THING BEFORE WRTINING CODE
  while(currentNode !== null){
    array.push(currentNode.value)
    currentNode = currentNode.prev;
  }
  return array
 }
 reverse(){
  if(this.length === 1) return this.head;
   let prev = null;
   let current = this.head;
   while(current){
    let temp = current;
     current.next = prev;
     current = current.next;
     prev = temp;
   }
  return current; 
 }
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
   nextNode.prev = nodeBefore; // as we removed node we need to update thre prev node of node after removed nodes
   this.length--;
   return this.printList()
 }
   // to print all the values of LinkedList
   printList(){
     let array = [];
     let currentNode = this.head;
     while(currentNode !== null){
       array.push(currentNode.value)
       currentNode = currentNode.next;
     }
     return array;
   }
}

const list = new LinkedList(10);
list.insert(1,4);
list.insert(2,6);
list.insert(3,14);
list.insert(2,18);
list.remove(1);
console.log(list.printList())
list.reverse();
console.log(list.printList())

