/*
 Create class where you user can pass array and we need to create to methods 
 reset() : which will reset to original arr and second one is shuffle() which 
 wee shuffle array and return that array
*/
// GOOD THING IS IT WORKED IN LEETCODE
// BUT FASTER THEN 5% ONLY

// MI LEARN THIS PROTOTYPE THING YOU ALWAYS GET STUCKED THERE
class Solution {

  constructor(nums){
    this.nums = nums;
    this.temp = [...nums]; // this.temp = this.nums means you are giving reference not copying
  }

  shuffle(){
   // we need to shuffle any way like even chaging first and last index is also shuffling
   // now its upto us how we want to do. we will take any two random index between 0 to arr.length -1 will do shuffle
   let minIndex = 0;
   let maxIndex = this.nums.length-1;
   let mid = Math.floor(maxIndex/2)
   let first =  Math.floor(Math.random() * (mid - minIndex +1 ))+minIndex; // GOT FROM STACK OVERFLOW 
   let second = Math.floor(Math.random()  * (maxIndex - mid +1))+mid; //from second half of array
   let temp = this.nums[first];
   this.nums[first] =  this.nums[second];
   this.nums[second] =  temp;
  return this.nums; 
  }
  reset(){
    return this.temp; // we always store orignal array
  } 
}

const sl = new Solution([1,2,3,4,5,6,7,8,9])
console.log(sl.shuffle())
console.log(sl.shuffle())
console.log(sl.shuffle())
console.log(sl.shuffle())
console.log(sl.shuffle())
console.log(sl.reset())
// const sl3 = new Solution([7,8,9,10,11,12,13,14,15])
// console.log(sl3.shuffle())
// console.log(sl3.shuffle())
// console.log(sl3.shuffle())
// console.log(sl3.shuffle())
// console.log(sl3.shuffle())
// console.log(sl3.reset())
