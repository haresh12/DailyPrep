// GOOD ONE BUT FIND MORE OPTIMIZED SOLUTION
function nextGreaterElementLeetcode496(nums1,nums2){
  let stack = [];
  let obj = {}
  let newArray = [];
  for(let i = nums2.length -  1 ; i >= 0  ; i--){
     if(stack.length === 0){
        obj[nums2[i]] = -1
        stack.push(nums2[i])
     }else{
        while(stack.length > 0 && nums2[i] > stack[stack.length -1]){
          stack.pop();
        }
        if(stack.length === 0){
          obj[nums2[i]] = -1
        }else{
          obj[nums2[i]] =stack[stack.length-1]
        }
        stack.push(nums2[i]);
     }
  }
  for(let i = 0 ; i < nums1.length ; i++){
     newArray.push(obj[nums1[i]]);
  }
return newArray;
}

console.log(nextGreaterElementLeetcode496([4,1,2],[1,3,4,2]));