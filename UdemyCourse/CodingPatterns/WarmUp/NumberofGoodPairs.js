/*
Number of Good Pairs : 

Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs, here are the indices: (0,3), (0,4), (3,4), (2,5).

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array is a 'good pair'.


Input: words = nums = [1,2,3]
Output: 0
Explanation: No number is repeating.
*/

// Brute force is easy but optimal solution not success in last 30 min
function numberOfGoodPairsBR(arr) {
  let pairs = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        pairs++;
      }
    }
  }
  return pairs;
}

console.log(numberOfGoodPairsBR([1, 2, 3, 1, 1, 3]));

// so if a number has already appeared 'p' times, we will have 'p-1' new pairs THIS IS LINE THAT I WAS GETTING

/*
   Explanation : 

   We can use a HashMap to store the frequency of each number in the input array nums.
   While iterating through the input array, for each number n in the array, we will increment the count of n 
   in the HashMap.
   Whenever we find a new occurrence of a number, we have found a new pair.
   Every new occurrence of a number can be paired with every previous occurrence of the same number. 
   This means if a number has already appeared p times, we will have p-1 new pairs.
   Hence, whenever we find a new occurrence of a number (that is, its count is more than 1), 
   we will add p-1 to pairCount, which keeps track of the total number of good pairs.

   The time complexity of the algorithm is  O(N), where  is the length of the input array nums.
   The reason for this is that the algorithm only needs to loop through each element of the array once,
   and the operations performed inside the loop (putting elements into the map, getting their values, and incrementing pairCount) 
   all have constant time complexity.

   The space complexity of the algorithm is O(N), where  is the length of the input array nums. 
   This is because the algorithm uses a HashMap to store the frequency of each number in the input array,
    which can take up to (N) space in the worst case scenario if all the elements in the array are unique. [1,2,3]
*/
function numGoodPairs(nums) {
  let pairCount = 0;
  let map = {}; // Use an object instead of Map
  for (let n of nums) {
    map[n] = (map[n] || 0) + 1; // increment the count of 'n' in the map
    // every new occurrence of a number can be paired with every previous occurrence
    // so if a number has already appeared 'p' times, we will have 'p-1' new pairs
    pairCount += map[n] - 1;
  }
  return pairCount;
}

console.log(numGoodPairs([1, 2, 3, 1, 1, 3]));
