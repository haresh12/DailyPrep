
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    return this.first;  // peeks always first item
  }

  enqueue(value){
   if(!value) return undefined
   const newNode = new Node(value);
   if(this.length === 0 ){
    this.first = this.last = newNode;
   }else{
    this.last.next = newNode;
    this.last = newNode
   }
   this.length++
   return this.length;
  }

  dequeue(){
    if(this.length === 0) return undefined;
    if(this.length === 1){
      this.first === this.last === null;
      return --this.length;
    }
    this.first = this.first.next;
    return -- this.length;
  }
  isEmpty(){
   return this.length === 0
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
queue.peek();