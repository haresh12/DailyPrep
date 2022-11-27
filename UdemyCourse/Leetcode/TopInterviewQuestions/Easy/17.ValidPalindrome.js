/*

Leetcode : 125
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Simple on just need to check if string is palindrome or not
*/


function isPalindrom(str){
  str = str.replace(/[^A-Za-z0-9]/g, ''); // I WILL ASK THIS INTERVIEWER HOW TO DO THIS
 if(str === '') return true;
 let reverseString = '';
 for(let i = str.length - 1 ; i >= 0 ; i--){
  reverseString+=str[i];
 }
 return reverseString === str;
}

console.log(isPalindrom('amanaplanacanalpanama'));