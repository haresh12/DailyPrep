/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

// DONE IN 6 MIN THIS QUESTION IS ALL ABOUT TAKING WITH YOUR SELF

/*
    Time And Space : 
    The time complexity of the bestTimeToBuyStock function is O(n), where n is the length of the input array arr. 
    This is because the function is using a single for loop to iterate through the array, which takes O(n) time.

    The space complexity of the function is O(1), because the function is only using a few variables that do not grow with the size of the input array. 
   The function is not using any data structures that grow in size with the input, so the space complexity remains constant and is equal to O(1).
*/
function bestTimeToBuyStock(arr) {
  if (arr.length <= 1) return 0;
  let bought = arr[0];
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > bought && arr[i] - bought > maxProfit) {
      maxProfit = arr[i] - bought;
    } else if (arr[i] - bought < 0) {
      bought = arr[i];
    }
  }
  return maxProfit;
}

console.log(bestTimeToBuyStock([7, 6, 4, 3, 1]));
