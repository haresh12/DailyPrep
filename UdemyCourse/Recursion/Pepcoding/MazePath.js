/*
   Regarding maze path problem no tree === no understanding until and unless you won't draw tree
   for atleast 3 * 3 which will give you six path in tree until that you won't understand that
*/
// WIERD THIS IS SAME LIKE WORKING FOR SMALL INPUT BUT NOT FOR BIG ONE LIKE 13*18
// d for down r for right
function getMazePath(dr,dc,path){
  if(dr === 0  && dc === 0){
    console.log(path);
    return;
  }

  if(dr - 1 >= 0){
    getMazePath(dr-1,dc,path+'d');
  }
  if(dc -1 >=0){
    getMazePath(dr,dc-1,path+'r');
  }
}

getMazePath(13,19,''); // MADE MISTAKE HER PASSING 3 3 WILL RETURN YOU PATH OF 4*4 MAZE NOT 3*3 BECAUSE YOU ARE ENDING AT 0 NOT 1 