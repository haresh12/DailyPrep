
// THIS QUESTION BRUTE FORCE TOOK 3 HOURS OF TIME TO COME INTO THIS SOLUTION
// UNDERSTAND LONGEST PREFIX FROM STARTING OF INDEX ON ANYWHERE IN MIDDLE
// EX : [APPLE,ELPPA] WE HAVE PP MATCHING BUT STILL ANSWER WILL BE "" BECAUSE ITS NOT FROM STARTING OF STRING
// REGARDING OPTIMIZED SOLUTION THERE WAS ONE WITH TRIES BUT NO NEED TO DO IT NOW.
 function longestCommonPrefix (strs) {
  if(strs && strs.length === 1) return strs[0];  
  let output = "" 
  let prev = ""
  for(let i = 0 ; i < strs.length -1 ; i++){
     output = getCommonPrefix(strs[i],strs[i+1]);
     // this prev part is game changer in solution 
     if(prev !== "" && prev !== output){
        output = getCommonPrefix(prev,output) // prev you got a => now you got aa => but we need matching in all so answer will be a
     } 
      prev = output; 
     if(output === ""){
       return output;
     } 
  } 
  return output;   
};

function getCommonPrefix(str1,str2){ 
 let matchingStr = "";
  for(let i = 0 ; i < str1.length ; i++){
      if(str1[i] && str2[i] && str1[i] === str2[i]){
        matchingStr += str1[i];
      }else{
         return matchingStr;
      }  
  } 
 return matchingStr;   
}