/*

Valid Anagram : 

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Input: s = "listen", t = "silent"
Output: true

Input: s = "rat", t = "car"
Output: false

Input: s = "hello", t = "world"
Output: false
*/

/*
  First instead of map i was using set because check with this input s="aa" t="a" here out put with
  set is true because set does not store duplicate and in that case in set we added 1 a and from
  t we removed 1 a and size of set became 0 but expected answer is false
*/

/*
TIME AND SPACE  : 

The time complexity of the isValidAnagram function is O(N), where N is the length of the input strings s and t. 
This is because the function iterates through each character in the 
input strings at most twice: once to build a map of character frequencies for s,and once to remove characters from the map for t.

The space complexity of this function is also O(N), because the function uses a map to store the frequencies 
of each character in s. In the worst case, where all characters in s are unique, the map will have N key-value pairs.
*/

// I THING SPACE COMPLEXITY WILL BE O(1) BECAUSE IF WE GET ALL LOWER CASE THEN MAX STORE CHAR IN MAP WILL BE 26
function isValidAnagram(s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();
  // first you added all unique
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  // now you are removing all unique
  for (let i = 0; i < t.length; i++) {
    // UNDERSTAND THIS IF ELSE BECAUSE OF THIS  I HAD TO SUBMIT THREE TIMES UNDERSTAND WHY IN ELSE PART WE ARE RETURNING FALSE
    // GOOD QUESTION TILL NOW IN WARM UP SECTION
    if (map.has(t[i])) {
      let val = map.get(t[i]);
      if (val > 1) {
        map.set(t[i], val - 1);
      } else {
        map.delete(t[i]);
      }
    } else {
      return false;
    }
  }

  // so here set size should be 0 if it is anagram
  return map.size === 0;
}

console.log(isValidAnagram("aa", "a"));
