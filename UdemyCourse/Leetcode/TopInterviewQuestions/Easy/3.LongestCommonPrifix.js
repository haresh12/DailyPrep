/*
  Leetcode : 14 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

// Positive output
Input: strs = ["flower","flow","flight"]
Output: "fl"

// Negetive output
Input: strs = ["dog","racecar","car"]
Output: "" 

Approch first comes in mind : Loop through all the string see whats common in firtst
and second string then thats the LCS till now then when you go third string then 
check if it also contains LCS till now or any part of it.
*/


// This one getting faild with few  senarios like ['c','ac'] should return '' where ['ac','c'] should return c

// THE BIGGEST MISTAKE HERE IS USING INCLUDES BECAUSE INCLUDES DOES NOT MEANS IT IS PRIFIX
function LongestCommonPrifix(strs){
  if(strs.length === 1){
    return strs[0]
  }
  let lcs = strs[0];
  for(let i = 1 ; i < strs.length ; i++){
      if(strs[i].includes(lcs)){
        continue;
      }else{
         while(lcs.length != 0){
          lcs = lcs.substring(0,lcs.length-1);
          if(strs[i].includes(lcs)){
            break;
          }
         }
         if(lcs.length === 0){
          return ""; // Because no sub string found
         }
      }
  }
  return lcs;
}

function lcp(strs){
  if(strs && strs.length === 1) return strs[0];  
  let output = "" 
  let prev = ""
  for(let i = 0 ; i < strs.length -1 ; i++){
     output = getCommonPrefix(strs[i],strs[i+1]);

     // Understand this if why we need this
     // See in first comparsion we get output like flow from ["flower", "flow"]
     // Now when you compare ["flow","flight"] output will be fl So see prev out
     // put was flow and current output is fl so thats why to create new output we
     // need to compare these two string like ["flow",fl] and final output will be fl
     if(prev !== "" && prev !== output){
        output = getCommonPrefix(prev,output)
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

let strs  = ["flower","flow","flight"]
const result = lcp(strs)
console.log(result)