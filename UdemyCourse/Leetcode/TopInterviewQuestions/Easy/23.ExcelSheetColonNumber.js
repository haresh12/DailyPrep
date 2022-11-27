/*
   Leetcode : 171 
   Given a string columnTitle that represents the column title as appears in an Excel sheet, 
   return its corresponding column number.

   Input: columnTitle = "A"
   Output: 1

   Input: columnTitle = "AB"
   Output: 28
*/

// This is more like understanding formula rather then understanding specific condition
// res*26+currentCharAscii thats it means yes this is the formula that needed to be covered

function excelSheetColonNumber(str){
  const charCodeBase = 'A'.charCodeAt(0) - 1; // THIS NEED TO UNDERSTAND
  let res = 0;
  for(let i = 0 ; i < str.length ; i++){
     res = res*26+(str.charCodeAt(i) - charCodeBase)// THIS IS SIMPLE ONE FORMULA RES = RES*26+charCodeOfCurrentChar
  }
  return res;
}

console.log(excelSheetColonNumber('ZY'))