/*
  Leetcode : 204 
  Given an integer n, return the number of prime numbers that are strictly less than n.

  Input: n = 10
  Output: 4

  Sieve of Eratosthenes : ALGORITHM TO SOLVE THIS PROBLEM 
*/

// UNDERSTAND 2 IS ALSO PRIME NUMBER
// THIS IS ON(2) SOLUTION NOT GONE WORK
function isPrime(num){
  for(let i = 2 ; i*i < num ; i++){
    if( num%i === 0) return false
  }
  return true;
 }
function countPrime(num){
  let count = 0;
  for(let i = 2 ; i < num ; i++){
    if(isPrime(i)){
      count++;
    }
  }
  return count
}

/* So apart from this n*2 solution if we want to optimize it the we have to use Sieve of Eratosthenes
 Algorithm to solve this problem.

 10 time understand why we have 2*i as starting  

 THIS IS THE SIMPEST ALGORITEM BUT ONLY IF YOU UNDERSTAND IT WELL

 Suppose you are at number 2 now all you have to do is for all the number which can 
 devide by 2 we need to make there value false example 4 6 8 10 12 14 16 ... till you input number

*/

function countPrimeOptized(num){
  let arr = new Array(num).fill(true);
  arr[0] = false;
  arr[1] = false;
  for(let i = 2 ; i*i <num ; i++){
    for(j = 2*i ; j<=num ; j+=i){ // j + i or j+=i me jamin asman ka fark he sir
        arr[j] = false; 
    }
  }
  return arr.filter((item) => item === true).length;
}
console.log(countPrimeOptized(994794));