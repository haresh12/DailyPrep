/*
 SEE IN JS WE CAN NOT CREATE ARRAY TWO DIMATIONAL ARRAY LIKE let arr = new int[][] THIS . THIS
 WAS POSSIBLE IN JAVA BUT NOT IN JAVASCRIPT SO WE NEED TO FIND WAY TO CREATE TWO D ARRAY IN 
 JS WITH DEFAULT VALUE OR WITH UNDEFINED VALUE. FOR DEFAULT VALUE WE CAN ALWAYS USE fill METHOD
 FROM ARRAY.
*/
// create two d array of 3*3 means 3 row and 3 colon 
//[ [ 5, 5, 5 ], [ 5, 5, 5 ], [ 5, 5, 5 ] ]
let twoDArray = [...Array(3)].map(e => Array(3).fill(''))
// console.log(twoDArray)
// // [
// //   [ 1, 1, 1, 1, 1 ],
// //   [ 2, 2, 2, 2, 2 ],
// //   [ 3, 3, 3, 3, 3 ],
// //   [ 4, 4, 4, 4, 4 ],
// //   [ 5, 5, 5, 5, 5 ]
// // ]
// let count = 0
// let twoDArray2 = [... Array(5)].map(e => Array(5).fill(++count))

// console.log(twoDArray2)

/*
  HERE INCREDIBLE THING HAPPEN SO SEE PREVIOULY I HAD BOTH CALL IN IF AND ELSE WHICH WAS
  GIVING ME WRONG ANSER WHY BECAUSE IT WILL GO TO IF CONDITION UNTIL IT REACHED TO END
  ROW AND AFTER THAT ONLY IT WILL EXPLOR COLON NOW MAN THING ABOUT IT IF YOU ARE ON LAST
  ROW THEN DOES COLON HAVE MORE THEN ONE OPTION TO EXPLOR THE PATHS NOT REALLY. AND THATS
  WHY WE NEED TO REMOVE IF AND ELSE AND LET THEN EXPLORE ALL THE PATHS
  UNDER THE HOOD RECURSION CALLL NOT ABLE TO UNDERSTAND
*/
/*
  Another possible question might be just return the count
*/
function getMazePath(path,row,col,arr){
 // THIS WILL WORK WITH ANY TYPE OF MAZE ROW AND COLON DON'T NEED TO BE SAME 
 if(row === arr.length - 1  && col ===  arr[row].length -1){
  console.log(path);
  return;
 };
 // WHY ROW + 1 AND COLON + 1 BECAUSE YOU WANT TO CHECK PATH AHEAD NOT ON THE CURRENT ROW AND COLON
  if(arr[row+1]){
    getMazePath(path+'R',row+1,col,arr);
  } 
  if(arr[row][col+1] === ''){ // weird why only arr[row][col+1] this condition does not work why we need to check '' string its not undefiend
    getMazePath(path+'C',row,col+1,arr)
  }
}

// getMazePath('',0,0,twoDArray);

function getMazePathCount(row,col,arr,count){
  // THIS WILL WORK WITH ANY TYPE OF MAZE ROW AND COLON DON'T NEED TO BE SAME 
  if(row === arr.length - 1  && col ===  arr[row].length -1){
   return ++count;
  };
  // WHY ROW + 1 AND COLON + 1 BECAUSE YOU WANT TO CHECK PATH AHEAD NOT ON THE CURRENT ROW AND COLON
   if(arr[row+1]){
    count = getMazePathCount(row+1,col,arr,count);
   } 
   if(arr[row][col+1] === ''){ // weird why only arr[row][col+1] this condition does not work why we need to check '' string its not undefiend
    count = getMazePathCount(row,col+1,arr,count)
   }
   return count
 }
//  console.log(getMazePathCount(0,0,twoDArray,0));

//A diagonal is made out of a straight line that's set at an angle instead of straight up or across.

 function getMazePathDignol(path,row,col,arr){
  // THIS WILL WORK WITH ANY TYPE OF MAZE ROW AND COLON DON'T NEED TO BE SAME 
  if(row === arr.length - 1  && col ===  arr[row].length -1){
   console.log(path);
   return;
  };
  // THIS IS FOR DIAGONAL SO WHEN YOU HAVE ROW AND COLON BOTH THEN MOVE TO DIAGONAL DIRECTION
   if(arr[row+1] && arr[row][col+1] === ''){
    getMazePathDignol(path+'D',row+1,col+1,arr);
   }
  // WHY ROW + 1 AND COLON + 1 BECAUSE YOU WANT TO CHECK PATH AHEAD NOT ON THE CURRENT ROW AND COLON
   if(arr[row+1]){
    getMazePathDignol(path+'R',row+1,col,arr);
   } 
   if(arr[row][col+1] === ''){
    getMazePathDignol(path+'C',row,col+1,arr)
   }
 }
 
 console.log(getMazePathDignol('',0,0,twoDArray));
