/*
  
   Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
   An input string is valid if:

     Open brackets must be closed by the same type of brackets.
     Open brackets must be closed in the correct order.
     Every close bracket has a corresponding open bracket of the same type.
*/

// Done in 5 mins easy one
/*
   Explanation : 

Check if the length of the input string s is less than or equal to 1. If it is, return false because a valid string of 
parentheses must contain at least 2 characters.

Initialize an empty stack stack.

Loop through each character in the string s.

For each character, check if it is an opening parenthesis ((, {, or [). If it is, push it onto the stack.

If the character is a closing parenthesis (), }, or ]), do the following:
a. Check if the stack is empty. If it is, return false because there is no corresponding opening parenthesis for the current closing parenthesis.
b. If the stack is not empty, pop the top element of the stack and compare it to the current closing parenthesis.
c. If they match (e.g., ( and ), { and }, or [ and ]), continue to the next character.
d. If they don't match, return false immediately because the string is not valid.

After looping through all the characters in the string, check if the stack is empty. If it is, return true because every opening parenthesis 
has a matching closing parenthesis. If the stack is not empty, return false because there are unclosed opening parentheses.

*/

/*
   Time and Space : 
   The time complexity of the validParentheses function is O(n), where n is the length of the input string s. 
   This is because we loop through each character in the string once, and the amount of time the loop takes is proportional to the length of the string.

   The space complexity of the validParentheses function is O(n) as well. 
   This is because the stack data structure used in the function can contain up to n elements 
   (if every character in the string s is an opening parenthesis), 
   so the amount of space the function uses is proportional to the length of the string. 
*/
function validParentheses(s) {
  if (s.length <= 1) return false;

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      let top = stack[stack.length - 1];
      if (
        (top === "(" && s[i] === ")") ||
        (top === "[" && s[i] === "]") ||
        (top === "{" && s[i] === "}")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0; // Test case where we wil have stack with items let s = "({[()"
}
