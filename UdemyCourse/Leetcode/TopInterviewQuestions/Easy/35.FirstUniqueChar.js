/*
   Leetcode : 387
   Given a string s, find the first non-repeating character in it and return its index.
   If it does not exist, return -1.
*/

// ALWAYS UNDERSTAND THE REQUIREMENT FIRST DON'T JUMP INTO CODING
function firstUniqueChar(str){
  let map = {};
  for(let i = 0 ; i < str.length ; i++){
    if(str[i] in map){
      map[str[i]]++;
    }else{
      map[str[i]] = 1;
    }
  }

  // Simply we stored all the keys to map and as map maintain order then we are just checking
  // which map[key] value is === 1 in map because that one is non-repeating charcter
  for (const key in map) {
     if(map[key] === 1){
       return str.indexOf(key);
     }
  }
  return -1;
}

