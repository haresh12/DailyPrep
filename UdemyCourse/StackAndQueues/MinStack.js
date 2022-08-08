// THE ONLY PROBLEM WITH THIS APPORCH IS THIS WILL CHANGE THIS SEQUENCE OF ARRAY ITMES
// -2,0,-3 => 0,-2,-3 BUT IMPORTANT THING IS THAT THIS WAY WE CAN HAVE ENTIRE ARRAY SORTED
// ANYWAY THIS IS GOOD SOLUTION BUT AS ITS CHANGING SEQUENCE OF ARRAY ITEM ITS NOT ACCEPTED IN
// LEETCODE WE WILL WRITE SOLUTION TWO AND WILL SAY SOLUTION ONE FOR SORTED ARRAY.
class MinStackLeedCode115 {

  constructor(){
    this.data = [];
  }

  push(val){
   if(this.data.length === 0){
    this.data.push(val);
   }else{
    let currentPeek = this.data[this.data.length - 1];
    if(currentPeek < val){  // THIS CONDITION IS IMPORTENT WE MADE MISTAKE HERE LIKE CURRENTPEEK > VAL
      this.data.pop();
      this.data.push(val);
      this.data.push(currentPeek);
    }else{
      this.data.push(val)
    }
   }
  }

  pop(){
    this.data.pop(); 
  }

  top(){
    return this.data[this.data.length -1];
  }

  getMin(){
    return this.top();
  }
}
const data = new MinStackLeedCode115();
data.push(-2);
data.push(0);
data.push(-3)
console.log(data.getMin())
data.pop();
console.log(data.top())
console.log(data.getMin())
console.log(data)

class MinStackTwo {

  constructor(){
    this.data = [];
  }
  push(val){
    this.data.push({
      value : val,
      min : this.data.length === 0 ? val : Math.min(val,this.getMin())
    })
  }
  getMin(){
    return this.data[this.data.length - 1].min
  }
  top(){
    return this.data[this.data.length - 1].val;
  }
  pop(){
      this.data.pop()
  }
}