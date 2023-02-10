/**
 * Given a string s, return the longest palindrom  substring in s.
 *
 * Input: s = "babad Output: "bab" Explanation: "aba" is also a valid answer.
 *
 */

/*
 *  EXPLANATION OF BF : 
        The given code is for finding the longest palindromic substring in a given string using the brute force method. 
        It consists of two functions: palindromicSubStringBruteForce and palindromic.

       The palindromicSubStringBruteForce function takes a string as input and returns the longest palindromic substring in the string.
       It first checks if the length of the input string is less than or equal to 1, in which case it returns the string itself. 
       If the length of the string is greater than 1, it initializes a variable longest to an empty string and uses two nested for
       loops to form all possible substrings of the input string.

        The inner loop starts from the current position of the outer loop and keeps adding characters to the current substring until the end of the string.
        The palindromic function is called for each substring to check if it is a palindrome. The function returns a Boolean value indicating whether the input string is a palindrome or not. If the current substring is a palindrome and its length is greater than that of the current longest substring, then longest is updated with the current substring.

       The palindromic function takes a string as input and returns a Boolean indicating whether the string is a palindrome or not. It initializes an empty string revStr and then uses a for loop to reverse the input string. The reversed string is then compared with the input string, and the function returns true if they are equal and false otherwise.

      In the end, if longest is still an empty string, the function returns the first character of the input string. Otherwise, it returns the longest palindromic substring found.
 */

/*
       The time complexity of the palindromicSubStringBruteForce function is O(n^3), where n is the length of the input string. 
       This is because the function forms all possible substrings of the input string, and each substring takes O(n) time to check if it is a palindrome. The outer loop takes O(n) time, and the inner loop takes O(n^2) time, resulting in an overall time complexity of O(n^3).

       The space complexity of the palindromicSubStringBruteForce function is O(n^2), as it stores all substrings of the input string in memory. 
       The palindromic function has a space complexity of O(n), as it stores the reverse of the input string in memory.

      It's worth noting that this brute force approach is not efficient and can become very slow for large input strings. 
      There are more efficient algorithms, such as Manacher's algorithm, which have a time complexity of O(n).
   */
function palindromicSubStringBruteForce(string) {
  if (string.length <= 1) return string;
  let longest = "";
  for (let i = 0; i < string.length; i++) {
    let currString = string[i];
    for (let j = i + 1; j < string.length; j++) {
      currString += string[j];
      const isPalindrom = palindromic(currString);
      console.log(currString, isPalindrom);
      if (isPalindrom && currString.length > longest.length) {
        longest = currString;
      }
    }
  }
  return longest.length === 0 ? string[0] : longest;
}

function palindromicBF(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return str === revStr;
}

// console.log(palindromicSubStringBruteForce("abcba"));

/*
   Second solution :  https://www.youtube.com/watch?v=XYQecbcd6_c
*/

/*
    EXPLANATION AND TIME SPACE : 
    The solution is based on expanding the palindromes around the center.
    The function considers each character of the input string as a center of a potential palindrome and moves to both 
    left and right until the characters at both sides are equal.

    This approach handles both odd and even length palindromes by starting from a single center for odd 
    length palindromes and two centers for even length palindromes.

    The length of the longest palindromic substring is updated whenever a longer palindrome is found.

    The time complexity of this solution is O(n^2) as it needs to check for palindromes starting from each character, 
    and the space complexity is O(1) as it only uses a few extra variables.
*/
function longestPalindromicStrSol2(str) {
  if (str.length <= 1) return str;
  let res = "";
  let resLength = 0;

  // Consider each char as center and move to left and right until both are valid
  for (let i = 0; i < str.length; i++) {
    // even length palindromes
    let left = i;
    let right = i + 1;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const length = right - left + 1; // this is easy take abcba and take c as center and thing about it how this formula came
      if (length > resLength) {
        resLength = length;
        res = str.substring(left, right + 1); // don't use substr
        console.log(res);
      }
      left--;
      right++;
    }

    // odd length palindromes
    left = i;
    right = i;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const length = right - left + 1;
      if (length > resLength) {
        resLength = length;
        res = str.substring(left, right + 1);
        console.log(res);
      }
      left--;
      right++;
    }
  }
  return res.length > 0 ? res : str[0];
}

console.log(longestPalindromicStrSol2("babad"));
