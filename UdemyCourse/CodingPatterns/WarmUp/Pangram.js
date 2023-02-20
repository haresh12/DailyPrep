/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing English letters (lower or upper-case),
return true if sentence is a pangram, or false otherwise.

Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.
*/

/*
  Question is simple only thing here is range of a to z which is 97 to 122
  Also try to use Map then {} this object no difference but Map me apna pan hai kush
*/

// ONE THING LEARNED HERE THAT WHY NOT TO USE MAP I KNOW IT WON'T MAKE MUCH DIFF BUT WE REALLY DON'T
// WANT TO STORE CHAR MULTIPLE TIME
function panagram(str) {
  let set = new Set();
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(str[i]) >= 97 && str.charCodeAt(str[i]) <= 122) {
      set.add(str[i], i);
    }
  }
  return set.size === 26; // NOT map.keys().length Not map.size() bhai size variable he java nhi he ye
}

console.log(panagram("TheQuickBrownFoxJumpsOverTheLazyDog"));
