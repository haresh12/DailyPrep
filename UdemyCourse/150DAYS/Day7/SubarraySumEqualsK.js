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
  let map = {};
  map[0] = 1; // why this because if we have sum 3 and k is also 3 then 3 - 3 = 0 but we never had 0 in map try this [3],3 input

  for (let i = 0; i < nums.length; i++) {
    // as soon as you come inside loop first just add current value to some
    sum += nums[i];
    //step two would be check if sum - k is this value exist or not in map
    // example k is 5 current sum is 3 then if we have one 2 in map then this is subarray
    if (sum - k in map) {
      // here means yes it is in map
      count += map[sum - k]; // whatever value we have there just add that into count
    }
    // Now common steps if values in not in the map then simply store it
    if (map[sum]) {
      map[sum] = map[sum] + 1; // means whatever frequency it has add one more into that because ek or bar aaya he
    } else {
      // here it comes means this sum not is map yet so set with frequency 1
      map[sum] = 1;
    }
  }
  return count;
}
console.log(subarraySum([1, 2, 1, 2, 1], 3));
