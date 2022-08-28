

// This is one little bit good then bubble sort because we are not starting nested loop always from 0
// still time complexity of this is o(n^2);
// This algo simply sort one element with each iteration. so if you are at index for then its sure
// that from index 0 to 3 are already sorted
function mySelectionSort(nums){
 for(let i = 0 ; i <nums.length ;i++){
  let min = i;
   for(let j = i+1; j < nums.length;j++){
    if(nums[j] < nums[i]){
       min = j;
    }
   }
   let temp = nums[min];
   nums[min] = nums[i];
   nums[i] = temp;
 }
 return nums;
}

console.log(mySelectionSort([8,88,3,1,7,82,9,2,11,1,1,34,55]));
