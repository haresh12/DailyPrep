/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1] // Need to return the indexes (indices)

Approch First comes in mind : loop through array and store each value in object now
before storing value in obj check that target - value = newValue is exist in object
if yes then you found th ans. Because if target - value = newValue then target = value + newValue.
*/


function twoSum(nums,target){
  let seen = {};
  for(let i = 0 ; i < nums.length ; i++){
     let rem = target - nums[i];
     if(rem in seen){
       return [seen[target - nums[i]],i];
     }else{
      seen[nums[i]] = i;
     }
  }
}

const result = twoSum([2,7,11,15],90); // Try any input
console.log(result);