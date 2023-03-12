/*
   Problem Challenge 1: Quadruple Sum to Target (medium) 
   
   Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

   Input: [4, 1, 2, -1, 1, -3], target=1
   Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
   Explanation: Both the quadruplets add up to the target.

   Input: [2, 0, -1, 1, -2, 2], target=2
   Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
   Explanation: Both the quadruplets add up to the target.
*/

/*
  First approach that comes into mind is use same logic of triplet just change target every time;
*/
/*
   FINALLY GOT SUBMITTED ON LEETCODE
*/

/* 
   Time Complexity
   Sorting the array will take o(nlogn). Overall function will take O(nlogn + n^3) which is asymptotically equivalent to o(N^3)

   Space Complexity
   The space complexity of above problem will be O(N) which is required for sorting
*/
function quadruple(arr, target) {
  if (arr.length < 4) return []; // Return blank rather then arr it self it make more sense
  let quadrupleArr = [];
  arr = arr.sort((a, b) => a - b); // MAKE SURE YOU DON'T FORGET TO SORT THE ARRAY FIRST IN ANY TRIPLET OR QUADRUPLE QUESTIONS
  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i - 1] === arr[i]) continue;
    let current = arr[i];
    let leftTarget = target - current;
    let triplet = triplets(arr, leftTarget, i + 1);
    if (triplet && triplet.length > 0) {
      for (let i = 0; i < triplet.length; i++) {
        let sum = triplet[i][0] + triplet[i][1] + triplet[i][2] + current;
        if (sum === target) {
          quadrupleArr.push([
            current,
            triplet[i][0],
            triplet[i][1],
            triplet[i][2],
          ]);
        }
      }
    }
  }
  return quadrupleArr;
}

// ONLY MISTAKE I MADE HERE IS I WAS STARTING INDEX EVERY TIME FROM 0 HERE AND THAT WAS CREATING DUPLICATE
// AND SECOND MISTAKE IS CHECKING CONDITION LIKE I > 0  NHI BHAI I > INDEX HOGA
function triplets(arr, target, index) {
  let tripletArr = [];
  for (let i = index; i < arr.length - 2; i++) {
    if (i > index && arr[i] === arr[i - 1]) {
      // we don't need repetive things
      continue;
    }
    let yetNeeded = target - arr[i];
    targetPair(arr, yetNeeded, i + 1, tripletArr, arr[i]);
  }
  return tripletArr;
}

function targetPair(arr, target, index, tripletArr, curr) {
  let left = index;
  let right = arr.length - 1;

  while (left < right) {
    let currentTargetSum = arr[left] + arr[right];
    if (currentTargetSum === target) {
      tripletArr.push([curr, arr[left], arr[right]]);
      left++;
      right--;

      // what about duplicate
      while (left < right && arr[left] === arr[left - 1]) left++;
      while (left < right && arr[right] === arr[right + 1]) right--;
    } else if (currentTargetSum > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(quadruple([2, 2, 2, 2, 2], 8));
