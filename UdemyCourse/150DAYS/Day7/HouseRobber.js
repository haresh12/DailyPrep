/*
    House Robber  :
    
    You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
    the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
    Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

   
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/

// FIRST DYNAMIC PROGRAMING PROBLEM
function robberyDay(nums, sum, index, map) {
  if (index < 0) {
    return 0;
  }

  if (map[index]) {
    return map[index];
  }

  const rob = robberyDay(nums, sum + nums[index], index - 2, map);
  const notRob = robberyDay(nums, sum, index - 1, map);
  const maxRob = Math.max(rob, notRob);
  map[index] = maxRob;
  return maxRob;
}
function rob(nums) {
  const memo = new Map();

  function helper(i) {
    if (i < 0) {
      return 0;
    }
    if (memo.has(i)) {
      return memo.get(i);
    }

    const result = Math.max(helper(i - 2) + nums[i], helper(i - 1));

    memo.set(i, result);
    return result;
  }

  return helper(nums.length - 1);
}
console.log(robberyDay([1, 2, 3, 1], 0, [1, 2, 1, 1].length - 1, {}));
// console.log(robberyDay([1, 2, 3, 1]));
