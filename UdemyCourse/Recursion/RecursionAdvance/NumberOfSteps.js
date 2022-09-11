/*
  Leetcode 1342 :

  Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

var numberOfSteps = function(num) {
  let findSteps = getSteps(num,0);
  return findSteps;   
 };
 
 function getSteps(number,count){
   if(number === 0){
     return count;
   } 
   if(number%2 === 0){
      return getSteps(number/2,count+1);
   }
   return getSteps(number-1,count+1);  
 }

 console.log(numberOfSteps(14))