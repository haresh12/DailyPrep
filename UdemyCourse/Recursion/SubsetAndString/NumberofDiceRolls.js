
/*
   DP PROBLEM WILL DO LATER
*/

function getDiceCount(n,k,target,count){
  if(target === 0){
    count++
    console.log(count)
    return;
  }
  for(let i = 1 ; i <=n ; i++){
    for(let j = 1 ; j <= k && j <= target; j++){
      getDiceCount(n,k,target-j,count)
    }
  }
}

getDiceCount(2,6,7,0)