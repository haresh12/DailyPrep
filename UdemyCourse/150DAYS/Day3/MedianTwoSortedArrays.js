/*
  Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

  The overall run time complexity should be O(log (m+n)).

    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.
*/

//  i think first thing we need to do here is merge two sorted array.
// INCREDIBLE FIRST TIME DONE BY SELF IN FIRST TIME

/*
   TIME AND SPACE
   The time complexity of this approach is O(n), where n is the total number of elements in both arrays. This is because the algorithm must compare and merge every element in both arrays, which takes linear time.
   The space complexity is also O(n), as a new array is created to store the merged elements. This new array must have a size equal to the sum of the sizes of both input arrays.
*/
function mergeTwoSortedArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

function median(arr1, arr2) {
  let sortedArray = mergeTwoSortedArray(arr1, arr2);
  console.log(sortedArray);
  let median;
  let mid = Math.floor(sortedArray.length / 2); // UNDERSTAND AND NEVER FORGET ABOUT MATH.FLOOR BECAUSE BHAI ODD KE CASE ME 1.5 2.5 ESE INDEX AAYEGE

  if (sortedArray.length % 2 === 0) {
    // we have event length of merged array
    median = (sortedArray[mid] + sortedArray[mid - 1]) / 2;
  } else {
    median = sortedArray[mid];
    console.log(median);
  }
  return median;
}

console.log(median([1], [2, 4]));
