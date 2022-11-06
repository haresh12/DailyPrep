
/*

  This one is intersting because in this question we will be given one more array which
  will tell us how many max jumps we can give from that specific stair and each one will
  have different steps some might me have 0
*/



// incredible job try with smaller output like 3 you will understand how its working even
let totalStairs = 10;
let variableArr = [
  1, 5, 2, 2, 4,
  3, 3, 0, 2, 5,
  1
];

 function stairPathVariableJumps(n,arr,psf){
 if(n === 0){
    console.log(psf);
    return;
 }

 if(n < 0){
  return; // galat rasta or insan ki value hamesha 0 rakho
 }
  // Now see in this question you don't have option like 1 2 or 3 jumps but its about what we have given in that array for that specific stair

  let howManyJumpsFromThisStair = arr[n];
  for(let i = 1  ; i <= howManyJumpsFromThisStair ; i++){ // bul se bi 0 se mat start krna loop socho jara socha
    stairPathVariableJumps(n- i,arr,psf+i);
  }
}

console.log('stairPathVariableJumps',stairPathVariableJumps(totalStairs,variableArr,''))


// But we really don't need paths we need count
function stairPathWithVariablesJumpsCount(n,arr){
  let count = 0;
  if(n === 0){
    return 1; // manjil mil gyi
  }
  if(n < 0){
    return 0; // wrong path
  } 
  console.log('Hello not optizimed n ',n); // see how many times we have repeated calls
  // dekh lo ye n pe kitne jumps allowed he
  let howManyJumpsFromThisStair = arr[n];
  // try to jump on all possible stairs 
  for(let i  = 1 ; i <=howManyJumpsFromThisStair ;i++){
      let childCount =  stairPathWithVariablesJumpsCount(n-i,arr); 
      count+=childCount;  
  }

  return count;
}

console.log('stairPathWithVariablesJumpsCount',stairPathWithVariablesJumpsCount(totalStairs,variableArr))


function stairPathWithMemo(n,arr,memo){
  let count = 0;
  if(n === 0){
    return 1; // manjil mil gyi
  }
  if(n < 0){
    return 0; // wrong path
  } 
  if(memo[n]){
    return memo[n];
  }
  console.log('Hello optizimed n ',n); // see how many times we have repeated calls
  // dekh lo ye n pe kitne jumps allowed he
  let howManyJumpsFromThisStair = arr[n];
  // try to jump on all possible stairs 
  for(let i  = 1 ; i <=howManyJumpsFromThisStair ;i++){
      let childCount =  stairPathWithMemo(n-i,arr,memo); 
      count+=childCount;  
  }
   memo[n] = count;
  return count;
}

console.log('stairPathWithMemo',stairPathWithMemo(totalStairs,variableArr,{}))
