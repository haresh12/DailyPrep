/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Input: sentence = "A man, a plan, a canal, Panama!"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: sentence = "Was it a car or a cat I saw?"
Output: true
Explanation: Explanation: "wasitacaroracatisaw" is a palindrome.

*/

function isValidPalindrome(str) {
  // Now all things are fine but to remove all , and digit i  need to copy one regex line
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase(); // //Because Nitin is palindrome even is n !== N thats why lower case kr do

  str = str.split(""); // convert string to array (THIS IS AGAIN CAME INTO USE)
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(
  "isValidPalindrome",
  isValidPalindrome("Was it a car or a cat I saw?")
);

//  More Optimized approach with space O(1)

function isValidPalindromeOp(str) {
  let i = 0,
    j = s.length - 1; // initialize two pointers, one at the start and one at the end of the string
  while (i < j) {
    // continue until the two pointers cross over
    while (i < j && !s[i].match(/^[a-z0-9]+$/i)) {
      // move i forward until a letter or digit is found
      i++;
    }
    while (i < j && !s[j].match(/^[a-z0-9]+$/i)) {
      // move j backward until a letter or digit is found
      j--;
    }
    // compare the characters at i and j after converting them to lowercase
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false; // if they are not equal, the string is not a palindrome
    i++; // move i forward
    j--; // move j backwards
  }
  return true; // if the two pointers have crossed over, the string is a palindrome
}
