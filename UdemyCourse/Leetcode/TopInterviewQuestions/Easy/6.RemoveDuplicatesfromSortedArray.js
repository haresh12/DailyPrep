/*
  Leetcode : 26. Remove Duplicates from Sorted Array

  NON DECREASING ORDER
  Non decreasing order is when the numbers may or may not increase but they never deccrease for eg 1 2 2 3 3 4 5 6 6.
  
  IN PLACE MEANS NOT TO TAKE ANY EXTRA SPACE AND MAKE CHANGES IN ARRAY IT SELF.

  Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
  The relative order of the elements should be kept the same.

*/

function removeDuplicateFromArray(arr){
  if(arr.length === 0) return [];
  let dup = arr[arr.length-1];
  for(let i = arr.length - 2 ; i >= 0 ; i--){
    if(arr[i] === dup){
      arr.splice(i, 1); // THIS ONE IS ONLY IMPORTENT THING HERE THIS IS HOW YOU CAN REMOVE FROM SPECIFIC INDEX
    }else{
      dup = arr[i];
    }
  }
  return arr.length;
}

console.log(removeDuplicateFromArray([0,0,1,1,1,2,2,3,3,4]))