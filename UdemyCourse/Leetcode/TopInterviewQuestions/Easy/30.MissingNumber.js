/*
   Leetcode : 268
   Given an array nums containing n distinct numbers in the range [0, n],
   return the only number in the range that is missing from the array.

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.
*/

function missingNumberBruteforce(arr){
 if(arr.length === 0) return -1;
 let sortedArr = arr.sort((a,b) => a - b);
  
 for(let i = 0 ; i <=sortedArr.length ; i++){ // SEE FIRST TIME WE ARE RUNNING LOOP TILL arr.length BECAUSE 0 IS ALREADY INCLUDED IN NUMBER
  if(arr[i] !== i){
    return i;
  }
 }
}

// console.log(missingNumberBruteforce([3,0,1]));

/*
 TRY TO USE WHAT YOU HAVE LEARNED IN PAST HERE BEST EXAMPLE IT TAKING SUM OF ARRAY
 WE USED THAT IN SINGLENUMBER PROBLEM
*/ 
function missingNumberOptimized(arr){
 // forumal for 0 to n number of sum
 let n = arr.length;
 let ideaSum = n*((n+1)/2); // MUST REMEMBER
 let currentSum = 0;

 for(let i = 0 ; i < arr.length ; i++){
  currentSum+=arr[i];
 }
 console.log(ideaSum,currentSum)
 return ideaSum - currentSum;
}

console.log(missingNumberOptimized([0,1]))