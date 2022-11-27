/*
   Leetcode : 121

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.  

Simple stack problem also very famous 

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

/*
   ONE BIG MISTAKE THAT I HAVE DONE IN THIS QUESTION IS CHECKING CONDITION LIKE
   bought - arr[i] => BHAI PROFIT KA MEANING buy - sell nehi sell - buy hota hai
   [7,1]
   Ex : bought at 7 sold at 1  now if you check bought - arr[i] = => 7 - 1 = 6
   but this should be -6 because you bought at 7 and sold at 1.
*/
function maxProfit(arr){
if(arr.length === 0) return 0;
let bought = arr[0];
let maxProfit = 0
for(let i = 1 ; i < arr.length ; i++){
  if(arr[i] - bought <  0){
     bought = arr[i];
  }else if(arr[i] - bought > maxProfit){
    maxProfit = arr[i] - bought
  }
}
return maxProfit;
}
let arr = [7,6,4,3,1];
console.log(maxProfit(arr));
