
function sortZeroOnes(arr){
let i = 0;
let j =0;
while(i < arr.length){
  if(arr[i] === 1){
    i++;
  }else{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j++;
  }
}
return arr;
}

function sortNonNagativies(arr){
  let i = 0;
  let j =0;
  while(i < arr.length){
    if(arr[i] >= 0){
      i++;
    }else{
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j++;
    }
  }
  return arr;
  }
console.log(sortNonNagativies([-1,8,0,-5,8,-13,-15,-16-17,1,4,5,11,12]))