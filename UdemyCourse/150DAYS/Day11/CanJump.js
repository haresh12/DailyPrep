/*
   You are given an integer array nums. You are initially positioned at the array's first index, 
   and each element in the array represents your maximum jump length at that position.
   Return true if you can reach the last index, or false otherwise.


Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

*/
// PERFECT THIS ONE WITH MEMO ALSO WORKED IN LEETCODE
function canJumpBR(arr) {
  // starting at the first index, check if we can reach the end of the array
  return canJumpFromPosition(0, arr, {});
}
function canJumpFromPosition(position, arr, map) {
  // base case: if we are already at the last index, return true
  if (position == arr.length - 1) {
    return true;
  }
  if (position in map) {
    return map[position];
  }
  // check how far we can jump from the current position
  // THIS IS JUST TO MAKE SURE THAT WE DON'T HAVE ANY OUT OF BOUND CALL
  let furthestJump = Math.min(position + arr[position], arr.length - 1);

  // try all possible jumps from the current position
  for (
    let nextPosition = position + 1;
    nextPosition <= furthestJump;
    nextPosition++
  ) {
    // recursively check if we can reach the end of the array from the next position
    if (canJumpFromPosition(nextPosition, arr, map)) {
      return true;
    }
  }
  map[position] = false;
  // if we can't reach the end of the array from any of the next positions, return false
  return false;
}

//Greedy Approach with o(n) time complexity

/*
1. The function `canJumpOp` takes an array as an argument.
2. The variable `goal` is initialized to the last index in the array, which is the index we want to reach.
3. The `for` loop starts at the second-to-last index of the array (`arr.length - 2`) and iterates backwards through
   the array until the first index (`0`).

4. For each index `i` in the loop, the code checks if we can jump from the current index `i` to the current `goal` by 
adding the value of the current index `i` to the maximum number of steps we can take from that 
index (`arr[i]`). If the sum of `i + arr[i]` is greater than or equal to `goal`, that means we can reach
 the current `goal` from the current index `i`.

5. If we can reach the current `goal` from the current index `i`, we update the `goal` to be the current index `i`. 
This is because if we can reach the current `goal` from `i`, we can now try to reach the previous index that
would allow us to reach the new `goal`. We keep updating `goal` until we reach the first index.

6. After the loop finishes, we check if we were able to reach the first index by checking if `goal` is now `0`.
 If `goal` is `0`, that means we were able to reach the first index from the last index using the given jumps in 
 the array. If `goal` is not `0`, that means we were not able to reach the first index.

8. The function returns `true` if we were able to reach the first index and `false` if we were not.
*/

function canJumpOp(arr) {
  // initialize the goal to be the last index in the array
  let goal = arr.length - 1;

  // loop through the array in reverse order, from second-to-last index to the first index
  for (let i = arr.length - 2; i >= 0; i--) {
    // check if we can jump from the current index (i) to the current goal
    if (i + arr[i] >= goal) {
      // if we can jump from the current index (i) to the current goal, update the goal to be the current index (i)
      goal = i;
    }
  }

  // check if we were able to reach the first index (goal is now 0)
  return goal === 0;
}

console.log(canJumpBR([3, 2, 1, 0, 4]));
