/*
   Island Perimeter (easy)

   You are given a 2D matrix containing only 1s (land) and 0s (water).

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). 
Each cell is considered connected to other cells horizontally or vertically (not diagonally).

There are no lakes on the island, so the water inside the island is not connected to the water around it. 
A cell is a square with a side length of 1..

The given matrix has only one island, write a function to find the perimeter of that island.

FEW THINGS THAT WE NEED TO UNDERSTAND IS THAT WE HAVE ONLY 1 ISLAND IN IT
SECOND WHAT IS EVEN PARIMETER

ALSO UNDERSTAND WHY WE MUST HAVE TO TAKE VISITED ARRAY FOR THIS SOLUTION
*/
// I KNOW ONE HOURS FOR THIS SOLUTION IS TWO MUCH TIME BUT DID IT
//https://leetcode.com/problems/island-perimeter/submissions/912286248/ (SUBMITTED)
function islandParimeter(matrix) {
  let visited = [];
  for (let i = 0; i < matrix.length; i++) {
    visited.push(new Array(matrix[i].length).fill(false));
  }

  let pamimeter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1 && !visited[i][j]) {
        pamimeter = dfs(matrix, i, j, visited, pamimeter);
      }
    }
  }
  return pamimeter;
}

function dfs(matrix, i, j, visited, pamimeter) {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[0].length ||
    matrix[i][j] === 0 ||
    visited[i][j]
  ) {
    return pamimeter;
  }
  visited[i][j] = true;
  // boundries

  if (i - 1 < 0 || matrix[i - 1][j] === 0) {
    pamimeter += 1;
  }
  if (i + 1 >= matrix.length || matrix[i + 1][j] === 0) {
    pamimeter += 1;
  }
  if (j - 1 < 0 || matrix[i][j - 1] === 0) {
    pamimeter += 1;
  }
  if (j + 1 >= matrix[i].length || matrix[i][j + 1] === 0) {
    //  j + 1 >= matrix.length to  j + 1 >= matrix[i].length 20 mins bhai
    pamimeter += 1;
  }
  pamimeter = dfs(matrix, i, j - 1, visited, pamimeter);
  pamimeter = dfs(matrix, i, j + 1, visited, pamimeter);
  pamimeter = dfs(matrix, i + 1, j, visited, pamimeter);
  pamimeter = dfs(matrix, i - 1, j, visited, pamimeter);
  return pamimeter;
}

let matrix = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandParimeter(matrix));

// Even we have done solution but i thing design gurus solution is much easier to understand
// Need to learn how this type of easy solution comes in mind

function islandParimeterOp(matrix) {
  let visited = [];

  for (let i = 0; i < matrix.length; i++) {
    visited.push(new Array(matrix[i].length).fill(false));
  }

  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1 && !visited[i][j])
        count = dfsOp(matrix, i, j, visited);
    }
  }
  return count;
}

function dfsOp(matrix, i, j, visited) {
  // JESE HE EDGE CASES MILE RETURN 1 KR DO
  if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length) {
    return 1;
  }
  if (matrix[i][j] === 0) return 1;
  if (visited[i][j] === true) return 0; // Because we already visited that

  visited[i][j] = true;
  let edgeCount = 0;

  edgeCount += dfsOp(matrix, i + 1, j, visited);
  edgeCount += dfsOp(matrix, i - 1, j, visited);
  edgeCount += dfsOp(matrix, i, j + 1, visited);
  edgeCount += dfsOp(matrix, i, j - 1, visited);

  return edgeCount;
}

console.log(islandParimeterOp(matrix));
