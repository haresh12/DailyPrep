/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/

/*
   no rocket science here its just most of people will go through 
   entire loop from 1 to n/2
   jUST REMEMBER THIS OR UNDERSTAND THIS i*i    
*/
function sqrt(number) {
  if (number < 2) return number; // return x if it is 0 or 1
  let ans = 1;
  for (let i = 1; i * i <= number; i++) {
    ans = i;
  }
  return ans;
}

console.log(sqrt(16));

/*
   In case above formula is not something you can remember then we can you binary search with to pointers
   to solve this problem and still time complexity will be o(logN)
*/

function sqrtWithBS(num) {
  if (x < 2) return x; // return x if it is 0 or 1

  let left = 2;
  let right = Math.floor(x / 2); // initialize left and right pointers
  let pivot;
  let num;
  while (left <= right) {
    // binary search for the square root
    pivot = Math.floor(left + (right - left) / 2); // find the middle element
    num = pivot * pivot;
    if (num > x) right = pivot - 1;
    // if pivot * pivot is greater than x, set right to pivot - 1
    else if (num < x) left = pivot + 1;
    // if pivot * pivot is less than x, set left to pivot + 1
    else return pivot; // if pivot * pivot is equal to x, return pivot
  }

  return right; // return right after the loop
}

console.log(sqrtWithBS(8));
