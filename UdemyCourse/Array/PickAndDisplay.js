/*
Create a program for series of integers, pick and display random integer and make sure 
next random is not already displayed - input = [1, 22, 4, 2, 1, 66, 22, 4, 6 ]
*/

// Simple version of it list you already now that you need to play from 1 to n 
// but make sure that you don't play same song again
function pickAndDisplay(arr){
  let obj = {}
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] in obj){ // this checks key not value like is arr[i] key is in object
      continue;
    }else{
      obj[arr[i]] = i;
    }
  }
}

console.log(pickAndDisplay([1, 22, 4, 2, 1, 66, 22, 4, 6 ]))