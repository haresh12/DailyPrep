/*
    Problem Challenge 2

You are given a 2D matrix containing only 1s (land) and 0s (water).

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). 
Each cell is considered connected to other cells horizontally or vertically (not diagonally).

Two islands are considered the same if and only if they can be translated (not rotated or reflected) to equal each other.

Write a function to find the number of distinct islands in the given matrix.

ONLY QUESTION COMES HERE THAT HOW CAN I CHECK IF TWO ISLANDS ARE SIMILAR OR NOT.

BEST QUESTION TILL NOW : HERE WE WILL ONLY FOCUS ON BELOW ONE THING

How do we decide if two islands are same?

If two islands are same, their traversal path should be same too. This means, if we perform a DFS or BFS on 
two equal islands starting from their top-left cell, the traversal pattern should be exactly same for both the islands.

We can utilize this fact to develop an algorithm.

While traversing an island, we can construct a string that maps the traversal path of the island. For example, 
here is the DFS traversal of the two same islands mentioned in Example-2 ( 'R' for right move, 'D' for down move, 'O'
for origin denoting the start): ORDR


ALSO NO DUPLICATE THEN WE HAVE SOMETHING CALLED SET MAN WHY TO ADD IN ARRAY AND USE INCLUDES AND ALL THEN

SET : THING ABOUT IT ATLEAST ONCE WHEN WE HAVE TO DEAL WITH DUPLICATE STUFF.

*/
/*
   Time Complexity : 
   Time complexity of the above algorithm will be O((M*N) , where ‘M’ is the number of rows and 'N' is the 
   number of columns of the input matrix. This is due to the fact that we have to traverse the whole 
   matrix to find islands.

   SPACE : 
   DFS recursion stack can go M*N deep when the whole matrix is filled with '1's. 
   Hence, the space complexity will be O(M*N) , where ‘M’ is the number of rows and 'N' is 
   the number of columns of the input matrix.

 
*/
function distinctIsland(matrix) {
  let visited = [];
  for (let i = 0; i < matrix.length; i++) {
    visited.push(new Array(matrix[i].length).fill(false));
  }

  let distinctSet = new Set();
  let str = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1 && !visited[i][j]) {
        let path = dfs(matrix, i, j, visited, "O");
        console.log(path);
        distinctSet.add(path);
      }
    }
  }
  return distinctSet.size;
}

function dfs(matrix, i, j, visited, direction) {
  if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length) {
    return "";
  }
  if (matrix[i][j] === 0 || visited[i][j]) {
    return "";
  }

  visited[i][j] = true;
  let landDirection = direction;

  landDirection += dfs(matrix, i - 1, j, visited, "T"); // TOP CELL
  landDirection += dfs(matrix, i + 1, j, visited, "D"); // DOWN CELL
  landDirection += dfs(matrix, i, j - 1, visited, "R"); // RIGHT CELL
  landDirection += dfs(matrix, i, j + 1, visited, "D"); // LEFT CELL

  landDirection += "B"; // DO DRY RUN FOR THIS I DON'T THING WE NEED IT BUT DRY RUN WILL GIVE US CLEAR IDEA

  return landDirection;
}

let matrix = [
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1],
];
console.log(distinctIsland(matrix));
