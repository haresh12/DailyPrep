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