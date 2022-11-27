/*
  136. Single Number
  
  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
  You must implement a solution with a linear runtime complexity and use only constant extra space.

  Input: nums = [2,2,1]
  Output: 1

  Input: nums = [4,1,2,1,2]
  Output: 4

  NOTE : FIRST THING FIRST FOR LINEAR RUNTIME WE MUST HAVE KNOWLEDGE OF BIT MANIPULATION AND 
  RIGHT NOW I DON'T HAVE SO WILL GO WITH APPORCHES THAT COMES INTO MIND
*/


// WHENEVER WE HAVE NESTED LOOP APPROCH IN MIND TRY TO USE MAP FOR SURE
// Time O(N) space O(n)
function singleNumber(arr){ 
let map = {};
let value = 0;
for(let i = 0 ; i < arr.length ; i++){
  if(map[arr[i]] in map){
     map[arr[i]]++; 
  }else{
    map[arr[i]] = 1;
  }
}

Object.entries(map).forEach(([k,v]) => {
   if(v === 1){
    value = k;
   }
})
return value;
}

// With set
function singleNumberWithSet(arr){ 
 let set = new Set(arr); // MUST USE SET GET ALL UNIQUE VALUE FROM ARR.
 let sumOfSetValue = 0;

 // THIS IS INCREDIBLE THING I HAVE LEARNED TODAY SET CAN BE ITERATE WITH THIS MAKE SURE NOT MAP
 for (const element of set) {
    sumOfSetValue+=element;
}
let idealSum = 2 * sumOfSetValue; // This should be total sum if we have all the element twice

let currentSum = 0;
arr.forEach((val) => {
  currentSum+=val;  // this is the sum of all the arr items
})
return idealSum - currentSum; // this will give use missing item example ideal sum should be 50 you got 45 then missing one is 5
}
console.log(singleNumberWithSet([4,4,1,2,1,2,7]))

//ONE MORE APPROCH IS JUST SORT ARRAY AND THEN CHECK LOOP THROUGH IT AND SEE WHICH WHICH ITEM ONLY EXIST ONCE.
