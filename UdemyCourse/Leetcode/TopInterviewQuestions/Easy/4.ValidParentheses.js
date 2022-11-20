/*
   Leetcode : 20 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

function isVaildParentheses(str){

  let stack = [];

  for(let s of str){
    if(s === '(' || s === '[' || s === '{' ){
      stack.push(s);
    }else{
      // This condition was missed and it very very importent because if there is in stack
      // then 100% this is not valid parentheses because loop is still going on and stack is already empty
      // in this case if you try to get top then it will be undefiend
      if(stack.length === 0){
        return false;
      }
      let top = stack[stack.length-1];
      if((top === '(' && s === ')') || (top === '[' && s === ']') || (top === '{' && s === '}')){
          stack.pop();
      }else{
        return false; // THIS ONE ALSO MISSED THIS QUESTION IS IMPOSSIBLE WITHOUT THIS (]) TRY THIS ONE WIHOUT THIS CONDITION
      }
    }
  }
  return stack.length === 0;
}

const isValid = isVaildParentheses('(([[]))');
console.log(isValid)