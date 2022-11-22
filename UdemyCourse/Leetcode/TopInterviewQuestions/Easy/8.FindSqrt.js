/*
  Leetcode 69 : Find Square root (MATHS QUESTION NEED TO DONE)

 This is the easiest question till now but still was not able to do it becasue of formula thing

 Just remember i * i condition thing lets see one example

 Suppose we want fo find sqrt of 20 :

 1*1 = 1 < 20; // update sqrt value
 2*2 = 4 < 20; // update sqrt value
 3*3 = 9 < 20 // update sqrt value
 4*4 = 16 < 20 // update sqrt value
 5*5 = 25 > 20 // Now don't update sqrt value because current sqrt value is bigger then value for that
 we are trying to find sqrt so just return last value of sqrt which is 4
*/

function findSqrt(x){
let sqrt = 1;
if(x === 0){
  return 0;
}
 for(let i = 1 ; i*i<=x ; i++){
   sqrt = i;
 }
 return sqrt;
}

console.log(findSqrt(8))