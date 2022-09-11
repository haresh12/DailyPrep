
 let digitObj ={
  '2' : 'abc',
  '3' : 'def',
  '4' : 'ghi',
  '5' : 'jkl',
  '6' : 'mno',
  '7' : 'pqrs',
  '8' : 'tuv',
  '9' : 'wxyz',
}
// GOOD JOB TOOK LOT OF TIME WAS ABLE TO SOLVE THE RECURIVE SOLUTION ALSO NOT OPTIMIZED
function getLetterCombination(digits,arr){
 if(digits.length === 0){
  return arr;
 }
 let currentStr = digitObj[digits[0]]
 let hasItems = arr.length > 0;
 let newArr = [];
 for(let i = 0 ; i < currentStr.length ;i++){
   if(hasItems){
    for(let j = 0 ; j < arr.length ;j++){
      newArr.push(`${arr[j]}${currentStr[i]}`)
    }
   }else{
    newArr.push(currentStr[i])
   }
 }
 return getLetterCombination(digits.substring(1),newArr)
}
console.log(getLetterCombination('234',[]))