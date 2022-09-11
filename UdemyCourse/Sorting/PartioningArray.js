// so this will be useful when you have given some pivot or target and you want to divide
// arr based on that. example you have given pivot point 5 and you want to move all the
// value <= to left side of pivot and all the value > then pivot should be on right side
// some other example like move 0's at one side and all other elements of array at another
// side.
// Also make sure in first example even it moves all smaller value to left and or larger value
// to right still it does not gurrented that array will be sorted because of this algo.

// Algo itself is easy but most importent is where we need to use what are the different application
// we can have 

/*
Steps for algo :
three region : unknown , > and <=
now we will use two pointer approch here and will take i and j and move accoring to some condition
at last whatever value we will have from 0 to j-1 will be <= and j to i-1 will be >.

NOW TAKE I AND J TWO POINTER AT INDEX 0.
IF CURRENT VALUE AT I IS GREATER THEN PIVOT THEN DO NOTHING JUST INCRESE I.(I++) THATS IT
IF CURRENT VALUE OF I IS LESS THE OR EQUAL THEN PIVOT THEN SWAP VALUE OF I AND J AND THEN
INCREASE I AND J BOTH THAT'S IT.

>> Again algo it self is simple but we need to understand where we will use and what are the
   different application for this
*/

// AGAIN MAKE SURE THIS DOES NOT GIVE GUREENTE OF SORTED ARRAY
function partioningArray(arr,pivot){
 let i = 0;
 let j = 0;

 while(i < arr.length){
  if(arr[i] > pivot){
    i++;
  }else{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j++; 
  }
 }
 return arr;
}
// console.log(partioningArray([8,5,2,1,6,4,21,11,9,19],11))


// lets do one more example of that where you will have to shift all 0s to left;
// whatever you need to left side always do swap for that and for right side i++ bas.
function shiftZeros(arr,pivot){
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] > pivot)
    {
      i++;
    }
    else
    {
      swap(arr, i, j);
      i++;
      j++;
    }
  }
  return arr
}
function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(shiftZeros([7,9,4,8,5,3,6,2,1],5))