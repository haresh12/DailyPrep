class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
  if(this.length === 0) return null;
  return this.top
  }
  push(value){
  let newNode = new Node(value);
  if(this.isEmpty()){
    this.top = this.bottom = newNode;
  }else{
   const holdingPointer = this.top; // current top
   this.top = newNode // whatever we add new will become this top 
   this.top.next = holdingPointer // THIS IS INCREDIBLE LINE NEW NODE BECOME TOP NODE BUT PAST TOP NODE BECOME NEXT OF NEW NODE
   // Suppose 10 is top node now and you are adding 20;
   // then first we hold reference of 10 ;
   // make top node to 20 but at this stage 20 and 10 are not connect but 20 is at top
   // Now last step to connect 20 and 10 just assign value to top.next 20NODE.NEXT = 10NODE
  }
  this.length++;
  return this.length;
  }
  pop(){
  if(this.isEmpty()) return undefined;
  if(this.length === 1) {
    this.bottom = this.top = null;
    this.length --;
    return this.length;
  }
  this.top = this.top?.next;
  this.length --;
  return this.length; // just to return deleted node we are storing reference in variable
  }

  isEmpty(){
    return this.length === 0 ;
  }
}

let stack = new Stack();
stack.push('google');
stack.push('udemy');
stack.push('discord');
stack.pop();
stack.pop();
stack.pop();

console.log(stack)


