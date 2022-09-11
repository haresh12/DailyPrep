/*
   Need to print factorial here no much explanation needed as already did in past
*/

// THIS ONE IS EASY TO UNDERSTAND 
function getFactorial(n){
if(n === 1){
  return 1
}
  return n * getFactorial(n-1);
}

console.log(getFactorial(3))
