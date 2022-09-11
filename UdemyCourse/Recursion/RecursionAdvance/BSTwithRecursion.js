
/*
  you will be givin sorted array and need to find specific target from it.
  (100% this is sorted array and we need to search inside it so will be using binary search)
  We have already done binary search with iterative solution but need to learn recursive one
*/

// BIG THING AGAIN FORGOT TO RETURN AT LINE 16 AND 18 THING ABOUT IT WHY ITS IMPORTENT
function findTarget(arr,lo,hi,target){
  if(lo > hi){
    return 'not found'
  }
  let mid = Math.floor((lo+hi)/2);
  console.log(mid)
  if(arr[mid] > target){
   return findTarget(arr,lo,mid-1,target);
  }else if(arr[mid] < target){
  return findTarget(arr,mid+1,hi,target);
  }else{
    return mid;
  }
}

let sr = [2,3,5,7,8,33,56,77,88,99,103,210,230,250];
console.log(findTarget(sr,0,sr.length-1,250))