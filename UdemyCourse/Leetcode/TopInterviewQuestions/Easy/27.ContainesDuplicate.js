/*
   Leetcode 217. Contains Duplicate
   Given an integer array nums, return true if any value appears at least twice in the array,
   and return false if every element is distinct.

   Input: nums = [1,2,3,1]
   Output: true 

   Input: nums = [1,2,3,4]
   Output: false
*/

// Good approch 
// Other approch like nested loop or sort array first there we don't need to use any extra space
// but yes time complexity is not that good
function containsDuplicate(arr){
 let map = {};
 for(let i = 0 ; i < arr.length ; i++){
   if(map[arr[i]]){
    return true;
   }else{
    map[arr[i]] = true
   }
 }
 return false;
}

console.log(containsDuplicate([1,21,31,1,21,11]))