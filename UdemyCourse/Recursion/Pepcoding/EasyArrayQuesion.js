/*
  Print array using recursion
*/

// EASY
function printArray(arr,index){
 if(index === arr.length){
  return;
 } 
 console.log(arr[index]);
 printArray(arr,index+1);
}

// printArray([10,20,30,40,50],0)

// SEE MAGIC WE HAVE'T CHANGED SIGNATURE JUST PUT LINE BELOW RECURSION CODE
function printReverseArray(arr,index){
  if(index === arr.length){
    return;
   } 
   printReverseArray(arr,index+1);
   console.log(arr[index]);
}

// printReverseArray([10,20,30,40,50],0)


function findMax(arr,index,max){
 if(index === arr.length){
  return max;
 }
  if(arr[index] > max){
    max=arr[index]
  }
   max = findMax(arr,index+1,max) // 50TH TIME SAME MISTAKE HOLD VALUE MAN IF RETURN TYPE IS INT THEN 
  // IN RECURION CALL YOU MUST HOLD THAT VALUE findMax() won't work must be max = findMax() or simpe return findmax()
 return max  
}

console.log(findMax([10,20,311,40,50],0,Number.MIN_SAFE_INTEGER))

// Easy
function firstOccurance(arr,index,target){
 if(index === arr.length){
  return -1
 }
 if(arr[index] === target){
  return index
 } 
 return firstOccurance(arr,index+1,target); // IF YOU UNDERSTAND WHY WE NEED RETURN HERE YOU UNDERSTAND RECURSION
}

console.log(firstOccurance([10,20,311,40,50],0,8))

// Easy
function lastOccurance(arr,index,target){
  if(index === -1){
    return index
  };

  if(arr[index] === target){
    return index
  }
  return lastOccurance(arr,index-1,target);
}

let arr = [8,10,20,311,40,50,10,8,7]
console.log(lastOccurance(arr,arr.length-1,111))

// Either you can print or you can return new array with all indicies leetcode 2089
var targetIndices = function(nums, target) {
  nums = nums.sort((a,b) =>  a - b); // don't write return in a - b because its in single line
  const output = getAllIndicies(nums,target,0,[]); 
   return output;
};

function getAllIndicies(nums,target,index,output){
 if(index === nums.length){
   return output
 }
  if(nums[index] === target){
     output.push(index); 
  }
  return getAllIndicies(nums,target,index+1,output);  
}
