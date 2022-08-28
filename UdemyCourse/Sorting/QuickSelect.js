


function quickSelect(arr,lo,hi,k){
 
 let pivot = arr[hi];
 let pivotIndex = partition(arr,lo,hi,pivot) 
  console.log(pivotIndex)
 if(k > pivotIndex){
  // means you need to traverse to right
  return quickSelect(arr,pivotIndex+1,hi,k);
 }else if(k < pivotIndex){
  return quickSelect(arr,lo,pivotIndex-1,k);
 }else{
  return pivot
 }
}


function partition(arr,lo,hi,pivot){
 let i = lo;
 let j = lo;
 
 while(i <=hi){
  if(arr[i] >=  pivot){
    i++
  }else{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j++;
  }
 }
 return j;
}

let arr = [3,1,2]
let k = 3
console.log(quickSelect(arr,0,arr.length-1,k-1))