/*
   Leetcode : 326
   Given an integer n, return true if it is a power of three. Otherwise, return false.
   An integer n is a power of three, if there exists an integer x such that n == 3x.

   Input: n = 27
   Output: true
   Explanation: 27 = 33
*/

// Done by self but took almost 25 min for this easy question not good thing
// Some senario are getting faild with this approch like nagetive value and all
function powerOfThree(n){
 n = n < 0 ? Math.abs(n) : n; // Here we are going to get negative number also so Math.abs() used to make it positive
 for(let i = 1 ; i*i <= n ; i++){
   if(Math.pow(3,i) === n){
    return true
   }
 }
 return false
}

console.log(powerOfThree(-81));

function powerOfThreeEasy(n){
  if(n === 0) return false;
  while(n%3 === 0){
    n=n/3;
  }
 return n === 1 ? true : false; 
}

console.log(powerOfThreeEasy(-81));
