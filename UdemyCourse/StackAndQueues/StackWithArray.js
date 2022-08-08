// STACK IS  SUPER EASY TO BUILD WITH ARRAY
class StackWithArray {

  constructor(){
    this.data = [];
  }

  push(value){
   return this.data.push(value);
  }

  pop(){
    return this.data.pop();
  }

  peek(){
    return this.data[this.data.length - 1];
  }
  
  size(){
    return this.data.length;
  }
  isEmpty(){
    return this.data.length === 0;
  }
}

class QueueFromStack {
  constructor(){
    this.stackOne = new StackWithArray();
    this.stackTwo = new StackWithArray();
  }

  enqueue(value){
    if(!value) return null
     return this.stackOne.push(value)
  }
  peek(){
    if(this.stackOne.size() === 0) return null;
    while(!this.stackOne.isEmpty()){
      this.stackTwo.push(this.stackOne.pop())
    }
    const value = this.stackTwo.peek()
    while(!this.stackTwo.isEmpty()){
      this.stackOne.push(this.stackTwo.pop())
    }
    return value;
  }

  // this is O(n) operation not really logic thing to do in real time scenario
   dequeue(){
    if(this.stackOne.size() === 0) return null;
      while(!this.stackOne.isEmpty()){
        this.stackTwo.push(this.stackOne.pop())
      }
      const deleteItem = this.stackTwo.pop();
      while(!this.stackTwo.isEmpty()){
        this.stackOne.push(this.stackTwo.pop())
      }
      return deleteItem;
   }

   isEmpty(){
    return this.stackOne.isEmpty();
   }
}

const queue = new QueueFromStack();

console.log(queue.isEmpty())
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.size())
console.log(queue.dequeue())
console.log(queue.size())

console.log(queue)
