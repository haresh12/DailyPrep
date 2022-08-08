
function longestPalindromicSubstringBruteForce(string){ 
  let finalAns =''
 for(let i = 0 ; i < string.length ; i++){
  let sub = ''
  let subAns = ''
  for(let j = i ; j < string.length ; j++){
    if(isPalindromic(sub + string[j])){
       subAns = sub + string[j];
    }
    sub+=string[j];
  }
   if(subAns.length > finalAns.length){
    finalAns = subAns
   }
 }
 return finalAns;
}
// GOOD TO KNOW THAT JAVASCRIPT DOES NOT HAVE REVERSE METHOD REALLY MAN 
// MUST READ MEAN STRING IN JAVASCRIPT IS IMMUTABLE
//https://stackoverflow.com/questions/25345108/why-cant-i-swap-characters-in-a-javascript-string
function isPalindromic(string){
  return string === [...string].reverse().join(''); // sometime knowing internal methods can help you a lot
}

// MAN UNDERSTAND THIS THING 3/2 => IS I.5 IN JS NOT 1 SO ALWAYS DO MATH.FLOOR() IS YOU NEED ONE AS ANSWER
//https://www.youtube.com/watch?v=OwjIfAy1OqA (GOOD ONE)
function longestPalindromicSubstringLeetcode5(s){
  if(!s || s.length <= 1) return s;
  let len = 0 , start = 0 , end = 0 , len1 = 0 , len2 = 0;
  for(let i=0 ; i < s.length ; i++){
    len1 = getLongestSubstring(s,i,i); 
    len2 = getLongestSubstring(s,i,i+1);
 
    len = Math.max(len1,len2);

    if(len > end - start){
      start = i - Math.floor((len-1)/2) ;
      end = i+ Math.floor((len/2))
    }
  }
  return s.substring(start,end+1);
}
function getLongestSubstring(s,i,j){
  while(i >= 0 && j < s.length && s[i] === s[j]){
    i--;
    j++
  }
  return j - 1 - i ; 
}
console.log(longestPalindromicSubstringLeetcode5('abdcd'))