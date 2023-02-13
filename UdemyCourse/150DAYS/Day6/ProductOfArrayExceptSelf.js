/*
   
Product of Array Except Self :

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. 

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

/*
   Now this is first solution comes in mind but its o(n^2) time complexity so not at all good but should be in mind as brute force
*/
function productOfArrayExceptSelfBR(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    if (product === -0) product = 0;
    res.push(product);
  }
  return res;
}

// console.log(productOfArrayExceptSelfBR([1, 2, 3, 4]));

/*
   Here we have to do this without division else this problem will be much easy. (JUST TAKE PRODUCT OF ENTIRE ARRAY AND DIVIDE WITH CURRENT INDEX)
   This is interesting because what about if we have any 0 in entire array that will be 0 value.
*/

// This is getting fail when we have zeros multiple time we can ignore it anyway
function productOfArrayExceptSelfBR2(nums) {
  let hasZero = nums.includes(0);
  let zeroFilteredArray = hasZero ? nums.filter((num) => num !== 0) : [];
  let zeroFilteredArrayProduct = 1;
  let overallProduct = 1;
  let res = [];

  for (let i = 0; i < zeroFilteredArray.length; i++) {
    zeroFilteredArrayProduct *= zeroFilteredArray[i];
  }

  for (let i = 0; i < nums.length; i++) {
    overallProduct *= nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      res.push(zeroFilteredArrayProduct);
    } else {
      let product = Math.floor(overallProduct / nums[i]);
      if (product === -0) product = 0;

      res.push(product);
    }
  }
  return res;
}

/*
   Lets try out one prefix and postfix solution
*/

// function productOfArrayExceptSelf(nums) {
//   let prefixArr = [];
//   prefixArr[0] = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     prefixArr[i] = prefixArr[i - 1] * nums[i];
//   }

//   let postfixArr = [];
//   postfixArr[postfixArr.length - 1] = nums[nums.length - 1];
//   for (let i = nums.length - 2; i >= 0; i--) {
//     prefixArr[i] *= nums[i];
//   }

//   console.log(prefixArr, postfixArr);
// }

// console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
