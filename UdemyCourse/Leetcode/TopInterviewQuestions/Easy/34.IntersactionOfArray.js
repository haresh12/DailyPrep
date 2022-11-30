/*
   Leetcode : 350 
   Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it 
   shows in both arrays and you may return the result in any order.

   Input: nums1 = [1,2,2,1], nums2 = [2,2]
   Output: [2,2]

   https://www.youtube.com/watch?v=FEQSlOQa5po // MUST WATCH
*/

// brute force did not worked in few sceanrio
function intersactionOfArray(arr1,arr2){
  if(arr2.length > arr1.length){
    let temp = arr2;
    arr2 = arr1;
    arr1 = temp;
  }
  let j = 0;
  let newArr = [];
  let temp = [];
  for(let i = 0 ; i < arr1.length ; i++){
    if(arr1[i] && arr2[j]){
       if(arr1[i] === arr2[j]){
          newArr.push(arr1[i]);
          j++;
       }else {
         if(temp.length === 0){
          temp = newArr;
          newArr = [];
        }else if(newArr.length > temp.length){
           temp = newArr;
           newArr =[];
        }
      }
    }else{
      return temp.length > newArr.length ? temp : newArr;
    }
  }
  return  temp.length > newArr.length ? temp : newArr;
}

console.log(intersactionOfArray([[2,1]],[[1,2]]))


// Count distinct elements
// From given array find how many distinct element we have

function countDistinct(arr){
  let set = new Set(arr)
  
  // for (const val of set) {
      // way to loop in set items
  // }
  return set.size; // WOWW SIZE AND THATS NOT ALSO FUNCTION
}

console.log(countDistinct([1,1,1,1,1,1,2,3,4,4,5,5,6]))


function sumOfUniqueElements(arr){
  let map = {};
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] in map){
      map[arr[i]]++;
    }else{
      map[arr[i]] = 1;
    }
  }
  console.log(map)
  let sum = 0;
  for (const key in map) {
    if(map[key] === 1){
      sum+=parseInt(key); // because keys are string value and also one new thing keys are constant so we can not change it or reassing it
    } 
  }
  return sum
}

// console.log(sumOfUniqueElements([1,2,3,2]))

// https://www.youtube.com/watch?v=FEQSlOQa5po
// FIRST UNDERSTAND WHAT IS INTERSACTION ITS JUST COMBINATION OF VALUES THAT BOTH ARRAY HAVE
// NO EXPLANTION TOOK MORE TIME THEN EXPECTED
// GOOD JOB FOR DOING BY YOUR SELF ONLY ISSUE WAS THAT FIRST I HAD NO IDEA WHAT THEY ARE
// ASKING FOR IN QUESTION AND WHAT IS INTERSATION
function intersactionOfArray(arr1,arr2){
let map = {};

for(let i = 0 ; i < arr1.length ; i++){
   if(arr1[i] in map){
     map[arr1[i]]++;
   }else{
    map[arr1[i]] = 1;
   }
}
let map2 = {}
for(let i = 0 ; i < arr2.length ; i++){
  if(arr2[i] in map2){
    map2[arr2[i]]++;
  }else{
    map2[arr2[i]] = 1;
  }
}
let arr = [];
 for(let key in map){
  if(key in map2){
    let min = Math.min(map[key],map2[key])
     for(let i = 0 ; i < min ; i++){ // This logic is incredible 
      arr.push(key);
     }
  }
 }
 return arr
}

console.log(intersactionOfArray([1,2,2,1],[2,2]))