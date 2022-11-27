// LEETCODE 142 : in question 20 all the explaination given
function startingPoint(node){
  let temp = node;
  let end = detectCycleTwo(node); // See in question 20 in this folder
  if(end === null){
    return null;
  }
  // YOU REACH HERE MEANS THERE IS 100% CYCLE
  while(true){
    if(temp === end){
        return temp;
       }
   temp = temp.next;
   end = end.next;
   // THIS CHANGES EVERYTHING THING WHY IT SHOULD BE ABOVE TWO LINE [1,2] TRY WITH THIS INPUT
  //  if(temp === end){
  //   return temp;
  //  }
  }
}