/*
   So in previous problem of maze we were allowed to move only one step at a time but in this problem
   you are allowed to jump of any number as long as its valid jump.

   UNDERSTAND IN THIS QUESTION ITS IMPORTENT TO UNDERSTAND THAT WHAT IS VALID JUMP WHY DO WE NEED THAT
   WHATS THE IMPORTANT OF THAT.

   ALSO IN THIS QUESTION YOU CAN MOVE HORIZONTAL VARTICAL AND ALSO DIAGONAL
*/

// SOMEHOW IT GOT RIGHT IN FIRST TRY GREAT JOB
// FOR SURE THIS WILL FAIL IN LARGE OUTPUT BUT NO ISSUE WILL CONVER THAT IN DP
function getStairsPathWithJump(dr,dc,path){
if(dr === 1 && dc === 1){ // here making mistake in base condition like when to stop like at 0 or 1 please thing twice because you put
                          // condition else for 3*3 it will give answer of 4*4
  console.log(path)
  return;
}
for(let i = dr ; i >= 1 && dr - i >= 0; i--){
  getStairsPathWithJump(dr-i,dc,path+i+'H');
}
  for(let i = dc ; i >= 1 && dc - i >= 0; i--){
      getStairsPathWithJump(dr,dc-i,path+i+'V');
  }
  for(let i = dc ; i >= 1 && dr - i >= 0  && dc - i >= 0; i--){
    getStairsPathWithJump(dr-i,dc-i,path+i+'D');
  }
}

console.log(getStairsPathWithJump(4,4,''))