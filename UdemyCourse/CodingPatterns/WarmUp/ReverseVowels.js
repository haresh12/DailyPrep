/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Input: s= "hello"
Output: "holle"

Input: s= "AEIOU"
Output: "UOIEA"
*/

function isVowel(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u" ||
    char === "A" ||
    char === "E" ||
    char === "I" ||
    char === "O" ||
    char === "U"
  ) {
    return true;
  } else return false;
}
// THIS IS GREAT DONE BY SELF SEE RATHER THEN MODIFYING str JUST USE ARRAY AND AT LAST USE JOIN TO CONVERT
// AGAIN IN STRING
/*
   Main point is logic move left pointer until its not vowel same for right now when both are 
   vowel then just reverse them and move left and right pointer again
*/

/*
  TIME AND SPACE :

The time complexity of the reverseVowels function you provided is O(N), where N is the length of the input string str.
This is because the function iterates through the string at most once, swapping characters when both are vowels, 
and copying non-vowel characters to a new array.

The space complexity of this function is also O(N), as it creates a new array arr with the same length as 
the input string, and uses this array to build the reversed string.
*/
function reverseVowels(str) {
  if (str.length === 0) return "";

  let left = 0;
  let right = str.length - 1;
  let arr = new Array(str.length);
  while (left <= right) {
    if (isVowel(str[left]) && isVowel(str[right])) {
      // swap when both are vowel
      arr[left] = str[right];
      arr[right] = str[left];
      right--;
      left++;
    } else if (!isVowel(str[left])) {
      arr[left] = str[left];
      left = left + 1;
    } else if (!isVowel(str[right])) {
      arr[right] = str[right];

      right = right - 1;
    }
  }
  return arr.join("");
}

console.log(reverseVowels("DesignGUrus"));

// Now there is a way where you don't have to take array and you can directly modify str
// Simple we are converting original str to array and then doing modification in that and
// at last converting back to original arr. (REALLY USEFUL AND COOL IDEA)

/*
In this version of the function, the input string is converted to an array of characters using the split() method, 
modified in place using array destructuring to swap characters, and converted back to a string using the join() method. 
This approach has a space complexity of O(1), since it doesn't create a new array.
*/
function reverseVowelsOp(str) {
  if (str.length === 0) return "";

  let left = 0;
  let right = str.length - 1;
  str = str.split("");
  while (left <= right) {
    if (isVowel(str[left]) && isVowel(str[right])) {
      // swap when both are vowel
      [str[left], str[right]] = [str[right], str[left]];
      right--;
      left++;
    } else if (!isVowel(str[left])) {
      left = left + 1;
    } else if (!isVowel(str[right])) {
      right = right - 1;
    }
  }
  return str.join("");
}
