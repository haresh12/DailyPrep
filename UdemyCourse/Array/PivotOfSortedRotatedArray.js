
// need to return index of pivot point
// This is o(n) solution so need to optimal solution
// function pivotOfSortedArr(arr){
// let pivot = 0;  
// for(let i=1; i < arr.length ; i++){
//   if(arr[i] < arr[i-1]){
//     pivot = i;
//     break;
//   }
// }
// return pivot;
// }

// optimal solution with binary search
function pivotOfSortedArrOpt(arr){
 let lo = 0;
 let hi = arr.length - 1;
 while(lo < hi){
  let mid = Math.floor((lo+hi)/2);
  if(arr[hi] > arr[mid]){
     hi = mid;
  }else{
    lo = mid +1;
  }
 }
 return arr[lo]; // lo and hi will be same at last
}
console.log(pivotOfSortedArrOpt([30,40,50,60,70,80,10]))