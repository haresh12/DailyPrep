
// brute force 
function removeDuplicateFromArrayLeetcode26(nums){
 let i = 0;
 let obj = {};
 while(i < nums.length){
   if(nums[i] in obj){
     nums.splice(i,1);
   }else{
    obj[nums[i]] = i;
    i++;
   }
 }
 return nums.length; 
}

console.log(removeDuplicateFromArrayLeetcode26([1,1,1,1]))

function removeDuplicate(nums){
  let i = 0;
  while(i < nums.length -1){
    if(nums[i] ===  nums[i+1]){
      nums.splice(i+1,1);
    }else{
      i++;
    }
  } 
 return nums.length; 
}

console.log(removeDuplicate([1,2,3,4,5,6,7,7,7,7,8,8,8]))