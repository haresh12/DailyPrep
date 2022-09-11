/*
  In this question you will be given array and you need to check if that array is sorted or not
*/

/*
 IN CASE OF ARRAY WE NEED TO UNDERSTAND ONE THING THAT IF YOU MODIFY ARRAY AT ANY LEVEL IN 
 RECURSION THAN THAT CHANGE WILL BE AFFECTED IN ALL THE LEVELS IN RECURSION BECAUSE WE NEED
 TO UNDERSTAND THAT WE ARE PASSING THE SAME ARR IN ALL THE CALLS NOT THE DIFFERNCE ONE,
 THIS ONE THING WILL BE USEFUL WHEN YOU ARE MAKING ANY MODIFICATION IN ARRAY.
*/

/*
   There will be the situation where you have to collect answer from every recursion call
   and build the answer and those are the real recursion question because in that your
   understanding of stack should be good.
*/
// GOOD THAT SOLUTION COMING IN MIDE WITHIN 5 OR 10 MIN
function checkIsSorted(arr,index){
if(index === arr.length){
  return true;
}
if(arr[index - 1] <= arr[index]){
  return checkIsSorted(arr,index+1);
}
return false;
}

let arr = [1,1,2,2,3,3,4,4,5,5,6];
let startingIndex = 1;
// console.log(checkIsSorted(arr,startingIndex));

function findItem(arr,item,index){
 if(index === arr.length){
  return -1;
 }
 if(arr[index] === item){
  return index
 }
 return findItem(arr,item,index+1);
}
let arr2 = [1,2,3,4,5,6,7,4,6,7,8,9];
let find = 1;
// console.log(findItem(arr2,find,0))


function findAllIndex(arr,index,output,target){
if(index ===  arr.length){
 return output;
}
if(arr[index] === target){
  output.push(index);
}
return findAllIndex(arr,index+1,output,target);
}

let arr3 = [1,2,3,4,4,5,6,7,8,4,3,1,2,4,5,6];
// console.log(findAllIndex(arr3,0,[],8));


// Try findAllIndex with arraylist inside each function rather then passing as parameter.
function findAllIndex(arr,index,target){
  if(index === arr.length){
    return []; // this is incredible thought came in mind
  }
  let list = [];
  if(arr[index] === target){
      list.push(index);
  }
  let output = findAllIndex(arr,index+1,target); // Here we know after base case we will get blank arr list from answer
  // NOW THIS IS MOST IMPORTENT PAST AT LINE 72 YOU  NEED TO CHECK WHAT YOU GOT OUTPUT FROM YOUR PREV CALL AND WHAT AND IN CURRENT CALL DO YOU HAVE ANY OUTPUT THEN ADD IT
  if(list.length > 0){
    output.push(list[0])
    return output;
  }
  return output; // this means current call does not have any output to return what you got from previous calles
}

let arr4 = [1,2,3,4,4,5,6,7,8,4,3,1,2,4,5,6];
console.log(findAllIndex(arr4,0,3));

/*
EVERY THING I DONE RIGHT IN ABOVE PROGRAM BUT MADE ONE WEIRD MISTAKE AT LINE NUMBER 74 
I WAS DIRECTLY RETURNING output.push(list[0]) like below
return output.pust(list[0]) BUT MAN WE NEED TO UNDERSTAND THAT ARRAY.PUSH WILL RETURN THE
PUSHED VALUE SO IN THAT CASE MY ARRAY WAS CONVERTED TO INT AND MISTAKLY I RETURED INT
SO IN NEXT CALL INT.PUSH() HERE WE GOT ERROR PUSH IS NOT AS FUNCTION.

LEARNING : AT THE TIME OF RETURNING DOUBLE CHECK WHAT YOU ARE RETURNING AND IF YOU ARE USING
ANY METHODS OF ARRAY THEN UNDERSTAND WHAT THOSE METHOD ARE GOING TO RETURN
*/
