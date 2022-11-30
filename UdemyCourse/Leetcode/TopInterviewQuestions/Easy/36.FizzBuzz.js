/*
   Leetcode : 412 
   Given an integer n, return a string array answer (1-indexed) where:
   answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
   answer[i] == "Fizz" if i is divisible by 3.
   answer[i] == "Buzz" if i is divisible by 5.
   answer[i] == i (as a string) if none of the above conditions are true.
*/

// No explanation simple one to do
function fizBuzz(n){
  let i = 1;
  let arr = new Array(n);
  while(i <= n){
    if(i%3 === 0 && i%5 === 0){
       arr[i-1] = 'FizzBuzz'
    }else if(i%3 === 0){
      arr[i-1] = 'Fizz'
    }else if(i%5 === 0){
      arr[i-1] = 'Buzz'
    }else{
      arr[i-1] = `${i}`; // UNDERSTAND WHY WE NEED TO CONVERT IT TO STRING ELSE IT WILL OUTPUT LIKE NUMBERS AND STRINGS IN ARRAY
    }
    i++;
  }
 return arr; 
}
console.log(fizBuzz(15));