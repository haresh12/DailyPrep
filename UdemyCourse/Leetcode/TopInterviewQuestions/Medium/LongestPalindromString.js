/*
   Leetcode : 5

   Given a string s, return the longest palindromic substring in s.
*/

// THIS IS DP PROBLEM BUT RIGHT NOW DOING IT WITH ITERATIVE APPROCH
function logestPalindromSubstring(str){
    if(!str || str.length <=1 ) return str;
    let len = 0 , start = 0  , end = 0  , len1  = 0, len2= 0;
    for(let i = 0 ; i < str.length ; i++){
      len1 = findMaxPlandromTillThisIndex(str,i,i); // Need to pass same i for odd number
      len2 = findMaxPlandromTillThisIndex(str,i,i+1); // need to pasas i+1 for even number of palindrom
  
      len = Math.max(len1,len2); // from where we got larger length like from even or from odd
  
      if(len > end - start){ // This one is tricky need to update start and end
        start = i -  Math.floor((len-1)/2) ; // check with this babab where len is 5 i is 2 
        end = Math.floor(len/2) + i;                            
      }
    }
    return str.substring(start,end+1); // given the nature of substring we need to do + 1 so count last char also
  }
  
  function findMaxPlandromTillThisIndex(str,i,j){
    while(i >= 0 && j < str.length && str[i] === str[j]){
      i--; // move left side 
      j++; // move right side;
    }
    // if we come out means char are not equal any more or may be i or j out of bound
    // in that case just return length 
    return j - i - 1;
  }