/*
So in this section we are going to focus on things that we need to take care at the time of interview.
Always go through all the points from points need to remember.pdf this 15 points are incredible.
MUST WATCH THIS VIDEO : https://www.youtube.com/watch?v=XKu_SEDAykw&t=2s (INCREDIBLE)

Now when we talk about interview the interviewer is looking for below points.
1. Analytics skills : (Your thought process how you present solution from  not knowing answer to different solution)
2. Coding skills
3. Technical skills : (Your fundamental did we just memorize the solution or we know the tradeoffs)
4. Communication skills : How well you communicate with interviewer and present your solution
*/

// Lets do one example by our self . (We will try to follow as many as points we can do)

/*
 Given 2 arrays create an function that lets user know that two array contains any common items 
 For example.
 const array1 = ['a','b','c','x'];
 const array2 = ['d','t','y','z']
 this should return false
 const array1 = ['a','b','c','x'];
 const array2 = ['d','t','y','a'];
 this should return true
*/

// does this inputs will only have string values or any numbers or objects.

// First and fast solution comes in mind is like have nested loop and compare each value of uper
// loop with lower loop and break the loop when you find the match.
// THIS SOLUTION COST BIG O O(N*M) => QUADRATIC TIME as we have nested loop.
// here we are coding the solution but in interview we don't need to only need to share your 
// thoughts that this is something you have in your mind

const array1 = ['a','b','c','x'];
const array2 = ['d','t','y','a'];

function checkCommenItem(){
 if(array1.length === 0 || array2.length === 0) return false;
 for(let i=0 ; i < array1.length ; i++){
   for(let j= 0 ; j < array2.length ; j++){
      if(array1[i] === array2[j]) return true;
   }
 }
 return false;
}

// console.log(checkCommenItem())

// Another good solution we can do it by using hasmap where we will have to take extra space but
// in that time complexity will be O(n) => Linear Time

// AND REMEBER THIS THING IN MOST OF SOLUTION WE WILL HAVE TRADOFF BETWEEN TIME AND SPACE COMPLEXITY
// AND HASHMAP WILL HELP IN MOST CASES WHERE WE WILL HAVE TO USE EXTRA SPACE TO SAVE TIME.

// In this solution we will be using hashmap where for first array we will store it and will looping
// through second array we will check if second array value is exist in that map object. ALL THIS
// BE USEFUL BECAUSE LOOK UP IN HASHMAP ARE O(1).


function checkCommenItemsWithHashMap(){
  if(array1.length === 0 || array2.length === 0) return false
  const map = {}; // blank object here we will add key-values
  // store value in hasmap
   for(let i=0 ; i < array1.length ; i++){
     if(!map[array1[i]])
       map[array1[i]] = true;  
   }
  for(let j = 0 ; j < array2.length ; j++){
      if(map[array2[j]]){  // we have given value true to each key so if key exist then this condition will be true
        return true;
      }
  } 
  return false;
}

// console.log(checkCommenItemsWithHashMap())

// Now apart from this two solution we have one more language spefic solution where we can use internal
// methods of that spefic language and do things accordigly.

function checkCommenItemWithArrayMethods(){
  return array1.some(item => array2.includes(item)); // More readable solution
}

console.log(checkCommenItemWithArrayMethods())

// do the same exercise which asked in https://www.youtube.com/watch?v=XKu_SEDAykw&t=2s  this video
