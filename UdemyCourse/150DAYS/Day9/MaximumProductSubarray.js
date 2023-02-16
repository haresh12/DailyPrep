/*
   Maximum Product Subarray : 
   Given an integer array nums, find a subarray that has the largest product, and return the product.
   The test cases are generated so that the answer will fit in a 32-bit integer.

   Input: nums = [2,3,-2,4]
   Output: 6
   Explanation: [2,3] has the largest product 6.

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

//https://www.youtube.com/watch?v=lXVy6YWFcRM
// Dynamic Programing
function maximumProductArray(arr) {
  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    res = Math.max(res, arr[i]);
  }
  let curMin = 1;
  let curMax = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && curMax > 1 && curMin > 1) {
      // [3,2,6,0,8,8]
      curMax = 1;
      curMin = 1;
      continue;
    }
    let temp = arr[i] * curMax; // because we are modifying current max value at line 32
    // Example where n*curMax will win n = 5 curMax = 8 curMin = -8 and n = 10 (Winner 5*8 = 40 )
    // Example where n*curMin will win n = -5 curMax = 8 curMin = -8 and n = 10 (Winner -5*-8 = 40 )
    // Example where n will win n = -1 curMax = 8 curMin = -8 and n = 10 (Winner  10 alone because -1*8 = -8 , -1*-8 = 8 )
    curMax = Math.max(arr[i] * curMax, Math.max(arr[i] * curMin, arr[i]));

    // Same above logic as current max only different is we will find min here because if we get negative value in
    // min and next number in array is also negative then product of both this negative will be positive

    curMin = Math.min(temp, Math.min(arr[i] * curMin, arr[i]));
    res = Math.max(res, Math.max(curMax, curMin)); // curMin -2 curMax 6 and res is already 8 thats why we have to compare
    //with res also
  }

  // now when you come out of loop at that time you will have current max
  res = Math.max(curMax, res);

  return res;
}

console.log(maximumProductArray([2, 3, -2, 4]));
