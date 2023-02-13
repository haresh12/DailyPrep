/*
   Generate Parentheses :
   Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

   Input: n = 3
   Output: ["((()))","(()())","(())()","()(())","()()()"]

   Input: n = 1
   Output: ["()"]
*/

/*
   LEARNED NEW THING AND THIS IS WHY I SAY JS IS LOVE:
   (openingParentheses === closingParentheses) === num) (THIS WILL NOT WORK EVEN WE HAVE 3 === 3 === 3 STILL BECAUSE OF BELOW REASON)
   The expression 3 === 3 === 3 is a bit confusing because it uses the strict equality operator (===) multiple times.
   In JavaScript, the expression is evaluated from left to right, so the first comparison 3 === 3 returns true.
   Then, the expression becomes true === 3, which is not equal to 3 using the strict equality operator.
   So, the final result of the expression 3 === 3 === 3 is false.
*/

// One side good job that code done by self also dry run done by intuition came from video : https://www.youtube.com/watch?v=s9fokUqJ76A&t=683s

/*
   Explanation : 

   Simplest recursion problem if you understand below three steps
   1. Add openBracket as long as its less then input number
   2. Add closeBracket as long as its less then openBracket
   3. Base case will be hit when we have openBracket === closeBracket === number
*/

/*
   Time and Space : 
   The time complexity of the function generateParentheses is O(2^n), where n is the number of pairs of parentheses.
   This is because at each recursive step, the function generates two new branches in the tree of possible combinations:
   one for adding an opening parenthesis, and one for adding a closing parenthesis.
   This leads to a total of 2^n possible combinations, which results in a time complexity of O(2^n).

   The space complexity of the function is O(n), where n is the number of pairs of parentheses. 
   This is because at each recursive step, the function creates a new string by concatenating the current combination 
   ans with either an opening or a closing parenthesis. The maximum depth of the recursion tree is n, 
   as there can never be more than n open parentheses without any corresponding closing parentheses. 
   This results in a space complexity of O(n). Note that this does not include the space used by the arr array, 
   which grows as the combinations are added, so its space complexity would be O(C(2n, n)/(n+1)),
   which is the number of combinations of 2n items taken n at a time, divided by n+1.
*/
function generateParentheses(
  num,
  openingParentheses,
  closingParentheses,
  ans,
  arr
) {
  if (openingParentheses === num && closingParentheses === num) {
    arr.push(ans);
    return arr;
  }

  if (num > openingParentheses) {
    arr = generateParentheses(
      num,
      openingParentheses + 1,
      closingParentheses,
      ans + "(",
      arr
    );
  }
  if (closingParentheses < openingParentheses) {
    arr = generateParentheses(
      num,
      openingParentheses,
      closingParentheses + 1,
      ans + ")",
      arr
    );
  }
  return arr;
}

console.log(generateParentheses(3, 1, 0, "(", []));

/*
One approach to reducing the space complexity is to generate the combinations iteratively, rather than using recursion.
This eliminates the need for the recursion stack,  which reduces the space complexity to O(n), where n is the number of pairs of parentheses. 
 */

function generateParentheses(num) {
  let arr = [];
  let combination = [];
  backtrack(arr, combination, 0, 0, num);
  return arr;
}

function backtrack(arr, combination, open, close, max) {
  if (combination.length === max * 2) {
    arr.push(combination.join(""));
    return;
  }
  if (open < max) {
    backtrack(arr, combination.concat("("), open + 1, close, max);
  }
  if (close < open) {
    backtrack(arr, combination.concat(")"), open, close + 1, max);
  }
}
