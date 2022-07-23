
//Quick sort or Quick select partitianing 
// This solution is based on above algorithem
function moveZerosLeetcode283(nums){
 let li = 0;
 let ri = 0;
 while(ri !== nums.length){
  if(nums[ri] !== 0){
    let temp = nums[li];
    nums[li] = nums[ri];
    nums[ri] = temp; 
    li++;
    ri++;
  }else{
    ri++;
  }
 }
 return nums;
}
console.log("moveZerosLeetcode283",moveZerosLeetcode283([0,1,0,2,0,3]))
// if find zero then remove from that place and push to the end 
// with just two inbuild method we can achive this incredibal solution : push() to push the value to and
// splice(index,deletecount) => splice(i,1) => to delete value from that specific index.
// shifting every element with o(n) opretion and o(n) operation inside loop means time complexity is O(N^2)
let moveZeroes = function(nums) {
  for(let i= nums.length-1; i>=0; i--){
      if(nums[i]===0){
          nums.push(0) 
          nums.splice(i,1)
      }
  }
  return nums
};
// console.log("moveZerosLeetcode283",moveZeroes([0,0,1]))