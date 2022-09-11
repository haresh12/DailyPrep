/*
 Now here we have to do quick sort with recursion first we need to understand that quick 
 sort use partitioning and take last  item of array as pivot and the do partitioning and
 that way you will be sure that the pivot point is on its correct sorted place. And in 
 this algorithm we take each element as pivot once so that's why all elements putted into there 
 right position. 
*/
/// MOST IMPORTENT POINT THIS WILL WORK ONLY IF YOU DON'T HAVE PARITION PIVOT POINT CURRENT ARRAY
// AND YES IT MAKE SENSE BECAUSE ANYWAY IN QUICK SORT WE HAVE EACH ELEMENT AS PIVOT FOR ONCE
// ATLEAST AND THE ELEMENT WE ARE CURRENTLY USING AS PIVOT POINT WILL BE ON CORRECT POSITION
// WHICH WILL GIVE US GURRENTE THAT SPECIFIC PIVOT POINT IS ALREADY SORTED




function partitioning(arr,pivot){
  let i = 0 ;
  let j = 0;

  while(i < arr.length -1){
    if(arr[i] > pivot){
      i++;
    }else{
      swap(arr,i,j);
      i++;
      j++;
    }
  }
 return j-1;
}

function swap(arr,i,j){
 let temp = arr[i];
 arr[i] = arr[j];
 arr[j] = temp
}

console.log(partitioning([3,4,6,7,11,1,9,13,2],2));