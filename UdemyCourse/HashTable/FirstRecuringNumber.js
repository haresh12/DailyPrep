function firstRecuringNumber(nums){
 let vals = {};
 for(let i=0 ; i < nums.length ; i++){
    if(nums[i] in vals){
      return nums[i];
    }else{
      vals[nums[i]] = i
    }
 }
}
//GOOD SOLUTION INCREDIBLE JOB
function firstRecuringNumber2(nums){
  let distance = Number.MAX_SAFE_INTEGER;
  let number = 0
  for(let i=0; i<nums.length;i++){
      for(let j= i+1 ; j<nums.length ; j++){
        if(nums[i] === nums[j]){
          if((j- i) < distance){
             distance = (j-i)
             number=nums[i];
          }
        }
      }
  }
  console.log(number);
  console.log(distance)
 }
console.log(firstRecuringNumber2([2,1,6,11,9,3,5,2,1,2,4]))
function firstUniqueCharacter(string){
 let map = {};
 for(let i = 0 ; i < string.length ; i++){
     if(string[i] in map){
        map[string[i]]+=1;
     }else{
       map[string[i]] = 1; 
     }
 }
 const arr = Object.keys(map);
 for(let i = 0 ; i < arr.length ; i++){
    if(map[arr[i]] === 1){
      return string.indexOf(arr[i]);
    }
 }
 return -1;
}
// console.log(firstUniqueCharacter("hareshyouaregoingtowin"))
// console.log(firstRecuringNumber([2,1,1,2,3,5,1,2,4]))