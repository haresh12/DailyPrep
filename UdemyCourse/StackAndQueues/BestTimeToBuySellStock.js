
function bestTimeToBuySellStock(days){
  let bought = days[0];
  let profit = 0;
  let sold = 0;
  for(let i = 1 ; i < days.length ; i++){
     if(days[i] - bought < 0){
      // this means we bought that on high price and current price is less then that so let buy now
      bought = days[i];
      continue;
     }
     
     if(days[i] - bought > profit){
      sold = days[i];
      profit = days[i] - bought;
     }
  }
  return profit > 0 ? profit : 0;
}

console.log(bestTimeToBuySellStock([7,6,5,4,3,2,1]));