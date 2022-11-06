/*
   You will have one bag and will have few items and price tag with those items
   now bag has some capacity and we need to make sure we put item such way with
   we can have maximum price items in bag

   TO BE REAL THIS IS SIMPLE SUBSET PROBLEM
*/

let itemsWeight = [2,5,1,3,4,7,6,5,3,7,3,7,3,1,9,11,19,16,12,14,22,16,20,1,3,24,16,11,15,7,6,11,12,8];
let itemsPrice = [15,14,10,5,30,115,1,10,5,130,115,140,10,15,130,115,114,120,102,301,115,114,101,5,30,15,14,100,5,30,15,14,100,5,30,15,14,100,5,30,15,14,100,5,30,15,14,100,5,30];
let maxBagWeight = 70;
let price = Number.MIN_SAFE_INTEGER;

function maxItemsWithBestPrice(weightArr,priceArr,idx,wsf,psf,max){
  console.log('price',wsf)
  if(idx === weightArr.length){ // UNDERSTAND THIS 600000000 TIMES
    if(wsf === max && psf > price ){
      price = psf
    }
    return
  }
  maxItemsWithBestPrice(weightArr,priceArr,idx+1,wsf+weightArr[idx],psf+priceArr[idx],max)
  maxItemsWithBestPrice(weightArr,priceArr,idx+1,wsf,psf,max)
 }

maxItemsWithBestPrice(itemsWeight,itemsPrice,0,0,0,maxBagWeight)
console.log(price)