
//IF ARRAY IS SORTED AND YOU WANT TO SEARCH FOR ITEM THEN ALWAYS USE BST
function searchFromSortedArray(arr,target){
 let left = 0;
 let right = arr.length - 1;
 
 while(left <= right){
  let mid = Math.floor((left+right)/2);
  if(arr[mid] > target){
    right = mid -1;
  }else if(arr[mid] < target){
    left = mid+1;
  }else{
    return mid; // MAKE SURE RETURN WILL BE MID NOT LEFT OR RIGHT BECAUSE THIS IS WHERE YOU GOT THE NUMBER
  }
 }
 return -1;
}

// NOTE THIS IS TRICKY QUESTION EVEN IT SEEMS EASY BUT ITS NOT
// console.log(searchFromRotatedSortedArray([1,2,3,4,5,6,7,8,9,10,13,18,20,22,25,28],))

// NOW WE HAVE TO DO THIS OPERATION ON O(LOGN) AND ARR IS SORTED BUT IT MAY BE ALSO ROTED
function searchFromRotatedSortedArray(arr,target){
 let left = 0;
 let right = arr.length - 1;
 // either right or left side any of one will be always sorted
 while(left <= right){
  let mid = Math.floor((left+right)/2);
  if(arr[mid] === target) return mid;
  if(arr[left] <= arr[mid]){ // if this true means we have left array sorted
    if(target >= arr[left] && target< arr[mid]){ // means target is in left range
       right= mid-1;
    }else{
      left=mid+1;
    }
  }else{
    // This means right side array is sorted
    if(target > arr[mid] && target <= arr[right]){
      // this means continue search on right side
      left=mid+1;
    }else{
      right=mid-1;
    }
  }
 }
 return -1;
}

console.log(searchFromRotatedSortedArray([3,1],1))
