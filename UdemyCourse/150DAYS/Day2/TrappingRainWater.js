/*
  Trapping Rain Water : 
  Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

  Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
  Output: 6
  Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 In this case, 6 units of rain water (blue section) are being trapped.

 Input: height = [4,2,0,3,2,5]
 Output: 9
*/

// NOTE :  WE ARE GOING TO USE ARRAY PRE PROCESSING (UNDERSTAND THIS AND THINK ABOUT DIFFERENT PROBLEMS WHERE WE CAN USE THIS)
// https://www.youtube.com/watch?v=UZG3-vZlFM4

// These commented solution i tried and good that it passed in two case above but failed in [4,3,2] 1:30 hours spent

// function maxTrappingWater(heights) {
//   let i = 0;
//   let maxWater = 0;
//   while (i < heights.length) {
//     if ((i === 0 || i === heights.length - 1) && heights[i] === 0) {
//       i++;
//       // because water in corner bhai pani bahe jayga
//       continue;
//     }
//     let data = nextGreaterOrEqualElement(heights, i);
//     if (data) {
//       maxWater += data.waterIcanConsume;
//       i = data.nextIndexForWater;
//     } else {
//       i++;
//     }
//   }
//   console.log(maxWater);
// }

// function nextGreaterOrEqualElement(heights, index) {
//   let waterIcanConsume = 0;

//   for (let i = index + 1; i < heights.length; i++) {
//     if (heights[index] - heights[i] > 0) {
//       waterIcanConsume += heights[index] - heights[i];
//       prevValue = heights[i];
//     } else {
//       return {
//         waterIcanConsume: waterIcanConsume,
//         nextIndexForWater: i,
//       };
//     }
//   }
// }

// THERE IS BETTER WAY TO DO THIS WITH TWO POINTER WHERE WE DON'T HAVE TO TAKE EXTRA SPACE TO TAKE THIS LEFT AND RIGHT ARRAY
//https://www.youtube.com/watch?v=m18Hntz4go8
function maxTrappingWater(arr) {
  // First find left max for each index and right max for each index and store it in different array.
  let left = [];
  let right = [];
  left[0] = arr[0];
  right[arr.length - 1] = arr[arr.length - 1];

  // This will give all max left means if you ask arr[5] what is max value stored in your left then you can see in left[5] CALLED PREFIX
  for (let i = 1; i < arr.length; i++) {
    left[i] = Math.max(left[i - 1], arr[i]); // UNDERSTAND THIS INCREDIBLE THING
  }

  // This will give all max right means if you ask arr[5] what is max value stored in your right then you can see in right[5] CALLED SUFFIX
  for (let i = arr.length - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], arr[i]);
  }

  // NOW ONCE YOU HAVE BOTH THIS ARRAY THEN SIMPLE FORMULA WE HAVE TO USE IS Math.min(leftMax,rightMax) - heightOfThatIndex
  // WHY WE ARE TAKING MIN BECAUSE THING ABOUT IT IF AT INDEX 0 WE HAVE HEIGHT 4 AND AT INDEX 2 WE HAVE HEIGHT 5 AND IN BETWEEN
  // WE HAVE HEIGHT 0 SO NOW IF YOU TAKE HEIGHT 5 THEN 4 CAN NOT HANDLE IT AND PANI 4 KE UPER VALA BHE JAYEGA. WHY MINUS
  // heightOfThatIndex bhai jitni height hogi utna to pathar hoga na pani to uske uper aayga na pathar todke thodi.

  let maxWater = 0;
  for (let i = 0; i < arr.length; i++) {
    maxWater += Math.min(left[i], right[i]) - arr[i];
  }
  return maxWater;
}

// SIMPLE EXPLANATION OF CODE
// Imagine a bunch of buildings arranged side by side and you want to find out how much water can be trapped between these buildings.
// To do this, you can follow these steps:

// For each building, you need to find the tallest building on its left and the tallest building on its right.

// The water that can be trapped between the current building and the two tallest buildings will be equal to
// the minimum height of the two tallest buildings minus the height of the current building.

// Repeat this process for all the buildings, and add up all the trapped water to get the total trapped water.

// So, that's what the code above is doing - it's finding the tallest building on the left and right for each building and then using that information to calculate the trapped water.

/**
 * The time complexity of this algorithm is O(n), where n is the number of buildings. 
 * This means that the time it takes to solve the problem will grow linearly with the number of buildings.
   The space complexity of this algorithm is O(n), as well. 
   This means that the amount of memory used by the algorithm will also grow linearly with the number of buildings. 
   The algorithm uses two arrays, "left" and "right", each with a size of n, 
   to store the maximum height of the buildings on the left and right sides of each building, respectively.
 */

console.log(maxTrappingWater([4, 2, 3]));

/**
 *  BETTER APPROACH : 
 * there is a more efficient approach with a time complexity of O(n) and a space complexity of O(1). 
 * This approach uses two pointers, one starting from the left end and the other starting from the right end of the buildings array.
   At each step, we compare the height of the building at the left pointer with the height of the building at the right pointer.
   Whichever building is shorter, we move its pointer towards the center (because a taller building on that side will result in a larger trapped water volume).
   We keep doing this until the two pointers meet in the middle.
   This approach avoids the need to calculate and store the maximum heights on the left and right for each building, which saves space and time.
 */
