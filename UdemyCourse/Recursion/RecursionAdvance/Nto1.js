
// There is one thing to learn look at line number 7 we are printing value
// and then doing recursive call and thats why we are building our output with
// each function call but try to do one thing put this line 7 after our recursive call
function Nto1(n){
  if(n === 0){
    return
  }
  console.log(n);
  Nto1(n-1);
}

function oneToN(n){
  if(n === 0){
    return
  }
  oneToN(n-1);
  console.log(n);
}
oneToN(50) // this will print 1 to 50
Nto1(50); // this will pring 50 to 1

// WE MADE JUST ONE LINE OF CHANGE LIKE IN ONE FUNCTION WORK WAS GETTING DONE FIRST AND THEN
// RECURSIVE CALL AND IN NEXT FUNCTION WORK IS GETTING AFTER RECURSION CALL.

/*
  The point we need to understand is that if you do recursive call first and then actual
  work then in that can all the work will be done after function reach to base case were
  in other case all the work is completed when you reach at base case.

  THERE IS SOMETHING CALL PREORDER INORDER AND POST ORDER THAT WE WILL LEARN SOON
  MAINLY USEED IN TREE TRAVERSAL
*/