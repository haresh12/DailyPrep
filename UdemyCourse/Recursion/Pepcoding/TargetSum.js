/*
 Find target sum => [10,20,30,40,50,60,70,80] target = 50
 // THIS ITERATIVE SOLUTION WILL WORK ONLY FOR SORTED ARRAY
*/


function twoTargetSum(arr,target){
  let i = 0;
  let j = arr.length - 1;
  while(i < j){
    if(arr[i] + arr[j] > target){
      j--; 
    }else if(arr[i] + arr[j] < target){
      i--;
    }else {
      console.log(`[${arr[i]},${arr[j]}]`)
      i++;
      j--;
    }
  }
}

// GOOD JOB ONLY MISTAKE I WAS DOING PREVIOUSLY IS MISSING FIRST BASE CASE LIKE INDEX === ARR.LENGTH THEN RETURN
// IT IS SAME SAME SUBSET PROBLEM WE DID LIKE EACH ONE WILL GET CHANCE TO BE THE PART OF ARRAY OR NOT
function getAllTargetSum(arr,target,index,path,sum){
if(index === arr.length) {
  return;
}
 if(sum === target){
    console.log(path);
   return;
 }
  getAllTargetSum(arr,target,index+1,path+arr[index]+",",sum+arr[index]) // Yes call
  getAllTargetSum(arr,target,index+1,path,sum) // No call

}

getAllTargetSum([10,20,30,40,50,60,70,800],100,0,'',0)
// twoTargetSum([10,20,30,40,50,60,70,80],80)