/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice.
 You can return the answer in any order.
*/
// NEED TO RETURN INDICES NOT VALUE MAKE SURE THAT
// THIS WILL WORK BUT O(N2) time complexity not good solution
// BF = Brute forse
function twoSumLeetCode01BF(nums , target){
 for(let i = 0 ; i < nums.length ; i++){
   for(let j = i + 1 ; j < nums.length ; j++){
     if(nums[i] + nums[j] ===  target){
      return [i,j];
     }
   }
 }
}

// THIS ONE IS GRATE TO CHECK IF KEY EXIST IN OBJECT WE CAN CHECK WITH in KEYWORD EX BELOW
/*
 let vals = {
  "1" : 8,
  "2" : 50,
  "5" : 80
 };
console.log( 5 in vals) will return true
console.log( 80 in vals) will return false because 80 we have as value not as key
*/
// NEED TO LEARN PATTERN BECAUSE THIS IS ALSO ONE KIND OF PATTER WHEN YOU HAVE O(N2) SOLUTION
// AT THAT TIME IN SOME CASES YOU ARE GOING TO USE OBJECT TO STORE VALUES AND THEN DO COMPARITION 
// AND THIS WAY WE CAN SOLVE PROBLEM WITH O(N) SOLUTION BUT WILL HAVE EXTRA SPACE HERE.
// TRADE OFF BETWEEN TIME AND SPACE
function twoSumLeetCode01(nums , target){
 let vals = {};
 for(let i = 0 ; i < nums.length ; i++){
  if(target - nums[i] in vals){
    return [vals[target-nums[i]],i]; // incredible logic vals[target-nums[i] => val[9 - 2] => val[7] => where we have index of 7.
  }else{
    vals[nums[i]] = i; // see as value we are storing index because this is what we have to return
  }
 }
}
console.log(twoSumLeetCode01([2,7,11,15], 18))