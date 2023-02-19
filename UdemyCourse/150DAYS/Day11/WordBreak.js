/*
Word Break : 
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
*/

/*
   In this brute force solution we will try to use generate all the possible substring and 
   the will see if current substring exist in words bank or not if it exist then we will
   remove it from main string s and new string will be s = s.substring(whatever string we solved till now)
*/
/*
   Explanation :
This implementation uses recursion to generate all possible substrings of the input string and check if they are 
present in the dictionary. If a prefix is found in the dictionary, the function recursively checks if the 
remaining suffix can also be segmented into valid words. The function returns true as soon as it finds a 
valid segmentation, and false if it reaches the end of the string without finding a valid segmentation.

As mentioned earlier, this brute force approach has exponential time complexity, and is not scalable for large inputs. 
Nonetheless, it can be a useful starting point for developing more efficient dynamic programming solutions.
*/
// Brute force with TLE
function workBreakBR(str, words) {
  if (str.length === 0) {
    return true;
  }
  // Because of str.slice() we have to loop till < or equal to also in most case we just do till <
  for (let i = 0; i <= str.length; i++) {
    // generate the substring from index 0 till any word does not match from word directory
    let prefix = str.slice(0, i); // from 0 to i example leetcode : from str.slice(0,3) will be lee last one get ignored
    // Step 1 : check if above substring exist in word bank
    if (words.includes(prefix)) {
      // this is important step because now you found that atleast some part of main string exist in words
      // so we solved atleast half problem now next half problem we will have faith in recursion to solve this problem
      // Make sure you give only that string to recursion which you have't solved
      let restString = str.slice(i); // because i solved it from 0 to i but in slice last one get ignored so we solved from 0 to i-1
      let res = workBreakBR(restString, words); // so from i to end recursion will solve

      if (res) return true;
    }
    // if it does not go in if no issue just add one more char at line 31 if still same add again until we reach arr.length -1
  }
  return false;
}

console.log(
  workBreakBR("appleappleappleapplepenpenpenpenpn", ["apple", "pen"])
);

// NO TLR AFTER MEMO
/*
   Time And Space with memo :

The time and space complexity of the memoized version of the "Word Break" problem is improved over the brute force approach.

Time complexity: In the worst case, the memoized version still has to examine all possible substrings of the input 
string, so the time complexity is still O(n^2) where n is the length of the input string. However, memoization eliminates 
many redundant function calls, which means the actual running time is much faster than the brute force approach.

Space complexity: The memoization table adds additional space to the algorithm, which is proportional to the 
length of the input string. In the worst case, when the input string is not made up of words in the dictionary,
the table could store an entry for every substring of the input string, leading to a space complexity of O(n^2). 
However, in practice, the table would not need to store an entry for every substring, since many substrings 
would be impossible to break down into words. Therefore, the actual space complexity is typically much lower 
than the worst-case scenario.


*/
function workBreakBRWithMemo(str, words, memo) {
  if (str in memo) return memo[str];
  if (str.length === 0) {
    return true;
  }

  for (let i = 0; i <= str.length; i++) {
    let prefix = str.slice(0, i);
    if (words.includes(prefix)) {
      memo[prefix] = true;
      let restOfString = str.slice(i); // From i to till end
      let res = workBreakBRWithMemo(restOfString, words, memo);
      if (res) return true;
    }
  }
  memo[str] = false;
  return false;
}

console.log(
  workBreakBRWithMemo(
    "appleappleappleapplepenpenpenpenpn",
    ["apple", "pen"],
    {}
  )
);

// WITH TABULATION METHOD WILL DO IT LATER
