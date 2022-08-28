// AT THIS MOMENT RECURSION IS DONE ONLY 5 OR 10 % SO IT HARD TO UNDERSTAND THIS SORTING
// ALGO WILL REPEAT THIS AGAIN ONCE WE ARE DONE WITH RECURSION.
function mergeSort(arr,low,high){
if(low === high){
  let base = [];
  base.push(arr[low]);
 return base; 
}
let mid = Math.floor((low+high)/2);
let firstSortedHalf = mergeSort(arr,low,mid);
let secondSortedHalf = mergeSort(arr,mid+1,high)
let final = mergeTwoSortedArr(firstSortedHalf,secondSortedHalf);
return final;
}

function mergeTwoSortedArr(arr1,arr2){
 let i = 0;
 let j = 0;
 let newArr = [];
  while(arr1[i] && arr2[j]){
    if(arr1[i] < arr2[j]){
      newArr.push(arr1[i]);
      i++;
    }else{
      newArr.push(arr2[j]);
      j++
    }
  }
  while(i < arr1.length){
    newArr.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    newArr.push(arr2[j]);
    j++;
  }
 return newArr;
}

let unSortedArr = [1,8,2,5,66,6,2,11,33,21,52];
console.log(mergeSort(unSortedArr,0,unSortedArr.length-1))