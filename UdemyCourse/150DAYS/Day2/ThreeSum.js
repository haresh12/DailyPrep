/*
Given an integer array nums, 
return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

*/

//https://www.youtube.com/watch?v=1IBgYGJqKP8&t=527s JUST SEEN implementation not done yet But seems easy from video

/*
   Three sum problem is depended on 2 sum and we have to do all this type of problem till k sum
*/

/*
   First lets do two sum problem : targetSumPair === two sum
*/
function targetSumPair(arr, start, end, target, val1) {
  let left = start;
  let right = end;
  let pairs = [];
  // in most case you get sorted array for this question but if you don't then sort by self
  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else {
      // matched the target
      pairs.push(`[${val1},${arr[left]},${arr[right]}]`);
      left++;
      right--;
    }
  }
  return pairs;
}

console.log(threeSum([0, 0, 0], 0));

function threeSum(nums) {
  const result = [];
  if (nums.length < 3) return result;
  nums.sort((a, b) => a - b);
  /*
  The value nums.length - 2 is used as the limit for the for loop because it ensures that there are at least
   two elements left in the array for the two pointers to search for the remaining elements of the triplet.
  */
  for (let i = 0; i < nums.length - 2; i++) {
    // THIS BREAK CONDITION IS INCREDIBLE BECAUSE WE KNOW ARRAY IS SORTED AND WE CURRENT I IS GREATER THEN 0 THEN ALL OTHER WILL ALSO GREATER THEN THAT
    // AND WE NEED SUM === 0 SO USE UPER JANA HE KYU HE
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // understand this two line for performance improvement and also to deal with repetition
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

console.log(threeSum([0, 0, 0]));

/**
 *  Explanation : 
 The threeSum function takes in an array nums of integers and returns all unique triplets whose sum is equal to zero. 
 Here's a simple explanation of the code:

The function first sorts the input array nums in ascending order.

Then, it uses a for loop to iterate through nums. The loop variable i represents the first element of the potential triplet.

Inside the loop, two pointers, left and right, are used to search for the remaining two elements of the triplet. 
left starts from the element immediately after i and moves towards the end of the array, while right starts from the last element of the array and moves towards the beginning.

The sum of the three elements is calculated, and if it is equal to zero, the triplet is added to the result array. 
The left and right pointers are then moved to the next unique elements, and the process is repeated.

If the sum is less than zero, it means that the left element is too small, so left is moved to the next unique element. 
If the sum is greater than zero, it means that the right element is too large, so right is moved to the previous unique element.

The loop continues until left is greater than or equal to right.

Finally, the result array is returned, which contains all unique triplets whose sum is equal to zero.
 */

/*
    Time and space : 
*/

/*
   Time and Space : 
   Time complexity: O(n^2), where n is the length of the input array nums. The for loop takes O(n) time,
   and the two-pointer approach takes O(n) time as well.
   The sorting of the array takes O(n * log(n)) time, but it can be considered as O(n^2) in terms of the overall time complexity.

   Space complexity: O(1), as the function uses only a few variables and does not create a new data structure. 
   The result array is stored in the same memory as the function, so the space complexity is constant and does not depend on the size of the input array.
*/
