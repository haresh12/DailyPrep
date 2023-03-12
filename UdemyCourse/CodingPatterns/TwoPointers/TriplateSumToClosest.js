/*
  Triplet Sum Close to Target (medium)
  Problem Statement
  Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the 
  target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum 
  of the triplet with the smallest sum.

  Input: [-1, 0, 2, 3], target=3 
  Output: 2
  Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

  Input: [-3, -1, 1, 2], target=1
  Output: 0
  Explanation: The triplet [-3, 1, 2] has the closest sum to the target.


  Input: [1, 0, 1, 1], target=100
  Output: 3
  Explanation: The triplet [1, 1, 1] has the closest sum to the target.

  Input: [0, 0, 1, 1, 2, 6], target=5
  Output: 4
  Explanation: There are two triplets with distance '1' from target: [1, 1, 2] & [0,0, 6]. Between these two triplets,
  the correct answer will be [1, 1, 2] as it has a sum '4' which is less than the sum of the other triplet which is '6'.
 This is because of the following requirement: 'If there are more than one such triplet, return the sum of the triplet with the smallest sum.'
*/
//https://www.youtube.com/watch?v=anuarmFjTGU&t=38s
function smallestOp(arr, target) {
  // First thing first sort array
  arr = arr.sort((a, b) => a - b);
  let smallest = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 2; i++) {
    let current = arr[i];
    smallest = targetSum(arr, current, i, smallest, target);
  }
  return target - smallest;
}

function targetSum(arr, current, i, smallest, target) {
  let left = arr[i + 1]; // BHAI arr[i] + 1 or arr[i+1] me bhut jyada difference he
  let right = arr[arr.length - 1];

  while (left < right) {
    let targetDiff = target - current - arr[left] - arr[right];
    // Bhai isse chota to kya he milega
    if (targetDiff === 0) {
      return target;
    }

    // Now this condition is tricky understand here why we are using Math.abs() and understand why we have multiple conditions
    // You need smallest diff so every time below condition gets true then update the smallest

    // WHY Math.abs See 10 - 8 = 2 and 10 - 11 = -1 but still bhai closest to 11 hua na because if target 10 hota to 10
    // or 11 ke beach me difference 1 hai where as 10 or 8 ke  beach me difference 2 hai so this way answer should be 11
    if (
      Math.abs(targetDiff) < Math.abs(smallest) ||
      (Math.abs(targetDiff) === Math.abs(smallest) && targetDiff > smallest)
    ) {
      smallest = targetDiff;
    }
    if (targetDiff > 0) {
      // This means abi bi target diff me badi values dalni he so left me move krna chiye
      left += 1;
    } else {
      right -= 1;
    }
  }
  return smallest; // UNDERSTAND WHY RETURN FROM THIS METHOD IS IMPORTENT
}

console.log(smallestOp([0, 0, 1, 1, 2, 6], 5));
