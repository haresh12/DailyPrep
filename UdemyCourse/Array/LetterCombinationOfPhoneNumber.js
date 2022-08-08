//Runtime: 63 ms, faster than 91.32% of JavaScript online submissions for Letter Combinations of a Phone Number.
// THIS IS THE BEST SOLUTION I EVER HAD BY MY SELF 
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
function letterCombinationOfANumberBruteForce(string){
  let currentArr = [];
   for(let i = 0 ; i < string.length ; i++){
    let digitValue = digitObj[string[i]];
    currentArr = buildLetterCombination(digitValue,currentArr); // improtent line mad silly mistake here not assigning new value to current array and thats why it was always blank
  } 
  return currentArr
}

function buildLetterCombination(digitValue,currentArr){
  let tempArr = currentArr;
  currentArr = [];
  if(tempArr.length === 0){
    for(let i = 0 ; i < digitValue.length ; i++){
      currentArr.push(`${digitValue[i]}`)
   }
  }else{
    for(let i = 0 ; i < tempArr.length ; i++){
      for(let j = 0 ; j < digitValue.length ; j++){
         currentArr.push(`${tempArr[i]}${digitValue[j]}`)
      }
   }
  }
 return currentArr 
}
console.log(letterCombinationOfANumberBruteForce('234'));