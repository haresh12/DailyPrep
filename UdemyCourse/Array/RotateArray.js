// GOOD JOB HERE : WE CAN WRITE POP AND UNSHIFT BY OUR OWN IF NEEDED.
// THIS IS BRUTE FORST SOLUTION AND ALSO FAILING IN ONE TEST CASE : https://leetcode.com/submissions/detail/752583099/testcase/ 
//https://www.youtube.com/watch?v=8RErc0VXAo8
function rotateArray189(nums,k){
  if (k >= nums.length ) {
    k = k % nums.length
}
  while(k !== 0){
    let lastItem = nums[nums.length -1];
    nums.pop()
    nums.unshift(lastItem)
    k--;
  }
  return nums;
}
console.log("rotateArray189",rotateArray189([1,2,3,4,5],101))

//https://www.youtube.com/watch?v=8RErc0VXAo8
function rotateArray2(nums, k){
 if(k > nums.length){
  k = k%nums.length;
 }
 reverse(nums, 0 , nums.length - k - 1); // reverse first half
 reverse(nums,nums.length - k , nums.length - 1); // reverse second half
 reverse(nums, 0 , nums.length -1); // reverse full 
 return nums;

 // suppose if k is 3 and length is 10 then we need to devide them into 2 part
 // first 0 to 6 and second 7 to 10 so in second.length should be equal to k. (secondArray.length === k)
 // First Array (0 to array.length - k -1) => (10 - 3 -1) => 6 so it will be from 0 to 6
 // We are doing -1 because we need index 
 // EXAMPLE : [1,2,3,4,5,6,7,8] K = 3
 // First half : [1,2,3,4,5] => (0,arr.length - k - 1) => (0,4) index will be included in first half
 // Second half : [6,7,8] => (arr.length - k ,arr.length-1) => (5,7)
 // Reverse First half : [5,4,3,2,1]
 // Reverse Second half : [8,7,6]
 // At this momemt array : [5,4,3,2,1,8,7,6] 
 // Reverse this full array : [6,7,8,1,2,3,4,5] => Your out put

}

function reverse(arr,startIndex,endIndex){
  let li = startIndex;
  let ri = endIndex ;
  while(li < ri){
    let temp = arr[li];
    arr[li] = arr[ri];
    arr[ri] = temp;
    li++;
    ri--;
  }
}

console.log("rotateArray2",rotateArray2([1,2,3,4,5],101))
