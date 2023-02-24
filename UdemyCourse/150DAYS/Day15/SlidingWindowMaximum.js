/*
You are given an array of integers nums, there is a sliding window of size k which is moving from the very 
left of the array to the very right. 
You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.


Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

 Input: nums = [1], k = 1
 Output: [1]
*/

// Good thing that brute force is done by self bad thing that is not be submitted in leetcode. (Time Limit Exceeded)
function windowMax(nums, k) {
  let ans = [];
  let max;

  for (let i = 0; i < nums.length - k + 1; i++) {
    max = nums[i];
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    ans.push(max);
  }
  return ans;
}

console.log(windowMax([1, 3, -1, -3, 5, 3, 6, 7], 8));

// THIS CAN BE EASILY DONE WITH PRIORITY QUEUE BUT JS DON'T HAVE IN BUILT WITH O(logn) priority and can use array.sort() but its
// like nlogn time complexity which is again not optimized way

/*
   Deque (Double-ended Queue) : SOMETHING NEW THAT LEARNED TODAY ALSO GREAT THING (BHAI JS HAI YHA ARRAY HE SAB KUSH HE)

   EXPLANATION : 
   The Sliding Window Maximum problem asks you to find the maximum value in each contiguous subarray of size k in an array of integers.
   One efficient way to solve this problem in JavaScript is to use a Deque (Double-ended Queue) data structure to store the indices of the elements in the current sliding window. The deque stores the indices in decreasing order of their corresponding values, 
   so that the front of the deque always contains the maximum element in the current window.

   The time complexity of the Sliding Window Maximum algorithm using a Deque is O(n), where n is the length of the input array nums. 
   This is because we iterate over the entire input array exactly once, and each index is added to the deque and removed at most once. The time complexity of each iteration of the loop is constant time, as we perform a constant number of operations for each element in the input array.

   The space complexity of the algorithm is O(k), where k is the size of the sliding window. This is because we maintain a
   deque of indices, which can contain at most k indices at any given time. The result array, 
   which stores the maximum value of each sliding window, also has a maximum size of n - k + 1, since 
   there are n - k + 1 possible sliding windows in an array of length n.
 
  Therefore, the overall space complexity of the algorithm is O(k) + O(n - k + 1), which simplifies to O(n), since n - k + 1 is at most n.
*/

function windowMaxOp(nums, k) {
  let result = [];
  let deque = [];
  for (let i = 0; i < nums.length; i++) {
    // STEP 1 REMOVE ELEMENT FROM DEQUE IF IT IS NOT IN CURRENT WINDOW MEANS [1,2,3,4] K=3 PHELE 1,2,3 YE WINDOW ME CHECK
    // KREGE THEN 2,3,4 RIGHT BUT BEFOR MOVING TO 2,3,4 BHAI PHELE VALA DEQUE MESE REMOVE KR DO BECAUSE USKA KYA KAAM ABI
    // VO CURRENT WINDOW ME HE HAI NHI.

    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // STEP 2 left me jitne bi element current vale se chote he na use remove krdo example deque = [7,2,3,6] => current widow me
    // last se dekhna start kre to 2 or 3 dono 6 se chote he so remove both make sure 7 bda he to current deque ki value
    // [7,6]

    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // STEP 3 ADD CURRENT INDEX TO DEQUE STEP 1 OR 2 ME SIRF REMOVE REMOVE GAME BHAI ADD TO KRO KUSH
    //  WHY WE ARE STORING INDEX SEE STEP 1 WHERE WE ARE CHECKING DEQUE[0] IN SHORT IN STEP 1 WE ARE
    // REMOVING INDICES SO ADD BI VHI KROGE NA YAAR
    deque.push(i);

    // LAST STEP 4:  agar tumhara k 3 he or tumne loop me atleast k jitne processed kr diye he element so then
    // result me push krna start kr do

    if (i >= k - 1) {
      result.push(nums[deque[0]]); // BECAUSE 0 PE HAMEHA BADA ELEMENT HOGA NHI BHAI BADE ELEMENT KI INDEX HOGI MAKE SURE
    }

    // AND STEP 5 NOTHING RESULT RETURN KR DO OR SO JAO
  }
  return result;
}

console.log(windowMaxOp([1, 3, -1, -3, 5, 3, 6, 7], 3));
