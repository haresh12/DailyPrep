/*
  Find factorial with  recursive call
  5! = 5*4*3*2*1
*/
// See these are easy code and and thats why we are not drawing trees and all but make sure
// when it comes to hard problem then first it should be solved on pen and paper and then in code
function findFact(n){
  if(n === 1){
    return 1;
  }
  let output =  n * findFact(n-1)
  return output
}

function sumofN(n){
  if(n === 1){
    return 1;
  }
  let output = n + sumofN(n-1);
  return output;
}
// console.log(sumofN(10))
// console.log(findFact(8));


/*
 so if n is 1342 then ans should be 1+3+4+2
*/
function sumOfDigit(n,ans){
 n = Math.floor(n)  // always make sure this weird thing about js
 if(n === 0){
   return ans;
 }
  let digit = n%10;
   ans = ans + digit;
   n = n/10;
  return sumOfDigit(n,ans)
}

console.log(sumOfDigit(0,0))