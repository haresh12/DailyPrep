/*
  This one is intersting problem till now we learned that how we can get the path from one
  point to another in maze but in that we were moving only right and down like row + 1 or
  col + 1 but now what if we need to find all possible path and we can go to all the direction
  like up down left right all four direction.

  >> NOW SEE HERE FOR DOWN YOU WILL DO ROW + 1
  >> FOR UP YOU WILL DO ROW - 1

  >> FOR RIGHT YOU WILL DO ROW + 1
  >> FOR LEFT YOU WILL DO ROW - 1

 SO THING ABOUT IT FOR EACH FUNCTION CALL YOU HAVE 4 OPTION NOW THERE WILL BE AT CERTIAN POINT
 YOU WILL BE END UP AT SAME PLACE FROM WHERE YOU STARTED AND THIS WILL LEAD TO STACK OVERFLOW
 ERROR BECAUSE WE END UP IN ENDLESS RECURSIVE CALL.
 
 AND SOLUTION FOR THIS IS TO DON'T ALLOW FUNCTION TO GO BACK TO SAME PLACE IF THE ALREADY VISITED
 SO WE CAN EASILY MARK THEM LIKE isVisited = true AND FOR SURE THIS WILL WORK SO NOW YOU WON'T 
 HAVE PROBLEM OF ENDLESS RECURSIVE CALL BUT NOW YOU WILL FACE ANOTHER PROBLEM SEE MAN RIGHT 
 NOW YOU ARE MARKING isVisited = true FOR ALREADY VISITED CELLS AND THIS WILL CREATE PROBLEM
 FOR OTHER RECURSION CALLS WHO ARE TRYING TO CREAT DIFFERENT PATHS. 

 IN VERY VERY SIMPLE WORD WHEN YOU ARE CREATING PATH AND VISITING CELLS YOU DO ISVISTITED TRUE
 GOOD BUT MAKE SURE WHEN YOU ARE DONE WITH THAT FUNCTION CALL THEN TRY TO CHANGE ISVISITED TO FALSE
 SO IT DOES NOT CREATE PROBLEM FOR OTHER PATH. THIS IS WHAT IS KNOWN AS BACKTRACKING.

 >> AT THIS MOMENT UNDERSTANDING OF BACKTRACKING IS FAIR BUT DRAWING RECURSION TREE IS HARD
*/

/*
  This should be done well  
*/

let tdArray = [[false,false,false],[false,false,false],[false,false,false]];


function getAllPath(path,row,col,arr){
if(row === arr.length - 1 && col === arr[0].length - 1){
  console.log(path);
  return
}
if(arr[row][col]){ // If already visited then return
  return
}
 arr[row][col] = true; // Make your self visited true

 if(row < arr.length -1){
  getAllPath(path+'R',row+1,col,arr)
 }
 if(col < arr[0].length -1){
  getAllPath(path+'D',row,col+1,arr)
 }
 if(row > 0 ){
  getAllPath(path+'U',row-1,col,arr)
 }
 if(col > 0){ // MADE MISTAKE HERE OF WRONG CONDTION COPY PASTE KRO OR
  getAllPath(path+'L',row,col-1,arr)
 }
 // NOW ONCE FUNCTION DONE WILL ALL ITS 4 CALLS AND TRY TO RETURN FROM HERE THEN AT LAST
 // MAKE ISVISITED TO FALSE AGAIN SO OTHER FUNCTION CAN CREATE THERE OWN PATH

 arr[row][col] = false;
}

getAllPath('',0,0,tdArray);






