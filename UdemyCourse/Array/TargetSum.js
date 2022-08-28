function targetSumPair(arr,target){
 let sortedArr = arr.sort(function(a,b) {
  return a - b;
 })  // understand how sort works in js if you will write just arr.sort() // it will behave different

 let i = 0;
 let j = sortedArr.length-1;
 let output = [];
 while(i < j){
  if(sortedArr[i] + sortedArr[j] > target){
    j--;
  }else if(sortedArr[i] + sortedArr[j] < target){
    i++;
  }else{
    output.push(`[${sortedArr[i]},${sortedArr[j]}]`)
    i++;
    j--;
  }
 }
 return output
}

console.log(targetSumPair([7,15,3,18,6,4,19,2,12,11,9],18))