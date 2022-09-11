/*
567. Permutation in String
In this question you have given two string and we need to check any permutation of string s1 contains
in s2
*/
// AGAIN SAME THING FOR SMALL OUTPUT WORKS FOR LARGE OUTPUT NOT IN LEETCODE
// TWO THING WE NEED TO UNDERSTAND FIRST DO IT ANYWAY AND THEN LEARN TO OPTIMIZ IT
// GOOD THING HERE IS I WAS ABLE TO DO IT BUT STILL LITTLE BIT LEARNING NEEDED IN RETURN VALUES
// AND WHAT IF WE DON'T PASS THINGS IN PARAMETERS 

// IN FUTURE DO WITH DP
function containsPermutation(str,str2,ans,hasValue){
 if(!str){
 return str2.includes(ans)
 }
 for(let i = 0 ; i < str.length; i++){
  let ch = str[i];
  let restOfString = str.substring(0,i) + str.substring(i+1);
  if(hasValue){
    return hasValue;
  }
  hasValue =  containsPermutation(restOfString,str2,ans+ch,hasValue);
 }
  return hasValue;
}

console.log(containsPermutation('abc','eidooo','',false))