/*
Leetcode : 169
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
*/
//   FOR IN USED TO ITERATE THROUGH OBJECT WHERE FOR SET WE USE FOR OF
//    THIS IS INCREDIBLE THING I HAVE LEARNED TODAY SET CAN BE ITERATE WITH THIS MAKE SURE NOT MAP
//   for (const element of set) {
//     sumOfSetValue+=element;
// }

//https://www.youtube.com/watch?v=X0G5jEcvroo
// Bruteforce with map
function majorityElement(arr){
 let map = {}
 for(let i = 0 ; i < arr.length ; i++){
  if(arr[i] in map){
    map[arr[i]] = ++map[arr[i]];
  }else{
    map[arr[i]] = 1;
  }
 }

 let numberOfTimes = 0;
 let number = ''
 for (const key in map) {
    if(map[key] > numberOfTimes){
      numberOfTimes = map[key]
      number = key;
    }
 }
 return number;
}
//Moore's Voting Algorithm Best explanation in https://www.youtube.com/watch?v=X0G5jEcvroo

function majorityElementOptimized(arr){
 let frequency = 1;
 let current = arr[0] 
 for(let i = 1 ; i < arr.length; i++){
    if(arr[i] === current){
      frequency++;
    }else if(frequency > 0){
      frequency--;
    }else{
      current = arr[i];
      frequency=1;
    }
 } 
//  if(frequency === 0){
//   //[2,2,2,2,2,1,1,1,1,1] MAKE SURE HERE 2 AND 1 ARE EQUAL TIMES SO NO MAJORITY ELEMENTS
//    console.log('THIS MEANS WE HAVE NO MAJORITY ELEMENTS');
//  }

// Also in leetcode it said that we will always have majority element means there will be always
// element which exist more then N/2 times THIS IS IMPORTENT N/2 => ARR.LENGTH/2 >
 return current
}
console.log(majorityElementOptimized([1,2,2]))