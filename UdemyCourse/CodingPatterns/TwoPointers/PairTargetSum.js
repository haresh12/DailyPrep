/*
   Pair with Target Sum (easy) :

Problem Statement
Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.


Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

Understand here we don't need to find all possible pairs only one as soon as you get one just come out from loop.
*/

/*
   TIME AND SPACE : 
   The time complexity of the above algorithm will be O(N) , where ‘N’ is the total number of elements in the given array.
   Space complexity will be O(1) because we are taking only few variables
*/
function targetSum(nums, target) {
  if (nums.length < 1) return [];

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] > target) {
      right--;
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else {
      return [left, right];
    }
  }
  return [-1, -1]; // if not found we can ask interviewer what we need to return if we don't find the pair
}

console.log(targetSum([1], 6));

/*
   Alternative we could use map also to solve this problem where you store element one by one when you are looping through elements and
   before adding to map check if target - currentElement is this value exist in map if yes you got your pair.

   HERE TIME WILL BE O(N) AND SPACE WILL BE O(N) BECAUSE WE ARE USING MAP AND IN WORST CASE IT CAN STORE ALL THE ELEMENTS IN MAP WHEN
   WE DON'T FIND ANY PAIR
*/
