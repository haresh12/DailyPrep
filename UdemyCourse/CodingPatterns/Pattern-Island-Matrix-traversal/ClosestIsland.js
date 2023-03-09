/*
  
  Number of Closed Islands (easy)

You are given a 2D matrix containing only 1s (land) and 0s (water).

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally).

A closed island is an island that is totally surrounded by 0s (i.e., water). This means all horizontally and vertically connected cells of a closed island are water. This also means that, by definition, a closed island can't touch an edge (as then the edge cells are not connected to any water cell).

Write a function to find the number of closed islands in the given matrix.

UNDERSTANDING THE QUESTION IS MORE IMPORTANT THEN UNDERSTAND THE SOLUTION

FIRST MISTAKE I DID HERE IS OVER COMPLICATING THE QUESTION 

THIS QUESTION  IS  ====== NUMBER OF ISLAND QUESTION ONLY DIFFERENCE IS YOU NEED TO MAKE SURE THAT ITS NOT TOUCHING THE 
EDGES AND SECOND ONE IS WE NEED TO MAKE SURE THAT ITS SURROUNDED BY WATER.

*/

// function closestIsland(matrix) {
//   if (!matrix) return 0;

//   // First lets create the  visited arr
//   let visited = [];
//   for (let i = 0; i < matrix.length; i++) {
//     let temp = new Array(matrix[i].length).fill(false);
//     visited.push(temp);
//   }

//   let count = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] !== 1 && visited[i][j] === false) {
//         let closest = countClosestIsland(matrix, i, j, visited);
//         console.log(closest);
//         if (closest) count++;
//       }
//     }
//   }
//   return count;
// }

// function countClosestIsland(arr, i, j, visited) {
//   if (i <= 1 || j <= 1 || i >= arr.length - 1 || j >= arr[i].length - 1) {
//     return false;
//   }

//   if (isClosest(arr, i, j, visited)) {
//     return true;
//   }
//   visited[i][j] = true;

//   let closest = true;
//   closest &= countClosestIsland(arr, i + 1, j, visited);
//   closest &= countClosestIsland(arr, i + 1, j, visited);
//   closest &= countClosestIsland(arr, i, j - 1, visited);
//   closest &= countClosestIsland(arr, i, j + 1, visited);

//   return closest;
// }

// function isClosest(arr, i, j, visited) {
//   if (
//     (arr[i - 1][j] === 1 || visited[i - 1][j] === true) &&
//     (arr[i + 1][j] === 1 || visited[i + 1][j] === true) &&
//     (arr[i][j - 1] === 1 || visited[i][j - 1] === true) &&
//     (arr[i][j + 1] === 1 || visited[i][j + 1] === true)
//   ) {
//     return true;
//   }
//   return false;
// }
// MUST MUST DRY RUN
//https://leetcode.com/problems/number-of-closed-islands/submissions/912135620/ (SUBMITTED)

//https://www.youtube.com/watch?v=JJ5FxoLckMw (TRY WITH THIS)
function closestIsland(matrix) {
  let visited = [];
  for (let i = 0; i < matrix.length; i++) {
    visited.push(new Array(matrix[i].length).fill(false));
  }

  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 && visited[i][j] === false) {
        let closest = isClosestIsland(matrix, i, j, visited);
        if (closest) count++;
      }
    }
  }
  return count;
}
function isClosestIsland(arr, i, j, visited) {
  // IF THIS IS NOT FALSE MEANS CURRENT CELL IS GOOD BUT NOW NEXT ONE CONDITION SHOULD BE MERE CHARO SIDE PANI PANI  YA TO LAND
  if (i < 0 || i >= arr.length || j < 0 || j >= arr[i].length) {
    return false;
  }
  if (matrix[i][j] == 1 || visited[i][j] === true) {
    return true;
  }
  visited[i][j] = true;

  let closest = true;
  // understand why and condition because agar ek bi side pani nhi hua then not worth
  closest &= isClosestIsland(arr, i + 1, j, visited);
  closest &= isClosestIsland(arr, i, j + 1, visited);
  closest &= isClosestIsland(arr, i, j - 1, visited);
  closest &= isClosestIsland(arr, i - 1, j, visited);
  return closest;
}

// LETS SPEND MORE TIME AND TRY TO UNDERSTAND https://www.youtube.com/watch?v=JJ5FxoLckMw THIS TECHNIQUE
// PERFECT THIS APPROACH MAKES MORE SENSE : https://leetcode.com/problems/number-of-closed-islands/submissions/912240168/
function closestIslandOp(matrix) {
  // First i will travel all the cell in boundaries and make it 0 if it is 1 because boundaries pe agar
  // land hoga to vo so charo side water se kbi surrounded nhi ho skta also uske connected jo land hai
  // uspe bi dfs chla dena because is ek ke karn vo bi nhi all four side nhi bad payege

  // Now once you are done with above part then entire question is similar to Number of lands problem
  // so just count that and those wil be 100% surrounded by water.

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // GREAT THING LEARNED TODAY ABOUT BOUNDRIES IN MATRIX
      if (i * j === 0 || i == matrix.length - 1 || j === matrix[0].length - 1) {
        if (matrix[i][j] === 0) dfs(matrix, i, j);
      }
    }
  }
  // TILL THIS POINT ALL THE BOUNDRIES WILL BE CONVERTED IN WATER AND NOW JO BI BACHA HOGA VO MUST ME SURROUNDED BY WATER HOGA

  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // GREAT THING LEARNED TODAY ABOUT BOUNDRIES IN MATRIX
      if (matrix[i][j] === 0) {
        dfs(matrix, i, j);
        count++;
      }
    }
  }
  return count;
}

function dfs(arr, i, j) {
  if (
    i < 0 ||
    i >= arr.length ||
    j < 0 ||
    j >= arr[i].length ||
    arr[i][j] === 1
  ) {
    return;
  }
  arr[i][j] = 1;

  dfs(arr, i - 1, j);
  dfs(arr, i + 1, j);
  dfs(arr, i, j - 1);
  dfs(arr, i, j + 1);
}
let matrix = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
];
console.log(closestIslandOp(matrix));
