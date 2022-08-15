// THIS IS RECURSION PROBLEM SO THIS IS NOT AT ALL DONE WE NEED TO DO LOT OF DRY RUN FOR ALL THE
// RECURSION PROBLEMS.
// For now just to understand and to submit in leetcode : https://www.youtube.com/watch?v=N-3fyoKD8-k

function generateParenthesesLeetcode26(n){
 let res = [];
 helper(res,"",0,0,n);
return res 
}

function helper(res,str,open,close,max){
  if(str.length === max*2){
    res.push(str);
    return;
  }

  if(open < max){
    helper(res,str+"(",open+1,close,max);
  }
  
  if(close < open){
    helper(res,str+")",open,close+1,max);
  }
}

console.log(generateParenthesesLeetcode26(3))