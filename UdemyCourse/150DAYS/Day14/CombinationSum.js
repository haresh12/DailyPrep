/*
  Combination Sum

Given an array of distinct integers candidates and a target integer target, return a list of all unique 
combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.


Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Input: candidates = [2], target = 1
Output: []
*/
/*
    Backtracking Approach : 
    The approach used in this function is known as backtracking. Backtracking is a general algorithmic technique that tries out different 
    solutions recursively, and "backs out" of a solution as soon as it determines that the solution cannot be completed further.

   In this function, the backtracking approach is used to explore all possible combinations of integers from inputArr that add up to 
   the target value. The function starts by selecting the first integer from the array and then checks if it is possible to use the selected
   integer to achieve the target sum. If yes, it adds the integer to the current combination and recursively calls itself with the updated 
   combination and the remaining sum.

   If the selected integer cannot be used to achieve the target sum, the function "backs out" of the solution and tries another solution by 
   removing the selected integer from the current combination and moving to the next integer in the array.

   This process continues until all possible combinations of integers have been tried and the function has found all unique combinations
   of integers that add up to the target value.

   Overall, the backtracking approach is a useful technique for solving a wide range of problems that involve searching for all possible
   solutions or combinations. It can be used to solve problems such as subset sum, permutation, and graph traversal problems.
*/
function combinationSum(ans, currPair, target, index, inputArr) {
  if (target === 0) {
    ans.push([...currPair]);
    return;
  }

  if (index === inputArr.length) {
    return ans;
  }
  // Here i will always have two options should i pick it or not
  // If you pick it then you have to reduce you target and as you are choosing to pick then you have to stick with that index
  // What if you are not picking in that case its pretty simple move ahead thats it just move to next index.
  // Also only pick if curr index value is less then or equal to remaining target value (Make sense)

  if (inputArr[index] <= target) {
    currPair.push(inputArr[index]);
    combinationSum(ans, currPair, target - inputArr[index], index, inputArr);
    currPair.pop(); // if you don't remove in post recursion then we will always have something in pair [2,3,6,7] target 7 how  7 alone will create ans then
  }
  combinationSum(ans, currPair, target, index + 1, inputArr);
}

let ans = [];
combinationSum(ans, [], 7, 0, [2, 3, 6, 7]);
console.log(ans);
