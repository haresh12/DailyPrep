/*
    Search in Rotated Sorted Array : 

    There is an integer array nums sorted in ascending order (with distinct values).

    Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

       Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

      You must write an algorithm with O(log n) runtime complexity. (THIS IS WHAT CHANGING THE ENTIRE QUESTION)

      ALWAYS IF ARRAY IS SORTED THE FIRST THING COMES IN MIND IS BINARY SEARCH BUT HERE WE HAVE ONE TRICKY THING WHICH IS ARRAY IS
      K ROTATED

 */

/*
      SEE EVEN ARRAY IS ROTATED SORTED STILL IF GO TO MIDDLE OF BINARY TREE THEN FROM MIDDLE WE CAN GUARANTEE THAT AT LEAST ON PART
      WILL BE SORTED NOT SURE WHICH BUT SURE THAT EITHER LEFT OR RIGHT ONE OF THEN WILL BE SORTED. TO MAKE SURE JUST CHECK THAT
      IS YOUR LEFT INDEX VALUE IS LESS THEN MIDDLE VALUE IF YES THEN GOOD WE KNOW THAT LEFT PART IS SORTED AND IF VALUE OF LEFT
      SIDE IS LESS GRATER THEN MIDDLE THEN ALSO NO ISSUE WE HAVE SORTED ARRAY IN RIGHT SIDE

      NOW AFTER THIS EVERY THING ABOUT IS CODE AND CONDITIONS BUT THE ABOVE PART IS MUCH MORE IMPORTANT
  */

// ONE THOUGHT BINARY SEARCH IS ALL ABOUT PLAYING WITH HIGH AND LOW : https://www.youtube.com/watch?v=Le8bc8aHgBA&t=467s

/*
    ANSWER FOR WHY + 1 AT LINE 39 

  The corrected code is now returning the expected output of 5 for the input findInRotatedArray([3, 4, 5, 6, 1, 2], 2).
  In the original code, the value of mid was calculated using Math.floor((low + high) / 2), which rounded down to the nearest integer.
  This caused the midpoint to be biased towards the lower half of the array, making the code prone to missing the target value. 
  The correction, which uses Math.floor((low + high) / 2) + 1, ensures that the midpoint is rounded up, giving a more accurate midpoint.
*/

/*
    Explanation : 
    Set low pointer at the start of the array and high pointer at the end of the array.
    Loop until low is less than or equal to high pointer.
    Calculate the mid pointer.
    Check if the value at mid is equal to the target, if yes return the index of mid.
    If the left side of the array is sorted, then check if the target is between low and mid, if yes, update high to mid - 1. Otherwise, update low to mid + 1.
    If the left side of the array is not sorted, then check if the target is between mid and high, if yes, update low to mid + 1. Otherwise, update high to mid - 1.
    Repeat the steps from 2 to 6 until low is less than or equal to high.
   If the target is not found in the array, return -1.
*/
function findInRotatedArray(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;

    // case 1 if left part is sorted
    if (arr[low] <= arr[mid]) {
      // case 2 chlo left sorted to he but kya target left me he bi ya nhi
      if (target >= arr[low] && target < arr[mid]) {
        // Yha aaya means jo bi krna he left me krna he
        high = mid - 1; // this way pura right part discard ho gya
      } else {
        // yha aaya means left array sorted to he but target vo side nhi he so jana padega right side
        low = mid + 1;
      }
    } else {
      // yha aaya means left part sorted nhi he so right me check kr lete hai targe lie krta he kya
      if (target > arr[mid] && target <= arr[high]) {
        // means target right me he
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(findInRotatedArray([1], 0));
