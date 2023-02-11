/*
   Container With Most Water : 
   
    You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

    Find two lines that together with the x-axis form a container, such that the container contains the most water.

    Return the maximum amount of water a container can store.

    Notice that you may not slant the container.

    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
    In this case, the max area of water (blue section) the container can contain is 49.

    Input: height = [1,1]
    Output: 1
*/

// SEE THIS IS BRUTE FORCE AND WE GET Time Limit Exceeded IN LEETCODE
function containerWithMostWaterBR(arr) {
  let totalMax = 0;
  for (let i = 0; i < arr.length; i++) {
    let currMax = Number.MIN_SAFE_INTEGER;
    for (let j = i + 1; j < arr.length; j++) {
      let val = Math.min(arr[i], arr[j]) * (j - i);
      currMax = Math.max(val, currMax);
    }
    if (currMax > totalMax) {
      totalMax = currMax;
    }
  }
  return totalMax;
}

// containerWithMostWaterBR([1, 1]);

// Have multiple loops any way to use map

/*
    Now here we need to use two pointer approach which will give result in  o(n) time :   https://www.youtube.com/watch?v=UuiTKBwPgAo
*/

/*
   EXPLANATION WITH TIME AND SPACE : 
   Time complexity: O(n) The code uses two pointers, left and right, to traverse the array from both ends. 
   The while loop runs until left pointer is less than the right pointer. In each iteration, 
   the pointer pointing to the smaller value is moved towards the other end. 
   This ensures that the loop runs in the worst case n/2 times, making the time complexity O(n).

   Space complexity: O(1) The code only uses a few variables to store the intermediate values, making the space complexity O(1).
*/
function containerWithMostWater(arr) {
  let maxWater = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let res = (right - left) * Math.min(arr[left], arr[right]);
    maxWater = Math.max(maxWater, res);

    // Now question comes here bhai kisko move kre left ya right ko and ans is whichever is small because you need max height so possible
    // hai aage or bda koi value mil jaye agar nhi bi mila and ye dono he max hue to inka maxWater to store he hoga.

    if (arr[left] > arr[right]) right--;
    else left++;
  }
  return maxWater;
}

console.log(containerWithMostWaterBR([1, 8, 6, 2, 5, 4, 8, 3, 7]));
