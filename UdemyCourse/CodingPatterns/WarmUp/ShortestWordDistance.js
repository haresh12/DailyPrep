/*
Shortest Word Distance : 

Given an array of strings words and two different strings that already exist 
in the array word1 and word2, return the shortest distance between these two words in the list.

Input: words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], word1 = "fox", word2 = "dog"
Output: 5
Explanation: The distance between "fox" and "dog" is 5 words.

Input: words = ["a", "c", "d", "b", "a"], word1 = "a", word2 = "b"
Output: 1
Explanation: The shortest distance between "a" and "b" is 1 word. Please note that "a" appeared twice.

Input: words = ["a", "b", "c", "d", "e"], word1 = "a", word2 = "e"
Output: 4
Explanation: The distance between "a" and "e" is 4 words.

*/

// THIS IS INCREDIBLE WORKED ON FIRST RUN GREAT START
// Here understand why we are using math.abs() a se b jayo ya b se a rasta kabi minus me nhi hota hint

/*
The time complexity of this code is O(n), where n is the length of the input array arr. 
This is because the code iterates through the entire array once, performing constant time operations 
(such as map.set() and map.get()) for each element.

The space complexity of this code is O(1), because the size of the Map object does not depend on the 
size of the input array arr. The Map object will store at most two key-value pairs, 
so the amount of memory used is constant
regardless of the size of the input.
*/
function shortestWordDistance(arr, word1, word2) {
  let map = new Map(); // just to make things simple

  for (let i = 0; i < arr.length; i++) {
    if (map.size === 2 && arr[i] === word1) {
      let storedDistance = Math.abs(map.get(word1) - map.get(word2));
      let currDistance = Math.abs(i - map.get(word2));
      if (currDistance < storedDistance) {
        map.set(arr[i], i);
      }
    } else if (map.size === 2 && arr[i] === word2) {
      let storedDistance = Math.abs(map.get(word1) - map.get(word2));
      let currDistance = Math.abs(i - map.get(word1));
      if (currDistance < storedDistance) {
        map.set(arr[i], i);
      }
    } else if (arr[i] === word1 || arr[i] === word2) {
      map.set(arr[i], i);
    }
  }
  return Math.abs(map.get(word1) - map.get(word2));
}

console.log(shortestWordDistance(["a", "b", "c", "d", "e"], "a", "e"));

// If map looks confusing the we can do it by taking few variables also
// but time and space will be same but i think this approach is more readable
// THIS IS ALSO GOOD EXAMPLE OF TWO POINTER APPROACH
function shortestWordDistanceReadable(arr, word1, word2) {
  // means yet not found
  let position1 = -1;
  let position2 = -1;

  let shortest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word1) {
      // so update the position1
      position1 = i;
    }
    if (arr[i] === word2) {
      position2 = i;
    }

    // Now only if we got both means position1 and position2 should not be -1 then
    if (position1 !== -1 && position2 !== -1) {
      shortest = Math.min(shortest, Math.abs(position1 - position2));
    }
  }
  return shortest;
}

console.log(shortestWordDistanceReadable(["a", "b", "c", "d", "e"], "a", "e"));
