/*
    Merge Intervals : 
    Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
    and return an array of the non-overlapping intervals that cover all the intervals in the input.

    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6]. 
    
    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

// Done by self assuming array will be sorted i know array won't be sorted but this way we atleast solved one part
// NOW LETS SORT ARRAY
// function mergeInterValsBR(arr) {
//   let i = 0;
//   let res = [];
//   if (arr.length === 1) return arr;

//   arr.sort((a, b) => a[1] - b[1]);
//   console.log(arr);
//   while (i < arr.length) {
//     let j = i + 1;
//     let anyMerged = false;
//     while (j < arr.length && arr[i][1] >= arr[j][0]) {
//       j++;
//       anyMerged = true;
//     }
//     if (anyMerged) {
//       let temp = [];
//       temp.push(arr[i][0]);
//       temp.push(arr[j - 1][1]);
//       res.push(temp);
//       i = j;
//     } else {
//       res.push(arr[i]);
//       res.push(arr[j]);
//       i += 2;
//     }
//   }
//   return res;
// }

// Simplest solution not done by me

/*

Explanation :
Check if the input intervals array is empty. If it is, return an empty array.

Sort the input intervals array based on the start time of each interval. This is done using the sort method and passing
in a comparator function that compares the start times of two intervals.

Initialize an empty array res to store the merged intervals. Add the first interval of the sorted array to res.

Loop through the rest of the intervals in the sorted array. For each interval, do the following:
a. Assign the current interval to a variable currentInterval and the last merged interval in res to a variable lastMergedInterval.

b. If the start time of the currentInterval is less than or equal to the end time of the lastMergedInterval, 
update the end time of the lastMergedInterval to be the maximum of its current end time and the end time of the currentInterval.

c. If the start time of the currentInterval is greater than the end time of the lastMergedInterval, add the currentInterval to res.

Return res.

*/

/*
 TIME AND SPACE : 

 The time complexity of this solution is O(n log n) due to the sorting step, where n is the number of intervals in the input array.
 The sorting step takes O(n log n) time on average, which is the dominant factor in the overall time complexity.

 The space complexity of this solution is O(n) because we need to store the merged intervals in the res array, 
 which has a size proportional to the number of intervals in the input array.

 Note that the space complexity does not include the space required for storing the input array or 
 any temporary variables used in the implementation, which are considered to be part of the input and are not included in the space complexity analysis.

*/
function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  // Sorting interval by start time
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let res = []; // this is where we will store the result
  res[0] = intervals[0]; // initially we are storing first interval to res and will do changes in it inside loop

  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastMergedInterval = res[res.length - 1];

    // This is where the actual magic happens
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // This condition is not rocket science just do dry run and you will get it
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      res.push(currentInterval);
    }
  }
  return res;
}

console.log(
  mergeIntervals([
    [1, 4],
    [2, 3],
  ])
);
