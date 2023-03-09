/*
    Flood Fill (easy)

Problem Statement

Any image can be represented by a 2D integer array (i.e., a matrix) where each cell represents the pixel value of the image.

Flood fill algorithm takes a starting cell (i.e., a pixel) and a color. The given color is applied to all horizontally and 
vertically connected cells with the same color as that of the starting cell. Recursively, the algorithm fills cells with the 
new color until it encounters a cell with a different color than the starting cell.

Given a matrix, a starting cell, and a color, flood fill the matrix.

YOU HAVE STARTING POINT JUST START FROM THEN MAKE YOUR 4 RECURSIVE CALL NOW THESE RECURSIVE CALLS SHOULD END WHEN WE HAVE VALUE
0. ALSO WHENEVER YOU GET VALUE 1 MAKE SURE TO CHANGE THAT TO GIVIN COLOR.

NO NEED TO TAKE VISITED ARRAY BECAUSE WHENEVER YOU ARE AT 1 YOU ARE ALREADY CHANGING IT TO GIVEN COLOR SO YOU WON'T HAVE ENDLESS
LOOP. 

*/

function floodFillColors(arr, i, j, color) {
  let currentColor = arr[i][j];
  return floodFillColorsDFS(arr, i, j, color, currentColor);
}
// FIRST GOOD JOB BUT FEW POINTS TO LEARN HERE : https://leetcode.com/problems/flood-fill/submissions/911512115/
// EDGE CASES MATTERS : [[0,0,0] , [0,0,0]] => THIS ONE CASE CHANGED ENTIRE STUFF UNDERSTAND THAT ARR[I][J] = 1
// PE COLOR FILL NHI KRNE BHAI ISLIYE CURRENT COLOR NIKALNA PDA
// CHECK TWICE THING TWICE YES MAINLY IN BASE CASE THING TWICE
// AND LAST POINT DRY DRY DRY RUN RUN RUN MATTERS EVERYTHING ELSE IS SECONDARY

/*
   TIME AND SPACE :

   Time complexity the above algorithm will be ,O(M*N) where ‘M’ is the number of rows and 'N' is the number of columns of the input matrix. 
   This is due to the fact that, in the worst case, we might have to fill the whole matrix.

   DFS recursion stack can go  deep when we have to fill the whole matrix. Hence, the space complexity will be  O(M*N), 
   where ‘M’ is the number of rows and 'N' is the number of columns of the input matrix.
*/
function floodFillColorsDFS(arr, i, j, color, currentColor) {
  if (
    i < 0 ||
    j < 0 ||
    i >= arr.length ||
    j >= arr[i].length || // arr[i].length bhai arr.length nhi sirf copy past nhi krna wasted 30 min
    arr[i][j] === color ||
    arr[i][j] !== currentColor
  ) {
    return arr;
  }
  if (arr[i][j] === currentColor) arr[i][j] = color;
  arr = floodFillColorsDFS(arr, i - 1, j, color, currentColor);
  arr = floodFillColorsDFS(arr, i + 1, j, color, currentColor);
  arr = floodFillColorsDFS(arr, i, j - 1, color, currentColor);
  arr = floodFillColorsDFS(arr, i, j + 1, color, currentColor);

  return arr;
}

console.log(
  floodFillColors(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    1,
    0,
    2
  )
);
