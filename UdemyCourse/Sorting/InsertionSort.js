// do more practice as unable to do in 1 hour 
function insertionSort(nums){
 // First element of array we always consider it as already sorted because its only one element
 for(let i = 1 ; i < nums.length ; i++){
   for(let j = i-1; j >= 0 ; j--){
    if(nums[j+1] < nums[j]){
      let temp = nums[j+1];
      nums[j+1] = nums[j];
      nums[j] = temp;
    }else{
      break; // this means current number is on its right position
    }
   }
 }
 return nums;
}

console.log(insertionSort([8,5,2,6,11,3,9,1]))