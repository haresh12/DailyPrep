// Same concept as two sum
function containsDuplicate217(nums){
 let obj = {};
 for(let i = 0 ; i < nums.length ; i++){
   if(nums[i] in obj){
    return true;
   }else{
    obj[nums[i]] = i;
   }
 }
 return false;
}

console.log("containsDuplicate217",containsDuplicate217([1,2,3,4]))