
function findFactorialIterative(n){
 let res = 1;
 for(let i =  n ; i >= 1 ; i--){
   res*=i
 }
 return res;
}

//
function findFactorialRecursive(n){
  if(n === 1 ){
    return n;
  }
  
  let res = findFactorialRecursive(n-1); // a lot to understand here see you do n-- then call function
                                         // and you do n-1 inside function both change the result
  return res*n                           // Understand first we need result and then we want to decress the number
}
console.log(findFactorialRecursive(5));