// This is the brute forst way to do this
function sortZeroOneTwo(arr){
let i = 0;
let j = 0;

while(i < arr.length){
  if(arr[i] > 0){
    i++;
  }else{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j++;
  }
}

let k = j;

while(k < arr.length){
  if(arr[k] === 2){
    k++
  }else{
    let temp = arr[k];
    arr[k] = arr[j];
    arr[j] = temp;
    k++;
    j++;
  }
}
console.log(arr)
}


/*
https://www.youtube.com/watch?v=MbV26HWqxrs&list=PL-Jc9J83PIiFc7hJ5eeCb579PS8p-en4f&index=13
  Here also we will use same partition concept but this time rather then deviding into 
  2 region we will devide into three region i j k 
  so from 0 to j-1 will be 0
  from j+1 to k is 1
  and from k+1 to end will have value 2
  for i and j logic will work same way but for k it will start from end and will move
  it reverse side as soon as we get value 2
*/

function sortZeroOnesTwoOpt(arr){
let i = 0;
let j = 0;
let k = arr.length - 1;
while(i < k){
  if(arr[i] === 0){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j++;   
  }else if(arr[i] === 1){
    i++;
  }else if(arr[i] === 2){
    let temp = arr[k];
    arr[k] = arr[i];
    arr[i] = temp;
    k--;
  }
}
return arr
}

console.log(sortZeroOnesTwoOpt([1,0,2,0,1,0,2,0,1,1,2,0,2,1,1,0,0,0,0,1,2,1,0,0,0,1]))
