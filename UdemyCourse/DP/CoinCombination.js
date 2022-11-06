/*
   You have infinity number of coins of [2,3,5] and you have to pay x amount then we
   need to find and return number of count we can pay this x amout
*/


let arr = [2,3,5,6];
let pay = 10;
let calls = 0
// https://www.youtube.com/watch?v=hQIGPCoVtH0 recursive way to do
// Some how we found all the permutation not combination
function findPaymentWaysPermutation(paid,coin,pay){
// console.log("coins",coin); // To understand ucler or recurstion print this
if(paid > pay){
  return;
}
if(paid == pay){
  console.log(coin)
  return
}
findPaymentWaysPermutation(paid+2,coin+2,pay);
findPaymentWaysPermutation(paid+3,coin+3,pay);
findPaymentWaysPermutation(paid+5,coin+5,pay);
}

findPaymentWaysPermutation(0,'',pay)
// 10% UNDERSTANDING ONLY
function findPaymentWaysCombination(arr,idx,coin,pay,count){
  if(pay === 0){
   return 1;
 }
 if(pay < 0){
  return 0;
 }
 if(idx === arr.length){
  return 0;
 }

  let total =  findPaymentWaysCombination(arr,idx,coin+arr[idx],pay-arr[idx],count) +   findPaymentWaysCombination(arr,idx+1,coin,pay,count);
  return total;
}
// console.log(findPaymentWaysCombination(arr,0,'',pay,0))


// https://www.youtube.com/watch?v=onUoUZDtak8 INCREDIBLE


function coinChange(idx,coins,amtsf,tamt,amsf){
  console.log(++calls)
  if(idx === coins.length)return
  if(amtsf === tamt){
    console.log(amsf)
    return;
  }
   for(let j = Math.floor(tamt/coins[idx]); j >= 1 ; j--){
   let path = "";
   for(let k = 0 ; k < j ; k++){
    path+=coins[idx]+'-';
   }
    coinChange(idx+1,coins,amtsf + coins[idx] * j , tamt, amsf+path)
  }
  coinChange(idx+1,coins,amtsf,tamt,amsf)

}

// coinChange(0,arr,0,pay,'');