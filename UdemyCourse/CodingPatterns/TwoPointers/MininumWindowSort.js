/*
   Problem Challenge 3: Minimum Window Sort (medium)

   Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

   Input: [1, 2, 5, 3, 7, 10, 9, 12]
   Output: 5
   Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted

   Input: [1, 3, 2, 0, -1, 7, 10]
   Output: 5
   Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted

   Input: [1, 2, 3]
   Output: 0
   Explanation: The array is already sorted

   Input: [3, 2, 1]
   Output: 3
   Explanation: The whole array needs to be sorted.
*/

/*
  Let's play the game of start , end and min_value
  start : Means first vo point jha se locha start hua hai 
  end : means kha ye locha khtm hoga
*/

/*
   INCREDIBLE JOB THIS ALSO GOT SUBMITTED ON LEETCODE
*/

/*
   TIME AND SPACE : 

   The function findStartPoint has a time complexity of O(n) since it iterates over the array from the beginning up to the given index,
   and it is called within the loop iterating over the array. Therefore, the overall time complexity of the function is O(n^2). 

   SPACE :  The space complexity of the function is O(1) since it does not use any extra space other than the constant amount of space used by the variables min, start, and end. 
   Therefore, the overall space complexity of the function is O(1).
*/

// DO IT AGAIN
function minimumWindowSort(arr) {
  // Lets first find minimum from array

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min);
  }

  let start = -1;
  let end = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= min) {
      min = arr[i];
    } else if (start === -1) {
      /*
        Here [1,2,0] see whe you reach at 0 value at that time current min will be 2 and 0 is less then 2 BUT THAT DOES NOT MEANS
        2 WILL BE OR START POINT BECAUSE 0 IS ALSO LESS THEN 1 MEANS 1 SHOULD BE OUR START POINT UNDERSTAND THIS POINT MUST.
      */
      start = findStartPoint(arr, i);
      end = i;
    } else {
      // ASK YOU SELF WHY WHY WHY WE NEED TO UPDATED START AGAIN AND WHY THIS CONDITION TOOK 30 MIN FOR ME TO COME UP WITH THIS
      if (findStartPoint(arr, i) < start) {
        // ONLY UNDERSTAND THIS POINT YOU WILL UNDERSTAND EVERYTHING
        start = findStartPoint(arr, i);
      }
      end = i;
    }
  }
  if (start === -1 && end === -1) return 0;
  return end - start + 1;
}

function findStartPoint(arr, index) {
  let valueAtCurrentIndex = arr[index];
  for (let i = 0; i < index; i++) {
    if (valueAtCurrentIndex < arr[i]) {
      return i;
    }
  }
}

// console.log(minimumWindowSort([3, 2, 1]));

/*
   Current solution that we have is not good with time complexity even it got submitted in leetcode and if you really understand
   well from designGuru solution its easy to understand but that intuition was hard to get.
   
   First understand that sorted array has minimum value at first index and max at last now.

   If i have value 10 at index 0  then at index 1 i should have value greater then or equal to 10 but if it is
   less then 10 means from here array is not sorted.

   Same for last index if at last index i have value 100 then index before that should have less then or equal value else
   from end this is the point from where array in not sorted

   NOW AFTER GETTING START AND END INDEX WE FEEL THAT WE ARE DONE WITH THE QUESTION BUT WHAT IF WE HAVE SMALLEST VALUE OF ENTIRE
   ARRAY IN BETWEEN START AND END INDEX AND ALSO WHAT IF WE HAVE MAX VALUE OF ARRAY BETWEEN START AND END INDEX BECAUSE IF THIS
   IS THE CASE THE YOU MUST HAVE TO CHANGE FIRST AND LAST INDEX

   If you understand last point then you understand the problem but if not please understand 10 times because entire program is depended on that
*/

function shortest_window_sort(arr) {
  let low = 0,
    high = arr.length - 1;
  // find the first number out of sorting order from the beginning
  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low += 1;
  }

  if (low === arr.length - 1) {
    // if the array is sorted
    return 0;
  }

  // find the first number out of sorting order from the end
  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  // find the maximum and minimum of the subarray
  let subarrayMax = -Infinity,
    subarrayMin = Infinity;
  for (k = low; k < high + 1; k++) {
    subarrayMax = Math.max(subarrayMax, arr[k]);
    subarrayMin = Math.min(subarrayMin, arr[k]);
  }

  // extend the subarray to include any number which is bigger than the minimum of
  // the subarray
  while (low > 0 && arr[low - 1] > subarrayMin) {
    low -= 1;
  }
  // extend the subarray to include any number which is smaller than the maximum of
  // the subarray
  while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
    high += 1;
  }

  return high - low + 1;
}

console.log(shortest_window_sort([1, 2, 3, 3, 3]));
