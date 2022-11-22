/*
   Leetcode : 70 climb stairs (NO EXPLANATION NEEDED FAMOUS QUESTION)
   If we are not going to use dp in this question then its impossible to submit in leetcode
   just try with n = 45 see how program goes without dp
*/

// Good job in first program we are using dp
function climbstairs(n,count,memo){
  if(n === 0){
    return ++count
  }
  if(n < 0){
    return count;
  }
 if(memo[n]){
  return memo[n];
 } 
 let nm1 = climbstairs(n-1,count,memo);
 let nm2 =  climbstairs(n-2,count,memo);
  memo[n] = nm1+nm2;
 return memo[n];
}

console.log(climbstairs(3,0,{}));