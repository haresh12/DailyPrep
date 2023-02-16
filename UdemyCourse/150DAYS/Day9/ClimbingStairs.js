/*
Climbing Stairs :
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
    
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/
// Done by self 4 min
function climbStair(stairs, memo) {
  if (stairs === 0) {
    return 1;
  }
  if (stairs < 0) {
    return 0;
  }
  if (memo[stairs]) {
    return memo[stairs];
  }
  let oneSteps = climbStair(stairs - 1, memo);
  let twoSteps = climbStair(stairs - 2, memo);
  memo[stairs] = oneSteps + twoSteps;
  return memo[stairs];
}

console.log(climbStair(45, {}));
