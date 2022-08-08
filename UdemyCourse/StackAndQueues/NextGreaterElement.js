
// THESE STEP ARE EASY IF WE REALLY UNDERSTAND THEN WELL
//POP ALL SMALL VALUE PRINT STACK.PEEK() AND THEN PUSH CURRENT VALUE IN STACK
function nextGreaterElement(nums){
  let output = [];
  let stack = [];
  for(let i = nums.length - 1 ; i >= 0 ; i--){
    if(stack.length == 0){
      const val = findIndexInLeft(i,nums);
      output[i] = val;
      stack.push(nums[i]);
    }else{
      // STEP 1
      while(stack.length > 0 && nums[i] > stack[stack.length -1]){
        stack.pop();
      }
      // STEP 2
      if(stack.length == 0){
        const val = findIndexInLeft(i,nums);
        output[i] = val;
      }else{
        output[i] = stack[stack.length -1];
      }
      // STEP 3
      stack.push(nums[i]);
    }
  }
  return output;
}
function findIndexInLeft(index,nums){
  for(let i = 0 ; i < index ; i++){
    if(nums[i] > nums[index]){
      return nums[i];
    }
  }
  return -1;
}
console.log(nextGreaterElement([1,2,3,4,25,6,17,2]))