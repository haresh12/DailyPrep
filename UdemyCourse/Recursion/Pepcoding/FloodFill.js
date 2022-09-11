/*
   This is the first question where we will be using backtracking.
   UNDERSTAND BACKTRACKING FROM THIS VIDEO
   https://www.youtube.com/watch?v=R1URUB6_y2k&list=PL-Jc9J83PIiFxaBahjslhBD1LiJAV7nKs&index=47
*/

// Here 1 are obsticals
let twodArray = [[0,1,0],[0,0,1],[0,0,0],[0,0,0,0]]
let boolean = [[false,false,false,false],[false,false,false,false],[false,false,false,false],[false,false,false,false]]

// WORST WAY TO CREATE TWO D ARRAY WITH DEFAULT VALUE TRY TO CHANGE VALUE OF [0][0] IT WILL CHANGE VALUE OF [1][0] [2][0] [3][0]
// let boolean = new Array(twodArray.length).fill(new Array(twodArray[0].length).fill(false))

// WORST AGAIN FIRST THING IN MORNING
// WASTED TWO HOURS JUST BECAUSE OF THE WAY 2D ARRAY WAS CREATED AT LINE 12
function getAllPath(sr,sc,arr,path,isVisited){
 if(sr < 0  || sc < 0 || sr === arr.length || sc === arr[0].length || arr[sr][sc] === 1 || isVisited[sr][sc] === true){
  return
 }
 if(sr === arr.length -1 && sc === arr[0].length - 1){
  console.log(path);
  return
 }
  isVisited[sr][sc] = true;
  getAllPath(sr-1,sc,arr,path+'T',isVisited);
  getAllPath(sr+1,sc,arr,path+'D',isVisited);
  getAllPath(sr,sc-1,arr,path+'L',isVisited);
  getAllPath(sr,sc+1,arr,path+'R',isVisited);
  isVisited[sr][sc] = false;

}

getAllPath(0,0,twodArray,'',boolean)