/*
  First thing comes in mind like do we know iterative solution for merge sort ? : ANSWER IS NO
  ANYWAY WE WON'T BE WORRY ABOUT IT RIGHT NOW. SO LETS NOW CODE DIRECTLY WITH RECURSIVE SOLUTION

  So basically merge use concept of two sorted array and pass those two sorted array in function
  it will return you full sorted array.
*/

/*
   AT EVERY LEVEL N ELEMENTS GETTING MERGED TOGETHER
   UNDERSTAND THAT YOU ARE DEVIDING THE ARRAY IN EVERY TIME IN HALF PART FOR THAT
   YOU NEED TO DEVIDE TILL LOG(N) 
   Time Complexity : 
   Currently if we understand that each level how many elements are getting sorted 
   so it will be like n why ?
   You see that initial you divide arr in two part so it will be like => n/2 + n/2 => but if combine than end answer will be n
   then both side n/2 will again devide it self in two part => (n/4 + n/4) + (n/4 + n/4) => again will be will be n
   so you see at all level we have n elements getting sorted  so o(n) now regarding level
   how we counted logn that i don't have idea yet but over all time complexity will be O(NLOGN)
*/
// MUST MUST DRAW TREE BECAUSE EVEN IF YOU GOT ANSWER I AM PRETTY SURE YOU WON'T GET HOW IT IS WORKING
// TREE NOT DONE YET
function mergeSort(arr,lo,hi){
 if(lo === hi){
   let baseArr = [];
   baseArr.push(arr[lo]); // lo or hi both will work fine as both are same
   return baseArr;
 }
 let mid = Math.floor((lo+hi)/2);
 let fsh = mergeSort(arr,lo,mid);
 let ssh = mergeSort(arr,mid+1,hi);
 return mergeTwoSortedArr(fsh,ssh);
}
// This works fine and this is what merge sort will be use
function mergeTwoSortedArr(firstArr,secondArr){
 let fi = 0;
 let si = 0;
 let newArray = [];
 
 while(firstArr[fi] && secondArr[si]){
   if(firstArr[fi] < secondArr[si]){
     newArray.push(firstArr[fi])
     fi++
   }else{
    newArray.push(secondArr[si]);
    si++
   }
 }

 while(fi < firstArr.length){
  newArray.push(firstArr[fi])
  fi++
 }

 while(si < secondArr.length){
  newArray.push(secondArr[si])
  si++
 }
 return newArray;
}

let arr = [3,1,8,6,5,2,11,23,4,61,22,56,11,19]
let lo = 0;
let hi = arr.length 
console.log(mergeSort(arr,0,arr.length-1))