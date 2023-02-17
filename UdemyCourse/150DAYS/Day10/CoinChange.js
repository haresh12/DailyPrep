/*
 Coin Change

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/

/*
   Brute force but best explanation :

First, we check the base case of the function. If the target amount is 0, then we don't need any coins to 
make up the amount, so we simply return 0.

Next, we initialize the minimum number of coins to Infinity. We will update this value as we try different 
combinations of coins.

We loop through the array of coin denominations. For each coin, we check if its value is less than or 
equal to the target amount. If it is, we recursively call the function with the remaining amount 
(i.e., the target amount minus the coin value). This gives us the minimum number of coins needed to 
make up the remaining amount.

If the number of coins returned from the recursive call is less than the current minimum number of coins, 
we update the minimum to the new value.

Once we've tried all possible combinations of coins, we add 1 to the minimum number of coins 
(since we used one coin to make up the current amount) and return the result.

If we were not able to make up the target amount using the given coins, then the minimum number 
of coins will still be Infinity. In this case, we return -1 to indicate that it's not possible to 
make up the target amount.


*/
function coinChange(coins, amount) {
  // Base case
  if (amount === 0) {
    return 0;
  }

  // Initialize minimum number of coins to Infinity
  let minCoins = Infinity;

  // Loop through coins
  for (let coin of coins) {
    // If coin value is less than or equal to amount, recursively call function
    if (coin <= amount) {
      let numCoins = coinChange(coins, amount - coin);

      // If number of coins returned from recursive call is less than current minimum, update minimum
      if (numCoins < minCoins) {
        minCoins = numCoins;
      }
    }
  }

  // Add 1 to minimum number of coins and return
  return minCoins === Infinity ? -1 : minCoins + 1;
}

console.log(coinChange([1, 2, 5], 11));

// DP SOLUTION NO ROCKET SCIENCE JUST ADD ONE OBJECT AND STORE ANS AT EACH STEP
// LIKE WHEN AMOUNT IS 5 I NEED TO USE 1 MINIMUM COIN SO STORE LIKE {5 : 1}
// THIS WAY WHEN NEXT TIME 5 COMES  WE DON'T CALCULATE AGAIN WE JUST USE STORED VALUE

/*
   TIME AND SPACE :

The time and space complexity of the recursive dynamic programming solution to the coin change problem with 
memoization is O(amount * n), where n is the number of coins.

The time complexity of this solution comes from the fact that we are making a recursive call for each coin,
and we are also memoizing the results of each call. In the worst case, we may need to make a recursive call 
for each possible amount up to the target amount, so the time complexity is O(amount * n).

The space complexity of this solution also comes from the memoization. We are storing the minimum
number of coins for each possible amount up to the target amount, so the space complexity is O(amount).
*/
function coinChangeOp(coins, amount, memo = {}) {
  if (amount === 0) {
    return 0;
  }

  if (amount in memo) {
    return memo[amount];
  }

  let minCoins = Number.MAX_SAFE_INTEGER;

  for (let coin of coins) {
    if (amount - coin >= 0) {
      let numCoins = 1 + coinChangeOp(coins, amount - coin, memo);
      if (numCoins < minCoins) {
        minCoins = numCoins;
      }
    }
  }

  memo[amount] = minCoins === Number.MAX_SAFE_INTEGER ? -1 : minCoins;
  return memo[amount];
}

console.log(coinChangeOp([2], 3));
