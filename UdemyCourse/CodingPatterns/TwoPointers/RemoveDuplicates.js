/*

   Remove Duplicates (easy) :

   Given an array of sorted numbers, remove all duplicate number instances from it in-place, such that each element appears only once. 
   The relative order of the elements should be kept the same and  you should not use any extra space so that the solution has a 
   space complexity of O(1) .

   Move all the unique elements at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.

   Example 1:
   
   Input: [2, 3, 3, 3, 6, 9, 9]
   Output: 4
   Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

   Input: [2, 2, 2, 11]
   Output: 2
   Explanation: The first two elements after removing the duplicates will be [2, 11].

*/

/*
  Simplest approach will just add array elements one by one in SET data structure it will automatically handle every thing else
  as set does not store duplicate value.

  BUT CAN'T DO THIS BECAUSE WE NEED EXTRA SPACE O(N) TO SOLVE THIS PROBLEM AND IN PROGRAM THEN MENTIONED WE CAN NOT USE ANY EXTRA
  SPACE
*/
/*

 The time complexity of the above algorithm will be O(N) , where ‘N’ is the total number of elements in the given array.
 The algorithm runs in constant space O(1).
*/
function removeDuplicate(nums) {
  if (nums.length < 1) return nums;

  let left = nums.length - 1;
  let right = nums.length - 2;

  while (left >= 0) {
    if (nums[left] === nums[right]) {
      nums.splice(right, 1);
      right--;
      left--; // BHAI ARRAY KI SIZE KAM HO RHI HE TO LEFT KO BI TO MOVE KRTE JAO NA
    } else {
      left = right;
      right--; // DON'T BE LAZY IN CASE OF DRY RUN
    }
  }
  return nums ? nums.length : 0;
}

console.log(removeDuplicate([2, 3, 3, 3, 6, 9, 9]));

// Similar Questions

/*

 Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and 
 return the new length of the array.

 Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
 Output: 4
 Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].

 Input: [2, 11, 2, 2, 1], Key=2
 Output: 2
 Explanation: The first two elements after removing every 'Key' will be [11, 1].
 
 REMOVE ALL INSTANCE HERE
*/

// UNDERSTAND THIS IS NOT THE QUESTION WHERE WE ARE USING TWO POINTER APPROACH
// TIME COMPLEXITY WILL BE O(N) AND SPACE COMPLEXITY WILL BE O(1)
function removeAll(nums, key) {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === key) {
      nums.splice(i, 1);
    }
  }
  return nums;
}

console.log(removeAll([2, 11, 2, 2, 1], 2));

/*

  THIS IS THE BEST APPROACH FOR ABOVE PROBLEM WHERE WE ARE USING TWO POINTER APPROACH
*/

function remove_element(arr, key) {
  let nextElement = 0; // index of the next element which is not 'key'
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i];
      nextElement += 1;
    }
  }
  return nextElement;
}
