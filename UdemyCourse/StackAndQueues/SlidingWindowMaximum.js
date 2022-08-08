
// This will work fine and this is the kind of first approch should come in mind
// But in leetcode for larger output it fails
function slidingWindowBruteForce(nums,k){
  let output = [];
 for(let i = 0 ; i <=nums.length - k; i++){
  let temp = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let j = i;
  while(temp < k){
    if(nums[j] > max){
      max = nums[j];
    }
    j++;
    temp++
  }
  output.push(max)
 }
 return output;
}
console.log(slidingWindowBruteForce([8,5,8,-7,5,9,4,0,77],3))


function slidingWindowLeetcode239(nums,k){
 let nge = [] // nge : Next greater element
 let stack = [] //
 let ans  = [];
 for(let i = nums.length -1 ; i >= 0 ; i--){
  if(stack.length === 0){
    nge[i] = nums.length; // we can not use -1 because in next steps it may effect the answer
    stack.push(i); // THIS IS IMPORTENT WE ARE PUSHING INDEX HERE NOT VALUE
  }else{
    while(stack.length > 0 && nums[i] > nums[stack[stack.length-1]]){
      stack.pop();
    }
    if(stack.length === 0){
      nge[i] = nums.length
    }else{
      nge[i]= stack[stack.length-1]; // see in stack we are storing index but at the time of while loop condition we are checking only values.
    }
    stack.push(i);
  }
 }
 let j = 0;
 for(let i = 0 ; i <= nums.length - k ; i++){
   if(j < i){
    j=i;
   }
    while(nge[j] < i + k){
       j= nge[j];
    }
    ans.push(nums[j]);
  } 
  return ans
}