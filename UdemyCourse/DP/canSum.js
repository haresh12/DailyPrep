
let numbers = [134,141];
let target =3000

// SEE THIS SUBSET TECHNIQUE IS GOING TO TAKE EACH ITEM MAX ONLY ONE UNDERSTAND THIS PART
function canSum(numbers,target,idx){
  console.log(target)
  if(target === 0) return true;
  if(target < 0 || idx ===  numbers.length ) return false;

  // Two choices
  let canSumFromYesCall = canSum(numbers,target-numbers[idx],idx+1);
  if(canSumFromYesCall) return true;
  let canSumFromNoCall = canSum(numbers,target,idx+1);
  if(canSumFromNoCall) return true;

  return false;
}
// console.log('Ans',canSum(numbers,target,0));
// THIS IS ALSO INTERSTING QUESION REGARDING  INFINITY OPTIONS
// BUT WHAT IF I CAN TAKE 7 AND 14 N NUMBER OF TIMES AND THEN SEE IF ANSWER IS POSSIBLE
// SPEAK TO YOUR SELF ABOUT SOLUTION THINGS WILL MAKE MORE SENSE 
// HERE SIMPLY I AM SAYING TO MY SELF THAT BHAI KITNI BI BAAR KOI NUMBER KO USE KR I DON'T CARE BUT CAN WE MAKE TARGET SUM 0
function canSumInfinity(target,numbers,memo={}){
  if(memo[target] === true) return true;
  if(target === 0) return true;
  if(target < 0) return false;


  for(let num of numbers){
    let reminder = target - num; 
    if(canSumInfinity(reminder,numbers)){
      memo[target] = true;
      return true; // koi ek bar bi true aa gya na no more work needs to be done
    }
  }
  // after trying all the possiblities agar khi se true na aaye to false
  memo[target] = false;
  return false
}
console.log('Ans',canSumInfinity(target,numbers));
