// https://www.youtube.com/watch?v=jhm2pYGFIos&list=PL-Jc9J83PIiF5VZmktfqW6WVU1pxBF6l_&index=40
// From 30 to 54 do with practical do questions
// Slow and fast question
// Talking new list
// Merge two list this all are incredible question so do it 
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class PLinkedList {
  constructor(head,tail,size){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // function that helps us to add at last
  addLast(val){
  if(!val)return
  let newNode = new Node(val);
  if(this.head === null){
    this.head = this.tail = newNode;
  }else{
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
  }

  display(){
   if(!this.head) return null;
   let str = '';
   let temp = this.head
   while(temp){
    str+=temp.data+" " // bhai temp koi global variable nhi he jo this se access kr rhe ho
    temp = temp.next;
   }
   return str 
  }

  length(){
    return this.size;
  }

  removeFirst(){
   if(this.size === 0) return 'List is empty';
   let remove = this.head.data; // Only if you want to return value ki kya delete hua he
   if(this.size === 1){
    this.head = this.tail = null;
   }else{
     this.head = this.head.next;
   }
   --this.size;
   return remove;
  }

  getFirst(){
    if(this.size === 0) return 'List is empty';
    return this.head
  }

  getLast(){
   if(this.size === 0) return 'List is empty';
   return this.tail;
  }

  getAt(idx){
    if(idx < 0 || idx >= this.size) return 'Invalid arguments';

    if(idx === 0){
      return this.getFirst();
    }else if(idx === this.size - 1){
      return this.getLast();
    }else{
      let temp = this.head;
      while(idx > 0){ // UNDERSTEND THIS CONDITION BECAUSE YOU TRIED WEIRD ONE LIKE idx < 0 really
        temp = temp.next;
        idx--;     
      }
      return temp;
    }
  }

  addFirst(val){
    if(!val) return 'Invalid argument';
    let node = new Node(val);
    if(this.size === 0){
      this.head = this.tail = node;
    }else{
       node.next = this.head;
       this.head = node;
    }
    this.size++;
  }

// Good job here
  addAt(idx,val){
    if(idx < 0  || idx > this.size) return 'Invalid Arguments'
    if(idx === 0){
      this.addFirst(val);
    }else if(idx === this.size){
        this.addLast(val);
    }else{
        let newNode = new Node(val);
        let nodeBefore = this.head;
        while(idx > 1){
          nodeBefore = nodeBefore.next
          idx--;
        }
        let nodeBeforeNext = nodeBefore.next;
        nodeBefore.next = newNode;
        newNode.next = nodeBeforeNext;
        this.size++; // Bul gya tha ye worst mistake then that is try to put this outside of else
    }
  }

  removeLast(){
    if(this.size === 0) return 'List is empty'
    if(this.size === 1) {
     return this.head = this.tail = null;
    }else{
       let nodeBefore = null;
       let temp = this.head;
       while(temp.next){
        nodeBefore = temp;
        temp = temp.next;
       }
       let remove = this.tail
       nodeBefore.next = null;
       this.tail = nodeBefore;
       return remove.data
    }
    --this.size; // AGAIN AGAIN AGAIN AGAIN BUL GYA
  }

/*
   Impresive job really :
      // if(i === 1){
      //   this.head = this.tail;
      //   this.tail = orignalHead;
      // }

  Only one mistake  need to understand here is that why even we don't need to change head and tail
  AND SIMPLE ANSWER IS THAT QUSTION IS ABOUT REVERSE A LIST NOT ABOUT CHANING HEAD TAIL ALSO UNDER
  STAND WE ARE JUST PLAYING WITH VALUES (DATA) NOT THE OBJECT ADDRESS SO WHEN YOU ARE SWAPPING THE
  VALUE AUTOMATICALLY VALUE OF HEAD WILL BE 80 AND TAIL WILL BE 10 UNDERSTAND ONLY VALUE WILL BE
  REPLACE BUT ADDRESS STILL WILL BE THE SAME OF HEAD AND TAIL    
*/
  reverse(){
    if(this.size === 0) return 'Reverse krne ke liye kush hai he nhi'
    if(this.size === 1) return this.list; // jo he vahi list vapis le jao
    let half = Math.floor(this.size/2);
    let temp = this.head;
    for(let i = 1 ; i <= half ; i++){
      let left = temp;
      let right = this.getAt(this.size - i);
      let tempdata = right.data;
      right.data = left.data;
      left.data = tempdata;
      temp = temp.next;
    }
  
    return this.display();
  }

  /*
  MUCH BIGGER PROBLEM THEN DSA :
  WHY THE HELL this.head IS GETTING CHANGED HERE IN CONSOLE I AM NOT MAKING ANY CHANGES IN HEAD THE 
  THEN WHY VALUE IS BEING REPLECED WHATEVER VALUE WE HAVE IN CURRENT.

  SIMPLE SOLUTION FOR NOW IS JUST USE SPREAD OPERATOR AND COPY OBJECT RETHER THEN PROVIDING THE  REFERECE TO
  reversePointer(){
  let prev = null;
  let current = this.head;
  let temp = this.head;
  console.log('this',this.head)
  while(temp){
    current.next = prev;
    temp = temp.next;
    prev = temp;

  }
   console.log(this.head)
   console.log(this.tail)
  }

  */
 // UNDERSTAND THIS 10 TIMES MAINLY LINE NUMBER 190 WHY WE NEED THIS UNDERSTAND
  reversePointer(){
    let prev = null;
    let current = {...this.head}
    while(current){
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this.display(this.head)
  }

  removeAt(idx){
    if(idx < 0 || idx >= this.size) return 'Invalid Argument'
    if(idx === 0) return this.removeFirst();
    if(idx === this.size -1) return this.removeLast()
    if(this.size === 1){
      this.head = this.tail = null
      this.size--;
      return null;
    }
    let nodeBefore = this.head;
    while(idx > 1){
      nodeBefore = nodeBefore.next;
      idx--; // KYA MATLAB INDEX KI IZAT HE NHI HE
    }
    let remove = nodeBefore.next;
    nodeBefore.next = remove.next; // REMOVE KATA BICH ME SE KOI REFERENCE NHI RHA
    
    return remove.data
  }
  /*
    This is new trick that we are using in few question like taking two nodes and move 
    one fast and one slow. TWO EXAMPLE WE WILL DO FIRST FIND MID AND SECOND FIND K ELEMENT
    FROM LAST
  */
  mid(){
    let slow = this.head;
    let fast = this.head;
    while(fast.next !== null && fast.next.next !== null){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }

  findKFromLast(k){
    let slow = this.head;
    let fast = this.head;

    // Phele jitna k hai utne kadam fast ko aage bda do
    for(let i = 0 ; i <= k ; i++){
       fast = fast.next;
    }

    // Ab fast slow se k kadam aage hoga. Now dono ko ek ek step aage bdao jab tak fast null nhi hota
    while(fast){
      slow = slow.next;
      fast = fast.next;
    }
   return slow.data 
  }

}

const list = new PLinkedList();
console.log(list.addAt(0,10))
console.log(list.addAt(1,20))
console.log(list.addAt(2,30))
console.log(list.addAt(3,40))

console.log("Mid of the list ",list.mid())
console.log("K from the last  ",list.findKFromLast(2))

// Last in first out
/*
  HERE ONLY ONE THING TO UNDERSTAND THAT WE CAN USE 2 DIFFERENT COMBINATION
  1. addFirst() getFirst() and removeFirst()
  2. addLast()  getLast() and removeLast()

  but we are going with first one because in second on removeLast() this operation cost is o(N)
  where in first approch all operation are o(1). NOTE THIS IS BECAUSE WE ARE USING SINGLY LINKED
  LIST IN LANGUEGE LIKE JAVA removeLast() takes O(1) time because internally they are using 
  Doubly linked list
*/
class Stack {
  constructor(){
    this.list = new PLinkedList()
  }
  
  peek(){
    return this.list.getFirst();
  }
  size(){
    return this.list.length();
  }
  pop(){
    return this.list.removeFirst();
  }
  push(val){
    this.list.addFirst(val)
  }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.push(25);
console.log(stack.peek());
console.log("Stack size",stack.size())
console.log(stack.pop());
console.log("Stack size",stack.size())
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log("Stack",stack);

// FIRST IN FIRST OUT
/*
   No explanation needed if you understand stack and this queue is very simple to understand
*/
class Queue {
  constructor(){
   this.list = new PLinkedList();
  }
  size(){
    return this.list.length();
  }
  add(val){
    return this.list.addLast(val);
  }
  peek(){
    return this.list.getFirst();
  }
  remove(){
    return this.list.removeFirst();
  }
}

const queue = new Queue();
queue.add(10);
queue.add(20);
queue.add(30);
queue.add(40);

console.log(queue.remove());
console.log(queue)

