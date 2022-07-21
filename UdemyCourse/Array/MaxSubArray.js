
// Incredible question great explanation at 
//https://leetcode.com/problems/maximum-subarray/discuss/791430/Javascript-Solution%3A53-(speedgreater95)
//https://www.youtube.com/watch?v=VMtyGnNcdPw
//Kadane's Algorithm for Maximum Sum Subarray
function maxSubArraryLeetcode53(nums){
 if(nums.length === 0) return 0;
 let result = Number.MIN_SAFE_INTEGER; // lowest number
 let sum = 0;

 for(let i=0 ; i < nums.length ; i++){
    sum+=nums[i]; // add current value to sum
    result = Math.max(sum,result); // find the max value after adding current value because after adding current value if result is decresing then that last value is not helping us to find the largest sum
                                  // Its like we already have result 10 and current sum after adding -2 or any nagetive value it became 8 which is less then our current result so we should not add that.
    sum = sum < 0 ? 0 : sum;      // THIS IS THE ONLY CRITICAL PART TO UNDERSTAND DO DRY RUN AND SEE ABOVE LINK SOLUTION COMMENT                               
 }
 return result;
}

// console.log(maxSubArraryLeetcode53([2,8,-16,7,4]));
// This is much more understandable solution in terms of code 
function maxSubArraySolution2(nums){
 if(nums.length === 0) return
 let result =  Number.MIN_SAFE_INTEGER;
 let sum = 0;
 for(let i = 0 ; i < nums.length ; i++){ 
  if(sum + nums[i] < nums[i]){
    sum= nums[i];
  }else{
    sum+=nums[i]
  }
    if(sum > result){
      result = sum
    }

 }
 return result;
}
console.log(maxSubArraySolution2([2,8,-16,7,4]));
