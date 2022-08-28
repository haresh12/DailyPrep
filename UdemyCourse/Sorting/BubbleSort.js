 /* UNDERSTAND WHY DON'T WE START NESTED LOOP FROM I BECAUSE IF YOU DO THAT THEN
    WHAT IS GOING TO HAPPEN NUMBERS BEFORE I [8,5,2] just one example you swaped
    5,8 then 2,8 and you are done with your first iteration but now at first position
    you have value 5 then 2 then 8 so if you start j == i then in you are sorting 2 and 8
    but what about 5 as its on first index . Not that tricky if you simply have picture in your
    mind */

// This algorithem is just for learning purpose we are mostly never going to use it due to time
// complexity which is o(n^2)   
function myBubbleSort(nums){
 for(let i = 0 ; i < nums.length ; i++){
   for(let j = 0 ; j < nums.length-1 ; j++){
      if(nums[j] > nums[j+1]){
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
      }
   }
 }
 return nums;
}

console.log(myBubbleSort([8,5,2,6,11,3,9,1]));