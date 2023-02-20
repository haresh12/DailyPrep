/*
Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

Input: nums= [1, 2, 3, 4]
Output: false  
Explanation: There are no duplicates in the given array.

Input: nums= [1, 2, 3, 1]
Output: true  
Explanation: '1' is repeating.
*/

function containsDuplicate(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 1]));
