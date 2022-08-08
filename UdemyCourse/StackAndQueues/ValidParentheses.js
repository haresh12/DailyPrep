
function isValidParenthesesLeetCode33(s){
 let stack = [];
 if(s.length%2 !== 0) return false; // This one is importent to understand if lengh is odd then it must be not valid string
 for(let i = 0 ; i < s.length ; i++){
  console.log(s[i])
  if(s[i] === '(' || s[i] === '{' || s[i] === '['){
    stack.push(s.charAt(i));
  }else if(stack[stack.length -1] === '{' && s[i] === '}' ||
       stack[stack.length -1] === '(' && s[i] === ')' ||
       stack[stack.length -1] === '[' && s[i] === ']') {
   stack.pop()
  }else{
    return false; // this way we will retrun as soon as we find first invalid parentheses
  }
 }
 if(stack.length === 0){
  return true;
 }else{
  return false;
 }
}

// console.log(isValidParenthesesLeetCode33('([}}])'));

// Incredible optized solution from leetcode

function isValid(s){
let stack = [];
let legend = {
  '(' : ')', // storing like ( => this is key and ) => this one is value
  '[' : ']',
  '{' : '}'
} 
for(let i = 0 ; i < s.length ; i++){
  if(s[i] === '(' || s[i] === '{' ||  s[i] === '['){
     stack.push(s[i]);
  }else if(legend[stack.pop()] !== s[i] ){
   return false;  
  }
}
return stack.length === 0;  
}

console.log(isValid('()[]{}'));
