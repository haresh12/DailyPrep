
// Distinct elements are nothing but the unique (non-duplicate) elements present in the given array
// time complexity O(n)
function searchInsertPositionLeetcode35(nums, target){
  for(let i = 0 ; i < nums.length ; i++){
    if(nums[i] === target){
      return i;
    }else if(target < nums[i]) {
      return i;
    }
  }
  // This one for when no above condition is true means array target should be the last time of index as its biggest from all the other items
  return nums.length;    
}

// Things to learn : Here we have sorted array so we can use binery search to search specific 
// element in array and it will be O(logn) because we don't need to loop throught entire array to
// search specific elements. 
// AFTER 2 HOURS UNDERSTOOOOOOOD
function searchInsertPositionLeetcode35S2(nums, target){
  if(target > nums[nums.length -1]) return nums.length;
  if(target < nums[0]) return 0
  let high = nums.length -1 ;
  let low = 0;
  let mid ;
  while(low <= high){
   mid = Math.floor((low + high)/2);
   if(target ===  nums[mid]) return mid
   else if(target > nums[mid]) low = mid +1
   else high = mid -1;
  }
  return nums[low] > target ? low  : low+1 ; // WHY DO WE ALWAYS RETURN LOW APART FROM THIS LINE ALL THINGS CLEAR
}
console.log(searchInsertPositionLeetcode35S2([1],1))  