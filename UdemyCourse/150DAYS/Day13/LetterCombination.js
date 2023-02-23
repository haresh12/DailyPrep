/*
    Letter Combinations of a Phone Number
    
   Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
   A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


   Input: digits = "23"
   Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

   Input: digits = ""
   Output: []

   Input: digits = "2"
   Output: ["a","b","c"]
*/

let freq = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

// KR DIKHAYA TIME LGA TO KYA HUA
function generateLetterCombinations(str, res, isFirstTime) {
  if (str.length === 0) {
    return res;
  }
  let first = str[0];
  let rest = str.substring(1);

  let op = freq[first];

  let temp = [];
  for (let i = 0; i < op.length; i++) {
    if (isFirstTime) {
      res.push(op[i]);
    } else {
      for (let j = 0; j < res.length; j++) {
        temp.push(`${res[j]}${op[i]}`);
      }
    }
  }
  temp = res.length > temp.length ? res : temp;
  return generateLetterCombinations(rest, temp, false);
}

// console.log(generateLetterCombinations("23", [], true));

// REALLY BETTER VERSION

/*
   TIME AND SPACE :

The time and space complexity of the generateLetterCombinations function are as follows:

Time complexity:

The function uses a backtracking algorithm to generate all possible letter combinations for the given input string of digits.
The algorithm generates all possible combinations, so the time complexity is exponential in the length of the input string.
Specifically, the time complexity is O(3^N × 4^M), where N is the number of digits that map to 3 letters (e.g., 2, 3, 4, 5, 6, 8) 
and M is the number of digits that map to 4 letters (e.g., 7, 9).
Space complexity:

The function uses a res array to store all the generated combinations.
The size of the res array is proportional to the number of generated combinations, which is exponential in the length of the input string.
Specifically, the space complexity is O(3^N × 4^M), where N is the number of digits that map to 3 letters and M is the number of digits that map to 4 letters.
Note that these time and space complexities are unavoidable for this problem, since there are 3 or 4 possible letters for 
each digit, and the function must generate all possible combinations. However, the backtracking algorithm used in this implementation 
is efficient and avoids unnecessary computations, so the function is still practical for most input sizes.





*/
function generateLetterCombinations(digits) {
  if (!digits) {
    return [];
  }

  const freq = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];

  // To understand this approach just do the first level of work and rest will be take care recursion
  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      res.push(combination);
      return;
    }

    const currentDigit = nextDigits[0];
    const letters = freq[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      backtrack(combination + letters[i], nextDigits.slice(1));
    }
  }

  backtrack("", digits);
  return res;
}

// Next day done practice
function generateLetterCombinations2(str, res, isFirstTime) {
  if (str.length === 0) {
    return res;
  }

  let first = str[0];
  let rest = str.substring(1);
  let temp = [];
  let val = freq[first];
  for (let i = 0; i < val.length; i++) {
    if (isFirstTime) {
      res.push(val[i]);
    } else {
      for (let j = 0; j < res.length; j++) {
        temp.push(`${val[i]}${res[j]}`);
      }
    }
  }

  res = isFirstTime ? res : temp;

  return generateLetterCombinations2(rest, res, false);
}

console.log(generateLetterCombinations2("23", [], true));
