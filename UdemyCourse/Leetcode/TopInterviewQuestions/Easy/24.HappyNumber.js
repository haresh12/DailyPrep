/*
 Leetcode : 202. Happy Number

 Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Input: n = 2
Output: false

*/

/*
   Here its easy to handle scenario when number is happy but thing about the scenario where 
   number in not happy in that evantually that number will get repeated again and again and
   thats real hard intuation to get but good question on understand here why we are using map
   here.
*/
let map = {}
function isHappyNumber(number){
  if(map[number]){
    return false;
  }
  map[number] = true;
  if(number === 1){
    return true;
  }
  let newNember = 0;
  while(number > 0){
    newNember = newNember + (Math.floor(number%10)*Math.floor(number%10));
    number = Math.floor(number/10);
  }
  return isHappyNumber(newNember);
}
console.log(isHappyNumber(19));

// UNDERSTAND 2 IS ALSO PRIME NUMBER
// why root of n tak chal jayega because first half ke baad sirf pair opposite ho jati hai like first
// 2*3 he to fir 3*2 hoga 
function isPrime(num){ // we don't need to loop till n root of n tak chal jayega
 for(let i = 2 ; i < num ; i++){
   if( num%i === 0) return false
 }
 return true;
}

console.log(isPrime(400));

