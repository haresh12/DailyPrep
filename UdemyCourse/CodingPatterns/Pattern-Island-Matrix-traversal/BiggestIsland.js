/*
   Biggest Island (easy)

Problem Statement
Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), find the biggest island in it. 
Write a function to return the area of the biggest island. 

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected
to other cells horizontally or vertically (not diagonally).

ONLY DIFFERENCE BETWEEN LAST QUESTION AND THIS IS HERE WE NEED TO FIND THE BIGGEST ISLAND SO I DON'T THINK IT IS GOING TO MAKE MUCH
DIFFERENCE IN LAST CODE THA WE WROTE

*/

// THIS ONE WE WELL TRY WITHOUT TAKING VISITED ARRAY AND WILL MODIFY GIVEN ARRAY IT SELF
// GOOD JOB HERE DONE IN 15 MINUTE ONLY UNDERSTAND RECURSION HERE AND ALSO WE DON'T NEED RECURSIVE VISITED HERE
// https://leetcode.com/problems/max-area-of-island/ (LEECODE DONE)
function biggestIsland(arr) {
  if (!arr || arr.length === 0) return 0;

  let biggest = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== 0) {
        let currentCount = 0; // ONE LINE CAN CHANGE YOUR LIFE
        currentCount = findBiggestIceland(arr, i, j, currentCount);
        biggest = Math.max(currentCount, biggest);
      }
    }
  }
  return biggest;
}

// EVEN ITS DONE WE NEED TO UNDERSTAND HOW RECURSION WORKS HERE
// BECAUSE I HAD TO THING 10 TIMES HOW I UPDATE COUNT HERE
function findBiggestIceland(arr, i, j, count) {
  if (
    i < 0 ||
    j < 0 ||
    i >= arr.length ||
    j >= arr[i].length ||
    arr[i][j] === 0
  )
    return count;

  arr[i][j] = 0;
  count++;

  count = findBiggestIceland(arr, i - 1, j, count);
  count = findBiggestIceland(arr, i + 1, j, count);
  count = findBiggestIceland(arr, i, j - 1, count);
  count = findBiggestIceland(arr, i, j + 1, count);

  return count;
}
let matrix = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(biggestIsland(matrix));
