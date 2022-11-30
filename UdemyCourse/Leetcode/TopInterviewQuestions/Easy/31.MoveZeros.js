/*
   Leetcode : 283 
   Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
   Note that you must do this in-place without making a copy of the array.

   Input: nums = [0,1,0,3,12]
   Output: [1,3,12,0,0]
*/

// SIMPLE THING THIS QUESTION IS ALL ABOUT DRY RUN GOOD JOB DONE BY SELF
// MOVE EVEN NUMBER ON END MOVE GREATER OR LESS THEN SPECIFIC NUMBER ALL 
// THIS TYPE OF QUESTION CAN BE DONE BY THIS TECHNIQUE.
function moveZeros(arr){
let i = 0;
let j = 0;

while(i < arr.length){
  if(arr[i] !== 0){
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i++;
    j++;
  }else{
    i++;
  }
}
return arr;
}

console.log(moveZeros([0,1]))