/*
   Leetcode : 66 
   You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
   Increment the large integer by one and return the resulting array of digits.

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

This one it tricky
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

*/

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

// Incredible solution no need to worry about big int or anything
/*
   Whenever you add mostly if will be added in last so just add 1 at last of loop
*/

function plusOne(digits){
  for(let i = digits.length - 1; i>=0;i--){
     digits[i]++;
     if(digits[i] > 9){
       digits[i] = 0; // Thing about it like 9999 if this is input then just do like 0000 because at last we are adding 1 in array
                      // with digits.unshift(1)
     }else{
      return digits;
     }
  }
  digits.unshift(1);
  return digits;
}