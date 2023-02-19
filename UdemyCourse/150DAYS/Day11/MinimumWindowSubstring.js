/*
    Minimum Window Substring : 
    
    Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.s
*/

// Just for learning
// function generateAllSubstring(str) {
//   if (str.length === 0) return;

//   // generate first char sub string
//   let firstCharSubString = str[0];
//   let remainingStr = str.substring(1);
//   let substring = firstCharSubString;
//   console.log(substring);
//   for (let i = 1; i < str.length; i++) {
//     substring += str[i];
//     console.log(substring);
//   }
//   // for remaining string recursion will do
//   generateAllSubstring(remainingStr);
// }

// generateAllSubstring("abc");

/*
  This is really hard problem even getting brute force solution was hard for me
  This is basically algo where we will use SLIDING WINDOW TECHNIQUE 
  Youtube :  https://www.youtube.com/watch?v=jSto0O4AJbM
  ONLY WAY TO LEARN THIS IS WATCH ABOVE VIDEO AS MANY AS TIME ITS POSSIBLE
*/

function minimumWindowSubstring(s, t) {
  // If either of the strings are empty, there is no possible substring
  if (s.length === 0 || t.length === 0) {
    return "";
  }

  // Create an object to store the frequency of each character in the target string
  let targetFreq = {};
  for (let i = 0; i < t.length; i++) {
    targetFreq[t[i]] = targetFreq[t[i]] ? targetFreq[t[i]] + 1 : 1;
  }

  // Initialize pointers and counters
  let left = 0;
  let right = 0;
  let counter = t.length;
  let minLen = Infinity;
  let start = 0;

  // Iterate over the string s and try to find a window that contains all the characters in t
  while (right < s.length) {
    const charRight = s[right];

    // If the current character is a desired character in the target string, decrease the counter
    if (targetFreq[charRight] > 0) {
      counter--;
    }

    // Decrease the frequency of the character in the target string
    targetFreq[charRight] = targetFreq[charRight]
      ? targetFreq[charRight] - 1
      : -1; // understood why we have -1 here because are are not really needed in targetFreq (Line 97 see and then understand this)

    // If we have found a valid window, move the left pointer and try to find a smaller window
    // ALL OTHER PART IS SIMPLE EXCEPT THIS WHILE
    while (counter === 0) {
      const charLeft = s[left];

      // If we have found a smaller window, update the minimum length and start position
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      // Increase the frequency of the character in the target string
      targetFreq[charLeft]++;

      // If the current character is a desired character in the target string, increase the counter
      if (targetFreq[charLeft] > 0) {
        counter++;
      }

      left++;
    }
    right++;
  }

  // If we were unable to find a valid window, return an empty string
  if (minLen === Infinity) {
    return "";
  }

  // Otherwise, return the substring of s that contains all the characters in t
  return s.slice(start, start + minLen);
}

console.log(minimumWindowSubstring("aa", "aa"));
