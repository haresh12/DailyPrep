// Good
function fibonacciIterative(n){
  if(n < 2){
    return n;
  }
 let first = 0;
 let second = 1;
 for(let i = 2 ; i <= n ; i++){
   let output = first + second;
    first = second;
    second = output;  
 }
 return second;
}
console.log(fibonacciIterative(7))
// done it by self but lot to learn 
//https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12394682#questions
// because of wrong solution in video we have time complexity O(2^n) but this below solution we have o(n)
function fibonacciRecursive(n,first,second){
  if(n < 2){
    return n;
  }
 if(n === 2){
   return first + second;
 }
 let output = first + second;
 let res = fibonacciRecursive(n-1,second,output)
 return res
}
console.log(fibonacciRecursive(100,0,1))
