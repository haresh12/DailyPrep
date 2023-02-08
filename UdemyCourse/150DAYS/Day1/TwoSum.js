/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.


Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

*/

/* 
Time and space :
The time complexity of this function is O(n), where n is the length of the input array 'arr'. This is because the function uses a single loop to traverse the array, 
and each iteration of the loop takes constant time to store the current element in a hash map and check if the complement of the target exists in the map.

The space complexity of this function is also O(n), where n is the length of the input array 'arr'. 
This is because the function uses a hash map to store the elements of the array and their indices, 
and the size of the hash map grows linearly with the size of the input array.

*/

/*
    Alternative approach :

    The approach shown above is an efficient and commonly used one to solve the two-sum problem. An alternative approach could be to sort the input array first, and then use two pointers, 
    one starting from the beginning of the array and the other starting from the end, to find the two elements that sum up to the target.

    However, this alternative approach has a time complexity of O(n log n) due to the sorting step, and also requires 
    the input array to be modified. Additionally, it may not be as intuitive as the hash map approach. Hence, 
    the hash map approach is often a good choice when solving the two-sum problem.

*/
function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in map) {
      const indexFromValue = target - arr[i];
      const firstIndices = map[indexFromValue];
      return [firstIndices, i];
    } else {
      map[arr[i]] = i;
    }
  }
}

console.log(twoSum([3, 2, 4], 7));
