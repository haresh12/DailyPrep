

/*
   Maze path minimum cost : same as stairs path but only difference is here we have maze rather then stairs
*/

// First thing first create 5 * 5 maze
// let maze = [[2,8,4,1,6,4,2],[6,0,9,5,3,8,5],[1,4,3,4,0,6,5],[6,4,7,2,4,6,1],[1,0,3,7,1,2,7],[1,5,3,2,3,0,9],[2,2,5,1,9,8,2]]

let maze = [[2,8,4],[6,0,9],[1,4,3]]

//First just find all maze path thats it PERFECT
function mazePath(maze,i,j,psf){
  if(i === maze.length -1 && j === maze[0].length - 1){
    console.log('psf',psf);
    return;
  }
  if(i >= maze.length || j >= maze[0].length){
    return;
  }
  mazePath(maze,i,j+1,psf+'H');
  mazePath(maze,i+1,j,psf+'V');

}

mazePath(maze,0,0,'');

// ALWAYS TRY WITH SMALL OUTPUT TO SEE REPEATIVE CALLES LIKE HERE I ONLY CAME TO KNOW
// THAT IF MEMO IS SAVING CALLES OR NOT IS AFTER TRYING WITH 3 * 3 MAZE IT WAS REALLY HARD TO UNDERSTAND WITH 7 * 7
// WITH MEMO 3 * 3 MAZE WILL BE CALLED 9 TIMES WITHOUT IT 14 TIMES

// ALSO ALWAYS YOU DON'T HAVE TO TAKE OBJECT AS MEMO AS HERE WE ARE TAKING 2D ARRAY BUT
// UNDERSTAND WE CAN DO THIS ONE ALSO WITH OBJECT ITS ALWAYS ABOUT PRIORITY

// Second maze path with minmum cost
function mazePathWithMimimumCost(maze,i,j,wsf,psf,cost,memo){
  if(i === maze.length - 1 && j === maze[0].length - 1){
      if(wsf < cost){
        cost = wsf;
      }
      return cost;
  }
  if(i >= maze.length || j >= maze[0].length){
    return cost;
  }
  if(memo[i][j] !== -1){
    return memo[i][j];
  }
  console.log('maze',i , j)
let leftCost =  mazePathWithMimimumCost(maze,i,j+1,wsf+maze[i][j],psf+'H',cost,memo)
let rigtConst = mazePathWithMimimumCost(maze,i+1,j,wsf+maze[i][j],psf+'V',cost,memo)
cost = Math.min(leftCost,rigtConst);

// memo[i][j] = cost
return cost;
}
// let memo = [[-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1]]

let smallMemo =  [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
console.log("Chota memo",mazePathWithMimimumCost(maze,0,0,maze[0][0],'',Number.MAX_SAFE_INTEGER,smallMemo))
