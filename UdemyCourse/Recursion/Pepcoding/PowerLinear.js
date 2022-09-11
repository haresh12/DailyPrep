/*
  In this question we need find power of xN in simple if x = 2 and n = 5 then 
  2*2*2*2*2 => This will be the answer
*/

// NEVER EVER BE OVERSMART NO MATTER HOW CONFIDENT YOU ARE ALWAYS MEANS ALWAYS CHECK CODE
// ATLEAST ONCE BEFORE RUNNING
// HERE MADE MISTAKE IN BASE CONDITION LIKE IF(N === 0) BUT THING ABOUT IT WHY YOU NEED TO RUN
// TILL 0
function powerOfXn(x,n){
if(n == 1){
  return x;
}
return x * powerOfXn(x,n-1);
}

// console.log(powerOfXn(8,3));


/*
  Now above solution works great but there is one more way we can do this with logn 
  time complexity.
  See if you want to find xN => x = 2  n = 4 => 2 * 2 * 2 * 2 then you can multiple each
  single time or you can also say that xN = 2 4 ==== (x n/2) * (x)(n/2) this is simple maths
  if you you want to multiple 20 times then find the answer till 10 and multiple it with 
  same output you got.

  for odd number you need to calcuate one extra time
*/

// EVERYTHING HERE IS EASY ALL WILL MAKE SENSE JUST THINK IN YOUR MIDE ABOUR RECURSION
// CALL WHEN TO DO WHAT
function powerOfXnLogn(x,n){
if(Math.floor(n) === 0){
  return 1;
}
 let output = powerOfXnLogn(x,Math.floor(n/2)) * powerOfXnLogn(x,Math.floor(n/2))
 return n%2 === 0 ?  output : output * Math.floor(x)
}


console.log(powerOfXnLogn(2,3))
