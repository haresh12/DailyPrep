
/*
  Gold Mine : This one is same as mimimum cost in maze but here two different 
  thing you can dig not three different way and also you don't have to start
  digging always with (0,0) you can start from anywhere from first colomn.
  Also we don't have to visit all the cells because with each call you will
  reach to next colomn and your digging will be done when you reach at last 
  colomn.
*/

/*
   Three ways of digging : 
   (i-1,j+1), (i,j+1) , (i+ 1,j+1) DRAW MAZE YOU WILL UNDERSTAND BETTER
*/
// First just find all ways of digging and print it

// let maze = [[0,1,4,2,8,2],[4,3,6,5,0,4],[1,2,4,1,4,6],[2,0,7,3,2,2],[3,1,5,9,2,4],[2,7,0,8,5,1]]

let maze = [[40,51,36,26,46,82,82,79,4,81,56,52,63,76,51,10,30,43,37,43,53,93,81,46,63],
[62,49,59,75,5,36,73,94,70,25,1,57,14,20,58,38,75,22,87,4,20,23,33],
[67,47,95,42,2,56,73,66,22,57,64,66,72,7,53,1,77,56,7,45,4,52,11,50,1],
[91,42,1,90,7,44,97,19,63,73,45,0,61,31,27,49,50,95,55,83,60,51,74,87,32],
[6,47,94,61,10,44,83,14,53,7,39,53,44,21,91,70,38,76,97,5,42,16,39,14,89]];
function printGoldMinePath(maze,i,j,psf){
  // WHAT IF LAST COLON PE PHOCH GYE THAT MEANS WE ARE DONE WITH DIGGING
  // ALSO I SHOULD BE IN MAZE
   if(i >= 0 && i < maze.length && j === maze[0].length -1){
    return;
   }
  // WHAT IF MAZE KE BHAR CHLE GYE
  if(i < 0 || i >= maze.length){
    return
  }
  // UP , STRIGHT , DOWN
  // Explore all three ways 
  printGoldMinePath(maze,i-1,j+1,psf+'U');
  printGoldMinePath(maze,i,j+1,psf+'S');
  printGoldMinePath(maze,i+1,j+1,psf+'D');
}

// printGoldMinePath(maze,0,0,''); // GOOD ONE

// Now in real question we don't need path we need find way to collect maximum gold

function memoGoldMine(maze,i,j,msf,memo,max){
  // WHAT IF LAST COLON PE PHOCH GYE THAT MEANS WE ARE DONE WITH DIGGING
  if(i >= 0 && i < maze.length && j === maze[0].length -1){
     if(max < msf){
       max = msf
     }
    return max;
   }
  // WHAT IF MAZE KE BHAR CHLE GYE
  if(i < 0 || i >= maze.length){
    return max; // BHAI HAR JGA SE RETURN KRNA HOTA HE VRNA NAN ANSWER ME 30 MIN CHLE JATE HE GOT IT NA
  }
  if(i >= 0 && i < maze.length && j >= 0 && j < maze[i].length && memo[i][j] !== -1){
    return memo[i][j]
  }
  let upMax = memoGoldMine(maze,i-1,j+1,maze[i-1] && maze[i-1][j+1] ? msf+maze[i-1][j+1] : msf,memo,max);
  let strightMax = memoGoldMine(maze,i,j+1,maze[i] && maze[i][j+1] ? msf+maze[i][j+1] : msf,memo,max);
  let downMax = memoGoldMine(maze,i+1,j+1,maze[i+1] && maze[i+1][j+1] ? msf+maze[i+1][j+1] : msf,memo,max);

  max = Math.max(upMax,Math.max(strightMax,downMax));

  memo[i][j] = max
  return max;
}

// give oppertunity to all the row for start like  [0,0] , [1.0] ,[2,0]
// WHY MEMO AT LINE NUMBER 75 THINK ABOUT IT BECAUSE THIS IS THE MISTAK WE MADE
// IF YOU DON'T CHANGE IT AFTER EVERY LOOP COMPLITION THEN IT WILL STORE THE OLD VALUE AND ALWAYS RETURN THOSE VALUE FOR OTHER LOOPS ALSO
function maxGold(){
  let maxGold = Number.MIN_SAFE_INTEGER;
  for(let i = 0 ; i < maze.length ; i++){
    let memo = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]
    maxGold = Math.max(maxGold,memoGoldMine(maze,i,0,maze[i][0],memo,Number.MIN_SAFE_INTEGER))
  }
  return maxGold;
}
 
console.log('maxGold',maxGold())