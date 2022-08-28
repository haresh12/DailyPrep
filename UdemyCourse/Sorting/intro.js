// https://www.youtube.com/watch?v=Xw2D9aJRBY4&list=PLcX11VWS1PdA4dSPip8-1JfKxFa32X53y 
// MAKE SURE NEVER FORGET THIS LINK
/*
 The weird thing about sort method and also the best thing i learned from this course.
 So here is the thing :
 let letters = ['f','a','d','c','b'];
 now what would be the output of above program if we sort with inbuilt sort method that we have with
 array.

 letters.sort() // output will be = [a,b,c,d,f]; // AND IT WORKED PERFECTLY FINE WITH STRING GREAT MEN

 Now expection would be if it is working fine with string then it should work fine with number also right.

 so lets see who it goes with number :
 let numbers = [2,8,3,64,56];
  numbers.sort() ; // And output will be [2,3,56,64,8]; // YES THIS IS THE WEIRD PART

 When you sort number you have expection that number will be sorted but in javascript this sort
 method works differently and what it do is convert each interger to string and then take its
 first character and then get its unicode and compare that value and thats why from 56 it takes
 five and its code value is less then 8 code value then it prints 56 before 8.

 Now one more thing to learn here is the we can pass function as parameter and in that function
 we can define how we want to sort the values and what we want to compare but default sort works
 as explained above.

 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
