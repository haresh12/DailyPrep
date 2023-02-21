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
