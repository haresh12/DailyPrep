/*
  Given an integer array nums, return the length of the longest strictly increasing

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Input: nums = [0,1,0,3,2,3]
Output: 4   

Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/

// This is tabulation in dp have't done much yet but will learn day by day

/*
   TIME SPACE AND EXPLANATION :

The longestIncreasingSub function takes an array of integers as input and returns the length of the longest increasing 
subsequence in the array. An increasing subsequence is a sequence of numbers in the array that are in increasing order.

The function uses a dynamic programming approach to solve the problem. It first checks if the 
input array is empty and returns the empty array if it is.

Then it creates a new array res with the same size as the input array, filled with 1s. 
This array will store the length of the longest increasing subsequence that ends at each index in the input array.

The function then loops through the input array backwards, starting from the second to last index.
For each index, it loops through the remaining indices in the input array, starting from the next index.
 It checks if the number at the current index is less than the number at the next index. 
 If it is, it means that there is a possible increasing subsequence that ends at the current index and 
 includes the next index.

The function then chooses the longest increasing subsequence that includes the next index, 
and adds 1 to its length to include the current index. It stores this length in the res array at the current index.

After looping through all indices in the input array, the function finds the maximum value 
in the res array and returns it as the length of the longest increasing subsequence.

The time complexity of the function is O(n^2), where n is the length of the input array, because 
it uses two nested loops to iterate through the input array. The space complexity of the function is O(n),
because it creates an array res with the same size as the input array to store the lengths of the 
longest increasing subsequences.
*/
function longestIncreasingSub(nums) {
  if (nums.length === 0) return nums;
  // take one array with same size of nums for result
  let res = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    let max = 1;
    for (let j = i + 1; j < nums.length; j++) {
      // because we need increasing sub sequence
      if (nums[i] < nums[j]) {
        // Now if you come here means you have some subsequence from j to length
        // and good thing is those are already processed as we have loop from back
        // so at time time your job is choose the best one from then res[j] = 5 res[j+1] = 2 res[j+2] = 8
        // so you will choose 8 and add one for your self and make it 9 and store it in your res position
        max = Math.max(max, res[j] + 1); // we are doing + 1 because you will be added also right ke vha be piche rahena  he
      }
    }
    res[i] = max;
  }

  // at this time you have array where at each index you have max largest subsequence from that specific index
  // just find the max from res and return it
  let max = 1;
  for (let i = 0; i < res.length; i++) {
    max = Math.max(max, res[i]);
  }
  return max;
}

console.log(longestIncreasingSub([0, 1, 0, 3, 2, 3]));
