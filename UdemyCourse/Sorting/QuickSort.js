// DO THIS AFTER RECURSION NOT DONE SINGLE TIME

/*
  So Quick sort and Merge sort both use recursion to sort the arr so may be at this
  time we won't get much idea but once we will done with recursion then it will be easy
  to understand those concept.

  Merge sort =>> Merge Two sorted array 
  Qiuck sort => array partitioning 

 So in Quick sort we take last element of array as pivot and partition accordingly
 now thing about it once you do then atleast one element from arr is sorted which is
 pivot element because all the smaller value then pivot are in left and all the larger
 value of pivot is in right side.

 and thats what we do in quick sort with each recursive call it will be gaurented that one 
 element will be sorted and.
*/

// lo and hi are index where pivot is value at hi index in arr.

function quickSort(arr,lo,hi){
  if(lo > hi){
    return; // just return becase with each recursive call we are already swaping value inplace
  }
  // lets lets last element of array as pivot and do partition according to that
  let pivot = arr[hi];
 let pivotIndex =  partition(arr,lo,hi,pivot).pivotIndex; 
 let pivotArr =  partition(arr,lo,hi,pivot).arr; 

 quickSort(pivotArr,lo,pivotIndex-1);
 quickSort(pivotArr,pivotIndex+1,hi);
}

// from here return pivot index
function partition(arr,lo,hi,pivot){

  let i = lo;
  let j = lo;
  while(i <= hi){
    if(arr[i] >= pivot){
      i++;
    }else{
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++
      j++;
    }
  }
  console.log("here",arr)
  return {
    pivotIndex : j,
    arr : arr
  }; // this is where our pivot will be
}

let arr = [3,2,1]
console.log(quickSort(arr,0,arr.length-1))
console.log(arr)