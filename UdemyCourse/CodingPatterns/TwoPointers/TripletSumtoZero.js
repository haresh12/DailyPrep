/*
   Triplet Sum to Zero (medium) :
   Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

   Input: [-3, 0, 1, 2, -1, 1, -2]
   Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
   Explanation: There are four unique triplets whose sum is equal to zero. smallest sum.'

   Input: [-5, 2, -1, -2, 3]
   Output: [[-5, 2, 3], [-2, -1, 3]]
   Explanation: There are two unique triplets whose sum is equal to zero.

*/

// GREAT JOB TOOK TIME BUT DONE BY SELF D
function triplet(nums) {
  if (nums.length < 3) return [];

  let res = [];
  let target = 0;
  for (let i = 0; i <= nums.length - 3; i++) {
    let remaining = target - nums[i];
    let pairWithRemaining = twoSum(nums, i + 1, remaining);
    if (pairWithRemaining.length > 0) {
      for (let j = 0; j < pairWithRemaining.length; j++) {
        res.push([nums[i], pairWithRemaining[j][0], pairWithRemaining[j][1]]);
      }
    }
  }
  return res;
}

function twoSum(nums, index, remaining) {
  let map = {};
  let pairs = [];

  for (let i = index; i < nums.length; i++) {
    if (remaining - nums[i] in map) {
      let first = remaining - nums[i];
      let second = nums[i];
      pairs.push([first, second]);
    } else {
      map[nums[i]] = true;
    }
  }
  return pairs;
}

console.log(triplet([-5, 2, -1, -2, 3]));
