/*
   Given the n number print in decreasing and incresing order 
   Ex : for n = 5 => 5 , 4 , 3, 2, 1  
                     1 ,2 ,3 ,4, 5
*/


function printDecreasingIncreasing(n){
 if(n === 0){
  return;
 }
 console.log(n); // As soon as you come in function print the number
 printDecreasingIncreasing(n-1); // As soon as you print the number call the function again for next number
 console.log(n); // Now this will be called when function are getting removed from stack
 // so given the example we called 5 function like => f(5) , f(4) f(3) f(2) f(1) => so as
 // soon as we reached to base condition one by one function will be removed from stack
 // and remember in stack LIFO so f(1) will be removed first then f(2) f(3) f(4) f(5)
 // And this way first 5 4 3 2 1 will be print then 1 2 3 4 5
}

printDecreasingIncreasing(5)

