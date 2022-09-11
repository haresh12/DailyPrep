/*
 This problem will be same as maze problem with ROW , COLON AND DIAGONAL PATH BUT ONLY ONE THING IS 
 DIFFERENT HERE IS THAT WE WII HAVE SOME OBSTICAL IN SOME OF THE POINTS

 LIKE THING ABOUT AT ROW COLON (2,1) WE HAVE RIVER OR ROCK THEN WE CAN NOT GO IN THAT WAY
*/

/*
  See this is simple like whenever you see any obstical just don't go into that part 
  and its working fine when we put like false so it don't go inside the condition but
  need to check when its not working when we put value like 'river
*/
/* NOT DONE WORST*/
let mazeObs = [[true,false],[true,true]];
function getMazePathWithObs(path,row,col,arr){
if(row === arr.length -1 &&  col === arr[0].length -1){
  console.log(path)
  return;
}


if(row+1 < arr.length && col+1 < arr[0].length -1 && arr[row][col] === false){
  console.log('in')
  return;
}
if(row < arr.length){
  getMazePathWithObs(path+'R',row+1,col,arr)
}
if(col < arr[0].length){
  getMazePathWithObs(path+'C',row,col+1,arr)
}
}

getMazePathWithObs('',0,0,mazeObs)