/*
   Leetcode 118 :
   Given an integer numRows, return the first numRows of Pascal's triangle.
   In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

let finalArr = [];
function pascal(num){
  if(num === 1){
    finalArr.push([1])
    return [1,1];
  }
 let arr =  pascal(num-1);
  let newArray = new Array(num);
  for(let i = 0 ; i < newArray.length ; i++){
    if(i === 0  || i === newArray.length -1){
      newArray[i] = 1;
    }else{
      newArray[i] = arr[i-1] + arr[i];  // This line where all the magic happens; UNDERSTAND WELL ITS EASY IF UNDERSTAND IT WELL
    }
  }
  finalArr.push(newArray)
  return newArray;
}

pascal(5)
console.log(finalArr);
