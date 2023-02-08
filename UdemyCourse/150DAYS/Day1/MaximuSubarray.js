/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * 
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.

    Input: nums = [1]
    Output: 1
    Explanation: The subarray [1] has the largest sum 1.

    Input: nums = [5,4,-1,7,8]
    Output: 23
     Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 */
// This is Specific algorithm question Kadane's Algorithm thats why stuck like anything
// SIMPLEST ALGO EVER
// https://www.youtube.com/watch?v=HCL4_bOd3-4

// This one won't work for negative number try with example like [-1] IT WILL WORK BUT FOR THAT MAKE SURE YOU PUT  let max = arr[0]
function largestSum(arr) {
  let curr = 0;
  let max = arr[0]; //

  for (let i = 0; i < arr.length; i++) {
    curr += arr[i];
    if (curr > max) {
      max = curr;
    }
    if (curr < 0) {
      curr = 0;
    }
  }
  return max;
}
console.log(largestSum([-19999, -2, -3]));
/*
Yes, this is a variant of the Kadane's algorithm. The basic idea of the algorithm, 
which is to keep track of the maximum sum ending at each position in the array and updating the maximum sum found so far, is present in this code. 
The difference is in the way the algorithm is implemented and the variable names used, but the overall logic remains the same.
*/

/**
 Sure, let me explain this code in simple terms.

Imagine you have a basket and you want to fill it with some fruits from a fruit store.
You want to fill the basket with the maximum amount of fruits you can get.
So, you pick one fruit after another from the store and keep adding it to the basket.

This code does the same thing. It takes an array of numbers and finds the largest sum of a continuous sequence of numbers in that array. 
Just like you keep adding fruits to the basket until it gets full, in this code, we keep adding numbers until we get the largest sum.

The code uses two variables, curr and max, to keep track of the sum of the continuous sequence of numbers and the largest sum found so far, 
respectively.

At each step, the code adds the current number in the array to curr. If curr becomes greater than max, then curr becomes the new largest sum.
 If curr becomes negative, it means that the current sequence of numbers is not giving a good sum, so we start a new sequence from the 
 next number by resetting curr to zero.

In terms of time complexity, this code takes O(n) time, where n is the number of elements in the array. 
This means that the time taken by the code increases linearly with the size of the array.

In terms of space complexity, this code takes O(1) space, as it only uses a few variables to keep track of the sum and maximum sum, regardless of the size of the input array.
 */
