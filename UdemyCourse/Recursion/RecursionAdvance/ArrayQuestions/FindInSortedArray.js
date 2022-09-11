/*
  Till now this one is the most importent question.
  Search item in rotated sorted array.
  WAS NOT ABLE TO DO 
  DO AS MANY AS TIME YOU CAN DO
*/

/*
 1. Cases or conditions for this question
 2. Find the mid
 3. check lo is <= to mid this will give you surety that from lo to mid array is sorted
   how because element at lo is lower then mid means there is no rotation happen here atleast
 4. If case 3 is true then find is your target lies in the range from lo to mid if yes the 
    for sure you need to search on left side so mid = hi -1
  5 if case 3 is not true that means that array is not sorted and that gives you surety that
    all the elements right side are bigger then current target. so if you are looking for 
    smaller target then go to right side and if larger target then go to left.
  
  NOTE : IN ALL CASES YOU NEED TO UNDERSTAND ONE THING THAT ONE OF THE ARRAY LIKE FROM LO TO 
  MID OR MID+1 TO HI WILL BE SORTED.
*/

// THIS IS NOT THAT SIMPLE DO AS SUCH AS PRECTICE YOU CAN DO
// HERE KEY THING IS THAT RANGE AND THE FACT THAT WE GONE HAVE ONE OF SIDE ARE SORTED (MUST UNDERSTAND)
let arr = [5,6,7,8,9,1,2,4]
function findInSortedArray(target){
  let lo = 0;
  let hi = arr.length - 1;
  while(lo <= hi){
   let mid = Math.floor((lo+hi)/2);
   if(arr[mid] === target) return mid;
   // if this is true means we have sorted array from lo to mid
   if(arr[lo] <= arr[mid]){
     // next check should be is your target lies in range from lo to mid
     // if this is also true then must search between lo to mid
     console.log(arr[lo],arr[mid])
     if(target >= arr[lo] && target < arr[mid]){
      hi = mid -1;
     }else{
      lo = mid + 1; // because we need to search atleast one side so if not left the right
     }
   }else{
     // if from lo to mid is not sorted then for sure
     // mid to hi will be sorted
     // so just check here that is your target in range from mid to hi
     if(target > arr[mid] && target<=arr[hi]){
        lo=mid+1; // target lies to right side
     }else{
      hi = mid -1;
     }
   }
  }
}

console.log(findInSortedArray(9))