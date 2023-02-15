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
// Without dp works fine but TLE error in leetcode
function robber(arr, sum, index) {
  if (index >= arr.length) {
    return sum;
  }

  let rob = robber(arr, sum + arr[index], index + 2);
  let noRob = robber(arr, sum, index + 1);

  return Math.max(rob, noRob);
}

console.log(robber([2, 7, 9, 3, 1], 0, 0));

// LETS TRY WITH DP
function robberDP(arr) {
  const memo = {};

  function dp(i) {
    if (i < 0) {
      return 0;
    }
    if (memo[i]) {
      return memo[i];
    }
    const robCurrent = arr[i] + dp(i - 2);
    const skipCurrent = dp(i - 1);
    memo[i] = Math.max(robCurrent, skipCurrent);
    return memo[i];
  }

  return dp(arr.length - 1);
}
console.log(robberDP([1, 2, 1, 1], 0, 0, {}));
