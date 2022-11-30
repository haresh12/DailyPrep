/*
   Leetcode : 242 
   Given two strings s and t, return true if t is an anagram of s, and false otherwise.
   An Anagram is a word or phrase formed by rearranging the letters of a different word or \
   phrase, typically using all the original letters exactly once.

   Input: s = "anagram", t = "nagaram"
   Output: true

   Input: s = "rat", t = "car"
   Output: false
*/

// BIG MISTAKE BHAI KEY CHECK map[s[i]] in map  ese nhi but s[i] in map ese krte he.
function isValidAnagram(s,t){
 if(s.length !== t.length) return false;

 let map = {};

 for(let i = 0 ; i < s.length ; i++){

  if(s[i] in map){
    map[s[i]]+=1;
  }else{
    map[s[i]] = 1;
  }
 }
 for(let i = 0 ; i < t.length ; i++){
  if(t[i] in map){
    map[t[i]]-=1; // now its time to decrease the count
  }else{
    map[t[i]] = 1;
  }
  if(map[t[i]] === 0){
    delete map[t[i]];
  }
 }
  // if after decresing the value by 1 if map become empty as we are delete keys if values reach
  // to 0 then thats the valid anagram but if we have any value in map then its not
 return Object.keys(map).length === 0 
}

console.log(isValidAnagram('anagram','nagaram'))


// just sort both string and then check if both are equal or not
//split('') FUN TRY split('') with blank and without it
function isValidAnagramOptimized(s,t){
 if(s.length !== t.length) return false
 return s.split('').sort().join() === t.split('').sort().join();
}

console.log("isValidAnagramOptimized",isValidAnagramOptimized('anagram','nagaram'))