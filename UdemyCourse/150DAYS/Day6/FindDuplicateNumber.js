/*
  Find the Duplicate Number  : 
  Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive
  There is only one repeated number in nums, return this repeated number.
  You must solve the problem without modifying the array nums and uses only constant extra space.

  Input: nums = [1,3,4,2,2]
  Output: 2

  Input: nums = [3,1,3,4,2]
  Output: 3

*/

// THIS QUESTION LOOKS LIKE USE SPECIFIC ALGORITHM SO THAT I DON'T KNOW

/*
  Now this is really confusing question which looks like array problem but we are using floyed cycle algo and fast and slow approach which we mainly 
  used in linkedList and to be real no one can have that strong intuition until and unless we have done that problem few times
*/

// SO HERE BEFORE COMING TO MOST OPTIMAL SOLUTION WILL DO FEW BRUTE FORCE SOLUTION BECAUSE NOT SURE INTERVIEW ME YE YAAD AAYEGA YA NHI

// sort the arr time nlogn because of sorting
function findDuplicateBR1(arr) {
  arr.sort();
  // now whatever duplicate will be it will be together like if first one is on 3rd index then next one will be on 4th index for sure.

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
  return -1;
}
console.log(findDuplicateBR1([1, 3, 4, 2, 2]));

// use map here this way we will reduce time to o(n) and space will be added o(n)
function findDuplicateBR2(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in map) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
  return -1;
}
console.log(findDuplicateBR2([1, 3, 4, 2, 2]));

// Now wii learn optimal solution

/*
    Floyd's Tortoise algo : 

    Floyd's Tortoise and Hare algorithm, also known as the "Cycle Detection Algorithm," is a method for finding the entrance 
    to a cycle in a sequence of elements.

    The algorithm uses two pointers, one slow and one fast, which both start at the beginning of the sequence.
    The slow pointer moves one step at a time, while the fast pointer moves two steps at a time.
    If the sequence contains a cycle, the fast pointer will eventually catch up to the slow pointer and both pointers will enter the cycle. 
    The algorithm then uses the two pointers to find the entrance to the cycle.

*/

/*
   Explanation : 

let slow = nums[0];: This line initializes the slow pointer to the first index of the nums array.

let fast = nums[0];: This line initializes the fast pointer to the first index of the nums array.

do { ... } while (slow !== fast);: This do-while loop performs cycle detection using the Floyd's Tortoise and Hare algorithm
The loop continues until slow and fast are equal, meaning that they have both entered a cycle.

slow = nums[slow];: Inside the loop, this line updates the slow pointer by moving it one step at a time.
nums[slow] returns the value at the index slow in the nums array, and the value is used as the new index for slow.

fast = nums[nums[fast]];: This line updates the fast pointer by moving it two steps at a time. nums[fast] returns the value at the index fast in the nums array, and nums[nums[fast]] returns the value at the index nums[fast] in the nums array. The value of nums[nums[fast]] is used as the new index for fast.

fast = nums[0];: After the loop, this line resets the fast pointer to its initial value, the first index of the nums array.

while (fast !== slow) { ... }: This while loop continues until `fast is not equal to slow
*/

// Time O(n) and Space 0(1) simple
function findDuplicateOptimal(nums) {
  // init slow and fast pointer both at first index
  let slow = nums[0];
  let fast = nums[0];

  // now we will move slow pointer by 1 index and fast by two until both are not same this is called cycle detection FLOYD

  do {
    slow = nums[slow]; // see here each time different index getting passed don't get confused like if we are not doing slow or high ++ then how its changing
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // now if you reach here then slow is going to be equal to fast.
  // Find the entrance to the cycle.

  fast = nums[0]; // means reset the fast to its initial value

  while (fast !== slow) {
    // Now both will be move one point at a time
    fast = nums[fast];
    slow = nums[slow];
  }
  return slow;
}
