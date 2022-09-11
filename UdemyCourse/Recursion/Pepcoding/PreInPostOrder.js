//https://leetcode.com/tag/recursion/discuss/1733447/Become-Master-In-Recursion 
// BEST LINK FOR RECURSION IN LEETCODE 
/*
  This is one of the most means most importent video or topic we have in recursion 
   which is flow of the recursion with multiple recursion call and understand here
   PRE ORDER
   IN ORDER 
   POST ORDER

 THESE ABOVE THREE THINGS YOU WILL BE USING IN TREE ALMOST IN EVERY SINGLE QUESTION MAINLY
 FOR TRAVERSAL
 
 INCREDIBLE JOB DRAWN THE RECURSION TREE BY MY SELF AND OUT WAS RIGHT IN TREE IT SELF
 https://www.youtube.com/watch?v=R7qja_gZrvI&list=PL-Jc9J83PIiFxaBahjslhBD1LiJAV7nKs&index=10

 AS SOON AS YOU UNDERSTAND THE FLOW  OF CALLS IN RECURSION YOUR RECURSION IS DONE
*/

/*
 THERE IS ONE THING THAT WE HELP YOU FOR SURE IN LONGER RUN THAT YOU NEED TO UNDERSTAND
 ALL MEANS ALL THEN FUNCTION THAT ARE NOT HITTING TO THE BASE CONDITION WILL EXECUTE ALL
 THE LINES OF CODE IN THAT FUNCTION. THINK ABOUT PASSING 10 AS N HOW BIG TREE WILL BE FOR
 BELOW CODE.
*/
/*
  See when we have single recursion call then its easy to understand like all the things
  will be happen either when you are going on up in recursion or when you are coming down
  and here down means when function is getting removed from stack.

  But when we have multiple calls then just for understanding we need to devide into to
  part left and right and whatever code we have above first method is called Pre whaterver
  call we have in between of both mehtod it called in order and whatever code we have after 
  right method is called Post order

  DRAW THIS RECURSION TREE ATLEAST FOR 20 TO 30 QUESION (ULEAR TREE)
*/
function PreInPost(n){
  if(n === 0){
    return ;
  }
  console.log(`PRE${n}`)
  PreInPost(n-1);
  console.log(`IN${n}`)
  PreInPost(n-1);
  console.log(`POST${n}`)
}