
/*
 In this you will have target and you will have one array you need to find all possible 
 number which is sum can become ===  target ; // THIS QUESTION IS DIFFERENT THEN TARGET SUM
 let arr = [1,2,3,4,5,6] target 4
 now important thing here is [1,1,1,1] so basically if we take 1 for time then we can 
 achive target here same with 22 same with 112 so here you can repeat
*/

// THIS IS NOT DONE WHY WE ARE NOT TAKING ARRAY HERE 
// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/ (I GOT PROBLEM TOTALLY WRONG)
function getTargetSum(str,target){
if(target === 0){
  console.log(str)
  return; 
}
 for(let i = 1 ; i<=6 && i <= target; i++){
  getTargetSum(str+i,target-i);
 }
}
getTargetSum('',10); // initaily reminder should be equal to target