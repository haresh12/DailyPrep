/*
   How many minimum jumes need to be given to reach to destination.

   Do a thing in this question find the count but take only minimum value
*/


let totalStairs = 10;
let variableArr = [1,1,1,4,9,8,1,1,10,1].reverse();


function minimumCountWithMemo(n,arr,psf,count,memo){
  if(n === 0){
    if(psf.length < count){
      count = psf.length;
    }
    return count;
  }

  if(n < 0){
    return count;
  }

  if(memo[n]){
    return memo[n];
  }
   let howManyJumpsFromThisStair = arr[n-1]; // MUST MUST MUST MUST MUST UNDERSTAND WHY N-1 AND IF YOU FORGET IN FUTURE TRY TO PUT N THEN SEE RESULT BHAI INDEX OF LENGTH 20 SAAL PHELE SIKHA THA

  for(let i = 1 ; i <= howManyJumpsFromThisStair ; i++){
    // UNDERSTAND THIS MISTAKE return minimumCount(n-i,arr,psf+i,count) bhai ye to pure loop ka call be nhi hone dega jese he first return aya done make sure when to return from here and when not to 
    let childCount = minimumCountWithMemo(n-i,arr,psf+i,count,memo)
    count = Math.min(count,childCount)
  }
  memo[n] = count;
  return count;
}


console.log('minimumCount',minimumCountWithMemo(totalStairs,variableArr,'',Number.MAX_SAFE_INTEGER,{}));
