/*
   Find First and Last Position of Element in Sorted Array :

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Input: nums = [], target = 0
Output: [-1,-1]
*/

/*
 Here brute force solution is pretty easy because array is sorted and you have to find something in that sorted array is always easy.
 Here time complexity will be O(N) and yes its brute force because array is sorted and whenever array is sorted then we must
 thing about any BINARY SEARCH TREE SOLUTION
*/
// ONE INCREDIBLE EDGE CASE HERE IF IT ONLY EXISTS ONCE THEN FIRSTINDEX === LASTINDEX
// WORKED ON LEETCODE NOW LETS TRY OPTIMAL SOLUTION
function firstAndLastElementsBR(arr, target) {
  if (arr.length === 0) return [-1, -1];

  let firstIndex = -1;
  let lastIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target && firstIndex === -1) {
      firstIndex = lastIndex = i; // great job here this is the edge case we need to make sure
    } else if (firstIndex !== -1 && target === arr[i]) {
      lastIndex = i;
    } else if (firstIndex !== 1 && lastIndex !== -1) {
      return [firstIndex, lastIndex];
    }
  }

  return [firstIndex, lastIndex];
}

console.log(firstAndLastElementsBR([1], 1));

// AGAIN SAME ADVICE DON'T BE IN HURRY YOU ALWAYS MISS EDGE CASE AND MOSTLY ENDLESS LOOP THING
// MODIFY BINARY SEARCH
/*
   This the first question we are doing where we are using modified binary search what do we mean by that is even we found our targeted result 
   we are not going to stop the binary search.

   How it helped in this question understand by this example : [1,2,3,4,4,4,4,4,4,4,4,5,6,7,4];

   in above array we have 14 elements suppose our target is to find first and last index 4 now if use normal binary tree approach
   then in in first iteration we are going to get ans means target 4 which we have at index 6. But this index is not the first index
   nor the last index and thats why we have to continue with binary tree.

   Now here one you get mid first time then store it in some variable and call Binary search function once for left and once for right.

   When running for left side it will update i if it got any new value which is equal to the target if not that simple we already stored
   value in variable when we first time met with this condition. Same for right side it will insure last index. This question or we can
   say this trick is best only if we understand thing about it whenever we have to get solution in O(logN) we use binary tree and here
   we will have complexity. 

   Overall time complexity will be 2O(logN) because we are doing binary search for left and then for right

*/
function binarySearchHelper(arr, target, leftBias) {
  let left = 0;
  let right = arr.length - 1;
  let i = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target > arr[mid]) {
      left = mid + 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      i = mid;
      if (leftBias) right = mid - 1;
      else left = mid + 1;
    }
  }

  return i;
}
function firstAndLastElementsOp(arr, target) {
  let left = binarySearchHelper(arr, target, true);
  let right = binarySearchHelper(arr, target, false);
  return [left, right];
}
console.log(firstAndLastElementsOp([5, 7, 7, 8, 8, 10], 8));
