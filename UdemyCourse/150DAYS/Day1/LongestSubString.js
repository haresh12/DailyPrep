/*
Given a string s, find the length of the longest substring without repeating characters.
*/

function longestSubstring(str) {
  let left = 0;
  let right = 0;
  let length = 0;
  let map = {};

  while (right < str.length) {
    if (str[right] in map) {
      // This is basically releated to rang like currently your window is in range of 4 to 7
      // and next char which was seen previously at index 2 so we really don't need to updated left in that case because our window is already out of range.
      if (left < map[str[right]] + 1) {
        left = map[str[right]] + 1; // 2 HOURS ONLY THIS LINE
      }
    }
    map[str[right]] = right;
    if (right - left + 1 > length) {
      length = right - left + 1;
    }
    right++;
  }
  return length;
}

console.log(longestSubstring("abcabcbb"));

/**
 The algorithm uses a sliding window approach to keep track of the longest non-repeating substring in the input string str. It uses two pointers, left and right, to define the start and end of the current substring, and a hash map map to store the last position of each character in the substring.

Time complexity: O(n), where n is the length of the input string str. The algorithm scans the string once, so its time complexity is proportional to the length of the string.

Space complexity: O(k), where k is the size of the character set. The hash map map stores at most k characters, so its space complexity is proportional to the size of the character set. In the worst case, when the character set is the entire Unicode character set, k is on the order of 100,000 characters, so the space complexity is O(100,000) = O(k).

Here's a simplified explanation of how the algorithm works: (MUST FOR ALL QUESTION)

Initialize the pointers left and right to the beginning of the string, and initialize length to 0.
While right is less than the length of the string:
a. If the character at position right is in the hash map, update left to the maximum of left and the previous position of the character plus 1.
b. Store the position of the character at position right in the hash map.
c. Update length to the maximum of length and right minus left plus 1.
d. Increment right.
Return length.
 */
