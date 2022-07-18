// GOOD TO KNOW THAT : ARRAYS IN JAVASCRIPT ARE OBJECT WITH INTEGER BASED KEY   

class MyArray {

  // Get execute whenever we initialize the class or in simple word we create object of that class.
  constructor(){
  this.length = 0 ; // this will be used to manage the length of array.
  this.data = {};   // this is where we will store the data
  }
 
 // Access element from array 
 
 get(index){
  if(index >= this.length) return -1; // this condition won't work because we can add only one element at index 100  because its just key value see insert method
  return this.data[index]; // its like accessing value from object myObj['nameOfTheKey'] here key will be index
 }

 push(item){
  this.data[this.length] = item; 
  return ++this.length;  // Push method returns new length of array 
  // if you use this.length++ then it will do return first and then will increment the value its like pre and post increment
 }

 //Remove the last item from array and returns it if array is empty then return undefiend 
 pop(){
  if(this.length > 0){
    const deleteItem = this.data[this.length -1];
    delete this.data[this.length -1]; // Why can't we directly use deleteItem like delete deleteItem;
    this.length--;
    return deleteItem;
  }
 }

 // ['a','b','c']
// Add item at first place of array
// Not optimized method but brute force solution for this method
 unshift(item){
  if(this.length === 0){
   return this.push(item); // for first item it will work same as push 
  }else {
    for(let i = 0  ; i < this.length ; i++){
        let store = this.data[i+1]
        this.data[i+1] = this.data[0];
        this.data[0] = store;
    }
    this.data[0] = item
    return ++this.length;
  }
 }

 shift(){
  if(this.length === 0) return this.length; // can not delete anything if we don't have any data
  if(this.length === 1){
    return this.pop(); // if only one item then it work same as pop()
  }else{
    for(let i = 0 ; i < this.length ; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length -1]; // index will be always length-1
   return --this.length;
  }
 }

 // insert at any index expect 2 params first index : in which you want to add the value and second item which you want to add.
 insert(index,item){
  if(index < 0) return
    // this will be same as unshift just need to start from specific index
    for(let i = index ; i < this.length ; i++){
        let store = this.data[i+1];
        this.data[i+1] = this.data[index];
        this.data[index] = store
    }
    this.data[index] = item;
    return ++this.length
  }
}

const array = new MyArray();
// array.unshift(10); 
// console.log(array) 
// array.unshift(20); 
// console.log(array)  
// console.log(array.get(10));
// array.push(10);
// console.log(array);
// array.push(10);
// array.push(20);
// array.push(30);
// array.push(40);
// console.log(array);
// console.log(array.pop());
// console.log(array);
// console.log(array.pop());
// console.log(array);
// console.log(array.pop());
// console.log(array);
// console.log(array.pop());
// console.log(array);
// console.log(array.pop());
// console.log(array);
// console.log(array.pop());
// console.log(array);
// console.log(array.pop());
// console.log(array);
// console.log(array.pop());
// console.log(array);
// console.log(array.pop());
// console.log(array);
// console.log(array.push(80));
// console.log(array);
array.push(10)
array.push(20)
array.push(30)
array.push(40)
array.push(50)
array.push(60)

array.insert(2,'a')

console.log(array)

