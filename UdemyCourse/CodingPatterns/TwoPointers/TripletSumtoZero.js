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

// GREAT JOB TOOK TIME BUT DONE BY SELF
/*
   Time and Space :
   
The time complexity of the triplet function is O(n^2) because it involves a nested loop, with the outer loop iterating over each element 
in the array and the inner loop calling the twoSum function which also has a linear time complexity. The twoSum function has a linear time 
complexity because it iterates over each element in the array once. Therefore, the overall time complexity of the triplet function is O(n^2).

Space Complexity:

The space complexity of the triplet function is O(n) because the size of the res array is directly proportional to the input size n. 
The twoSum function also has a space complexity of O(n) because it uses a hash map to store values as keys.
Therefore, the overall space complexity of the triplet function is O(n).

HERE WE ARE NOT SKIPPING THE DUPLICATE NUMBER BUT IN QUESTION WE NEED TO DO THAT LIKE IF -1 FOR THIS ELEMENT IF YOU ALREADY FOUND PAIRS
THEN IF IT COMES AGAIN THE DON'T FIND AGAIN

*/
function tripletBrute(nums) {
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

// console.log(tripletBrute([-1, 0, 1, 2, -1, -4]));

/*
   HERE IMPORTANT PART IS WE NEED UNIQUE PAIRS SO WE NEED TO MAKE SURE WE  IGNORE THE DUPLICATE.
   ALSO SEE YOU HAVE TO SORT ARRAY FIRST THEN ARRAY BECOME SORTED 
   NOW WHENEVER ARRAY BECOME SORTED THEN PLEASE ATLEAST ONE TIME THINK ABOUT BINARY SEARCH 
*/
function tripletOp(nums) {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    let currentTarget = 0 - nums[i];
    targetSum(nums, currentTarget, i + 1, res);
  }
  return res;
}

function targetSum(nums, target, index, res) {
  let left = index;
  let right = nums.length - 1;

  while (left < right) {
    let currentSum = nums[left] + nums[right];

    if (currentSum === target) {
      res.push([0 - target, nums[left], nums[right]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }
    } else if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(tripletOp([-5, 2, -1, -2, 3]));
