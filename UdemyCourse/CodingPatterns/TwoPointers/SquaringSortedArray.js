/*
   Squaring a Sorted Array (easy)

   Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order

   Input: [-2, -1, 0, 2, 3]
   Output: [0, 1, 4, 4, 9]

   Input: [-3, -1, 0, 1, 2]
   Output: [0, 1, 1, 4, 9]

*/

/*
   EVEN ITS EASY BUT ITS TRICKY MAKE SURE WE DO ATLEAST 3 TO 4 TIMES

   BRUTE FORCE SIMPLEST : JUST FIND SQUARE OF ALL AND THEN ONCE YOU HAVE IT SORT THE ARRAY. BUT BHAI O(NLOGN) NA CHLE


   OPTIMAL : WITH O(N) TIME COMPLEXITY : PLEASE UNDERSTAND ALL POINTS 

   The tricky part is that we can have negative numbers in the input array, which makes it harder to generate the output array 
   with squares in sorted order.

   One easier approach could be to first locate the index of the first positive number in the input array. After that, we can utilize 
   the Two Pointers technique to iterate over the array, with one pointer moving forward to scan positive numbers, and the other pointer 
   moving backward to scan negative numbers. At each step, we can compare the squares of the numbers pointed by both pointers and append 
   the smaller square to the output array.

   Since the numbers at both ends can give us the largest square, an alternate approach could be to use two pointers starting at both 
   ends of the input array. At any step, whichever pointer gives us the bigger square, we add it to the result array and move to the 
   next/previous number. Please note that we will be appending the bigger square (as opposed to the previous approach) because the two 
   pointers are moving from larger squares to smaller squares. For that, we will be inserting the squares at the end of the output array.

   KON BADA HE DONE MESE VO LAST INDEX PE SET HOTE JAO
   PHELE N-1 PE SET HOGA THEN N-2 THEN ... 0;

   The above algorithm’s time complexity will be O(N) as we are iterating the input array only once.
   The above algorithm’s space complexity will also be O(N); this space will be used for the output array.

*/
function squaringSortedArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }

  let highestIndex = nums.length - 1;
  let left = 0;
  let right = nums.length - 1;
  let res = [];
  while (left <= right) {
    if (nums[left] > nums[right]) {
      res[highestIndex] = nums[left];
      left++;
    } else {
      res[highestIndex] = nums[right];
      right--;
    }
    highestIndex--;
  }
  return res;
}

console.log(squaringSortedArray([-5, -4, -3, -2, -1]));
