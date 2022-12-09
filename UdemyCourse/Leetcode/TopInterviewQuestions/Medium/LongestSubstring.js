/*
   Leetcode : 3
   Given a string s, find the length of the longest  substring without repeating characters.

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.


    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

*/

/*
   Substring means findinig the some specific sequence of char from string.

*/

function logestSubstring(str){
    if( !str || str.length === 0) return 0;
    let curr = '';
    let longest = ''
    for(let i = 0 ; i < str.length ; i++){
      if(curr.includes(str[i])){
         if(curr.length > longest.length){
            longest = curr;
         }
         // This two lines are heart of this program
         let index = curr.indexOf(str[i]); // abca as soon as you reach to second time a at index 3 then its reapeating char in that case find
                                           // index like what index of its first occurnace here for a its 0 now create new substring
                                           // from that index + 1 because if we include that index then substring will be like abca and
                                           // if we don't include then substring will be like bca.
         curr = curr.substring(index+1) + str[i];
      }else{
        curr+=str[i];
      }
    }
    if(curr.length > longest.length) longest = curr;    // useful when we have cases like abcde so longest will be always blank                                               
    return longest.length;
  }