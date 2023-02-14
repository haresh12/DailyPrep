/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Input: nums = [1,1,1], k = 2
Output: 2

Input: nums = [1,2,3], k = 3
Output: 2
*/

// Brute force with Time Limit Exceeded
function sumOfSubArrayBR(arr, k) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    for (let j = i; j < arr.length; j++) {
      total += arr[j];
      console.log(total, k);
      if (total === k) {
        res++;
        // break;  // why here we should not write break just try [1,-1,0] => with this in single inner loop 2 combinations are possible [1,-1] then [1,-1,0]
      }
    }
  }
  return res;
}

// console.log(sumOfSubArrayBR([1, -1, 0], 0));

// UNDER STAND THIS CLEARLY TRY TO USE MAP WHENEVER YOU HAVE FIRST BRUTE FORCE SOLUTION WITH NESTED LOOP
// WATCH 5 TIMES PUNISHED :https://www.youtube.com/watch?v=HbbYPQc-Oo4

/*
   Time and space : 

Time complexity: The function uses a single loop that iterates over each element in the input array once, 
and performs a constant number of operations (i.e., adding or retrieving elements from a Map). 
Therefore, the time complexity of the function is O(n), where n is the length of the input array nums.

Space complexity: The function uses a Map to store the cumulative sum frequencies, which can have up to n entries in the worst case, 
where n is the length of the input array. Therefore, the space complexity of the function is O(n).

Overall, this implementation has a linear time complexity and linear space complexity,
making it an efficient solution for finding the total number of subarrays in an array of integers whose sum equals a given integer k.
*/
function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}
console.log(subarraySum([1, 2, 3], 3));
