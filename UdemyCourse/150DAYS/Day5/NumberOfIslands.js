/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 You may assume all four edges of the grid are all surrounded by water.

*/

// WHAT A GREAT MISTAKE I MADE MAN HERE 1 IS STAND FOR ISLAND AND 0 FOR WATER IN THAT CASE arr[i][j] !== "1" THIS SHOULD BE arr[i][j] === "1"
// MEANS ONLY GO INSIDE IF IT IS ONE SAME IN RECURSIVE FUNCTION
// DONE BY SELF GOOD ONE

/*
Point by Point explanation 

First, the function numOfIslandsBR is defined. It takes in a 2D array called arr.

The next step is to initialize a 2D array called visited with all elements set to false. This array will be used to keep track of which cells have been visited while we search for islands.

The totalIslands variable is then set to 0. This variable will be used to keep track of the total number of islands in the 2D array.

The function then enters two nested for loops that iterate through each cell in the arr 2D array.

In the inner loop, the function checks if the current cell is not equal to "1" and if it has not been visited. If both of these conditions are true, the function countIsLand is called.

The countIsLand function is a recursive function that takes in the 2D array arr, the current row i, the current column j, and the 2D array visited as parameters.

The countIsLand function begins with a series of base conditions. If the current row or column is out of bounds, or if the current cell is equal to "1", or if the current cell has already been visited, the function returns immediately.

If none of the base conditions are met, the function marks the current cell as visited by setting visited[i][j] to true.

The function then calls itself four times to visit the cells above, below, to the left, and to the right of the current cell. This allows the function to search through the connected cells in the island and mark them as visited.

The numOfIslandsBR function continues looping through each cell in the arr 2D array and calling the countIsland function whenever it encounters an unvisited "1". Each time it calls the countIsland function, it increments the totalIslands variable.

Finally, the function logs the value of totalIslands to the console, which gives the total number of islands in the 2D array.

*/

/*
Time and Space 
The time complexity of this algorithm is O(m * n), where m is the number of rows and n is the number of columns in the 2D array. 
This is because we are visiting each cell in the array once.
The space complexity of this algorithm is O(m * n), because we are using a 2D visited array to keep track of which cells have already been visited.
Overall, the algorithm is efficient for small to medium-sized 2D arrays, but for larger arrays, The time complexity of this algorithm is O(m * n), where m is the number of rows and n is the number of columns in the 2D array. This is because we are visiting each cell in the array once.

The space complexity of this algorithm is O(m * n), because we are using a 2D visited array to keep track of which cells have already been visited.

Overall, the algorithm is efficient for small to medium-sized 2D arrays, but for larger arrays, there may be better algorithms that have a lower time and space complexity.
*/

//  There may be better algorithms that have a lower time and space complexity.

/*
    Other Algo with best time and space : 
    The algorithm I have provided is a standard solution to find the number of islands in a 2D array and is considered to be a good starting point. However, there may be other algorithms that are more efficient in terms of time and space complexity.

    For example, one can use a union-find data structure to solve this problem, which has a time complexity of O(m * n * log(m * n)). 
    Another approach is using a Depth-First Search (DFS) algorithm that uses a stack to keep track of the cells to be visited, 
   which has a time complexity of O(m * n) and a space complexity of O(min(m, n)).

   It ultimately depends on the specific requirements of the problem and the trade-off between time and space efficiency 
   that determines the best algorithm for a given use case.
*/
function numOfIslandsBR(arr) {
  let visited = [];
  for (let i = 0; i < arr.length; i++) {
    let innerArray = [];
    for (let j = 0; j < arr[i].length; j++) {
      innerArray.push(false);
    }
    visited.push(innerArray);
  }
  let totalIslands = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "1" && visited[i][j] === false) {
        countIsLand(arr, i, j, visited);
        totalIslands++;
      }
    }
  }
  return totalIslands;
}

function countIsLand(arr, i, j, visited) {
  // base conditions plays important role here
  if (
    i < 0 ||
    i >= arr.length ||
    j < 0 ||
    j >= arr[i].length ||
    arr[i][j] === "0" ||
    visited[i][j] === true
  ) {
    return;
  }
  // First thing first lets make visited true
  visited[i][j] = true;
  // 4 edges means  i can go left right top and bottom
  countIsLand(arr, i - 1, j, visited);
  countIsLand(arr, i + 1, j, visited);
  countIsLand(arr, i, j - 1, visited);
  countIsLand(arr, i, j + 1, visited);
}

numOfIslandsBR([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);
