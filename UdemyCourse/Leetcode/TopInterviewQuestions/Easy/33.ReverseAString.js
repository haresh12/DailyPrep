/*
   Leetcode : 343
   Write a function that reverses a string. The input string is given as an array of characters s.
   You must do this by modifying the input array in-place with O(1) extra memory.

   Input: s = ["h","e","l","l","o"]
   Output: ["o","l","l","e","h"]
*/


function reverse(arr){
 if(!arr) return null;
 let i = 0 , j = arr.length-1;
  while(i < j){
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
   i++;
   j--; 
  }
 return arr; 
}

console.log(reverse(["H","a","n","n","a","h"]));
