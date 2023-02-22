/*
   Permutations:
   Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

   Input: nums = [1,2,3]
   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

   Input: nums = [0,1]
   Output: [[0,1],[1,0]]

   Input: nums = [1]
   Output: [[1]]

   Formula total possible permutation always will be n!. Like in above case we have input with length 3 then total possible permutation will be 3! => 3*2*1 = 6
*/

/*
   Lets do the first brute force approach where we will use extra space.
*/

/*
   Explanation with time and space :
   The function findAllPermutationBR finds all permutations of a given string using a backtracking approach. Here's an explanation of the function and its time and space complexity:

Parameters:

overAllAns - An array to store all permutations of the string.
currAns - An array to store the current permutation being constructed.
freqMap - An object to keep track of the frequency of characters used in the permutation.
input - The input string for which we need to find all permutations.
Base Case: If the length of currAns is equal to the length of input, it means we have found one permutation, so we add it to overAllAns and return.

Recursive Case: We iterate over each character in the input string. If the character is not present in the freqMap, it means it hasn't been used in the
current permutation, so we add it to currAns and mark it as used in the freqMap. We then make a recursive call to findAllPermutationBR to find all permutations
using the updated currAns and freqMap. After the recursive call returns, we remove the last character from currAns and mark it as unused in the freqMap. 
This is the backtracking step that allows us to explore all possible permutations.

Time Complexity: The time complexity of this function is O(n!), where n is the length of the input string. This is because there are n choices for the first character,
 n-1 choices for the second character, and so on. Therefore, the total number of permutations is n*(n-1)(n-2)...*1, which is n!.

Space Complexity: The space complexity of this function is O(n), where n is the length of the input string. This is because the currAns and freqMap arrays 
have a maximum size of n, and we make n recursive calls to the function. Therefore, the maximum space used on the call stack is n. Additionally, the 
overAllAns array can have up to n! permutations, so the maximum space used by it is also O(n!).

*/
function findAllPermutationBR(overAllAns, currAns, freqMap, input) {
  if (currAns.length === input.length) {
    overAllAns.push([...currAns]); // Understand this must spent 30 min only to understand why array is not getting added
    return;
  }

  for (let i = 0; i < input.length; i++) {
    if (!freqMap[input[i]]) {
      currAns.push(input[i]);
      freqMap[input[i]] = true;
      findAllPermutationBR(overAllAns, currAns, freqMap, input);
      currAns.pop();
      freqMap[input[i]] = false;
    }
  }
}

let overAllAns = [];
let nums = [1, 2, 3];
findAllPermutationBR(overAllAns, [], {}, nums);
console.log(overAllAns);

// FOR NOW WILL GO WITH FIRST SOLUTION
function findAllPermutationOp(nums) {
  let result = [];

  if (nums.length === 1) {
    return [nums];
  }

  for (let i = 0; i < nums.length; i++) {
    let n = nums.pop();
    let perms = findAllPermutationOp(nums);
    for (let i = 0; i < perms.length; i++) {
      console.log(perms[i]);
      perms[i].push(nums[i]);
    }
    result.push(perms);
    nums.push(n);
  }
  return result;
}
console.log(findAllPermutationOp(nums));
