function LongestSubstringBruteForce(string){
 let i = 0;
 let currentSubstring = '';
 let currentLength = 0;
 let ans = 0
 while(i < string.length){
   if(!currentSubstring.includes(string[i])){
    currentSubstring+=string[i];
    currentLength++;
    i++;
    }else{
    let index = currentSubstring.indexOf(string[i]);
    string = string.substring(index+1)
    console.log("here",string)
    i=0;
    currentLength = 0;
    currentSubstring = ''
   }
   if(currentLength > ans){
    ans = currentLength;
   }
 }
 return ans
}

console.log(LongestSubstringBruteForce('pwwkew'))