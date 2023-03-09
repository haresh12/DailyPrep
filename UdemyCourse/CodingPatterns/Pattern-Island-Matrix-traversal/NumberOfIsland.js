/*
   Number of Islands (easy)

Problem Statement

Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), count the number of islands in it.
An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected 
to other cells horizontally or vertically (not diagonally).

 This is basically a graph problem where each value in matrix is vertice and each on has four edges left,right top and bottom
 Also here we need to manage visited array also
*/
// GREAT DONE BY SELF IN FIRST ATTEMPT

/*
   TIME AND SPACE :

The time complexity of the numOfIsland function is O(m*n), where m is the number of rows in the input arr and n is the number of columns.
This is because the function visits every vertex in the 2D array exactly once, and each visit takes constant time.

The time complexity of the countIsland function is also O(m*n), but each individual recursive call takes constant time. 
This is because the function visits every vertex in the connected component (island) exactly once, and each visit takes constant time.

The space complexity of the numOfIsland function is O(m*n), because the visited array created to track which vertices have been
visited requires space proportional to the input arr.

The space complexity of the countIsland function is O(m*n) as well, because the recursive call stack can grow as large as the total 
number of vertices in the connected component (island).
*/

// UNDERSTAND WHEN TO SAY N SQUARE AND WHEN TO SAY M*N BHAI DONO ARRAY ALAG HE
function numOfIsland(arr) {
  // lets first create visited array to track
  // ONLY THING TO LEARN HERE IS LEARN TO CREATE VISITED ARRAY IN MORE FENCY WAY
  const visited = new Array(arr.length)
    .fill([])
    .map(() => new Array(arr[0].length).fill(false));

  //   let visited = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let temp = [];
  //     for (let j = 0; j < arr[i].length; j++) {
  //       temp.push(false);
  //     }
  //     visited.push(temp);
  //   }

  // Now visit every vertice
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // should not be visited and should not be 0
      if (arr[i][j] !== 0 && visited[i][j] === false) {
        countIsland(arr, i, j, visited);
        count++;
      }
    }
  }
  return count;
}

function countIsland(arr, i, j, visited) {
  // WE HAVE STUPID RECURSIVE CALLS SO BASE CASE SHOULD BE SMART
  if (
    i < 0 ||
    j < 0 ||
    i >= arr.length ||
    j >= arr[i].length ||
    arr[i][j] === 0 ||
    visited[i][j] === true // MERE BHAI VISITED TRUE HO TO RETURN JANA HAI NA KI FALSE
  )
    return;
  // FIRST THING AS SOON AS YOU COME INSIDE THIS RECURSIVE CALL MAKE SURE TO MAKE VISITED TRUE
  visited[i][j] = true;

  // Next call to all four edges left , right , top and bottom
  countIsland(arr, i - 1, j, visited);
  countIsland(arr, i + 1, j, visited);
  countIsland(arr, i, j - 1, visited);
  countIsland(arr, i, j + 1, visited);
}
let matrix = [
  [1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

console.log(numOfIsland(matrix));
