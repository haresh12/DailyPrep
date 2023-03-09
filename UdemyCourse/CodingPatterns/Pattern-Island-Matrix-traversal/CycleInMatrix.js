/*
   Problem Challenge 3
   Cycle in a Matrix (medium)

Problem Statement
You are given a 2D matrix containing different characters, you need to find if there exists any 
cycle consisting of the same character in the matrix.

A cycle is a path in the matrix that starts and ends at the same cell and has four or more cells. 
From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), 
if it has the same character value of the current cell.

Write a function to find if the matrix has a cycle.

*/

function cycleInMatrix(matrix) {
  let visited = [];

  for (let i = 0; i < matrix.length; i++) {
    visited.push(new Array(matrix[i].length).fill(false));
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!visited[i][j]) {
        let initialRow = i;
        let initialCol = j;
        let count = 0;
        let isCycle = dfs(matrix, i, j, initialRow, initialCol, visited, count);
        if (isCycle) return true;
      }
    }
  }
  return false;
}

function dfs(matrix, i, j, initialRow, initialCol, visited, count) {
  if (
    i < 0 ||
    j < 0 ||
    i >= matrix.length ||
    j >= matrix[i].length ||
    visited[i][j]
  ) {
    return false;
  }
  count++;
  visited[i][j] = true;
  if (count >= 4 && i === initialRow && j === initialCol) {
    return true;
  }
  let down = dfs(matrix, i + 1, j, initialRow, initialCol, visited, count);
  let top = dfs(matrix, i - 1, j, initialRow, initialCol, visited, count);
  let right = dfs(matrix, i, j - 1, initialRow, initialCol, visited, count);
  let left = dfs(matrix, i, j + 1, initialRow, initialCol, visited, count);
  visited[i][j] = false;

  return down || top || right || left;
}

let m = [
  ["a", "a", "a", "a"],
  ["b", "b", "b", "a"],
  ["a", "b", "b", "a"],
  ["a", "a", "a", "a"],
];
console.log(cycleInMatrix(m));
