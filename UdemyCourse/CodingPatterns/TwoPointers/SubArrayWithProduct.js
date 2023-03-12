/*
   Subarrays with Product Less than a Target (medium)

   Given an array with positive numbers and a positive target number, find all of its contiguous
   subarrays whose product is less than the target number.

   Input: [2, 5, 3, 10], target=30                                              
   Output: [2], [5], [2, 5], [3], [5, 3], [10]                           
   Explanation: There are six contiguous subarrays whose product is less than the target.

*/

// Good one because worked fine event its brute force
// I DON'T KNOW BUT THIS BRUTE FORCE ALSO GOT SUBMITTED
// IF IN QUESTION COUNT HAS BEEN ASKED THEN THIS APPROACH IF THEY ASK FOR ARRAY USE APPROACH TWO
function subarraysBR(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // NOT ONLY GREATER THEN BUT GREATER THEN OR EQUAL TO BECAUSE WE NEED ONLY LESS THEN VALUE
    if (arr[i] >= target) {
      continue;
    } else {
      count++;
    }
    let currentProduct = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] * currentProduct < target) {
        currentProduct = arr[j] * currentProduct;
        count++;
      } else {
        break; // WHY BREAK BHAI CONTINUES ARRAY CHAIYE GOOD CATCH HERE
      }
    }
  }
  return count;
}

// console.log(
//   subArrayWithProduct([10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], 19)
// );

/*
   This approach has time complexity (N^3) and the solution we have in design guru is also same time complexity so wil sticky with
   this approach
*/
function subArrayWithProduct(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= target) continue;
    res.push([arr[i]]);
    let currentProduct = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (currentProduct * arr[j] < target) {
        currentProduct = currentProduct * arr[j];
        let last = res[res.length - 1];
        let values = [...last];
        values.push(arr[j]);
        res.push(values);
      } else {
        break;
      }
    }
  }
  return res;
}

// LETS LEARN OPTIMAL SOLUTION

function zeroOne(arr) {
  if (!arr || arr.length === 0) return;
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] === 1) {
      i++;
    } else {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j++;
    }
  }
  return arr;
}

console.log(
  "ZERO-ONE",
  zeroOne([
    1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    0,
  ])
);

function zeroOneTwo(arr) {
  if (!arr || arr.length === 0) return;

  let i = 0;
  let j = 0;
  let k = arr.length - 1;

  while (i < k) {
    if (arr[i] === 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      // For value 2
      let temp = arr[i];
      arr[i] = arr[k];
      arr[k] = temp;
      k--; // Means last me to 2 transfer kr diya
    }
  }
  return arr;
}

console.log(
  "ZERO-ONE-TWO",
  zeroOneTwo([
    1, 0, 1, 0, 1, 1, 2, 2, 2, 0, 1, 1, 0, 0, 0, 1, 0, 1, 2, 1, 0, 0, 0, 2, 2,
    2, 2, 1, 1, 0, 0, 2, 2, 2, 0, 1, 0,
  ])
);
