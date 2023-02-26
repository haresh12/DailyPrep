/*
  Understanding the undefined vs not defined in JS 

  In this blog we are going to learn about what is undefined and not defined in javascript and how they are different from each other
  also we are going to understand type conversion.

  So in javascript all the variables are assigned with value undefined at the time of memory creation its like when you run any java
  script program the execution context get created and it basically has two part memory creation phase and code execution phase 
  and in memory creation phase javascript assign default value to variables which is undefined. Now after memory creation phase when
  javascript starts with code execution phase then it will see what value we assigned to those variables and replace with the default
  undefined value. Let's see example.


   index.js
   
   console.log("VALUE OF A",a); // LINE 1
   var a = 10;  // LINE 2
   console.log("VALUE OF A",a); // LINE 3

 So as soon as we run above program the same process will happen like execution context gets created and then in memory creation phase
 default value undefined will be assigned to variable. So output of the above program will be as below.


  VALUE OF A : undefined ; // This is because of line 1 because we are using variable a before assigning any value to it
  VALUE OF A : 10 ; // This is because we assigned value to variable a at line number 2 and then we are doing console.log(a).

Also here we need to understand on thing which is undefined is not like empty or in another word its not equal to empty its just
spacial placeholder value for variables until we assigned then any value in our program. Also to prove that lets two example.

 index.js

 var x;
 
 if(x === undefined){
   console.log('value of x is undefined') 
 }

 if(x === ''){
    console.log('x is empty')
 }

 Now in above program it will never go in second if condition where we are checking x is empty because default value of variable is undefined
 and that's why it will go in first if condition and program will output like : value of x is undefined. One last thing to understand
 above undefined is if possible then never assign value undefined to variable by your self even if we can because from javascript community
 perspective its not recommended.

 Now till this point we have good understanding of undefined now lets talk about not defined. When we try to use some variables in 
 javascript that we never defined in our program at that time javascript throws then error and says that variable is not defined.
 Lets take one example to understand not defined.

  index.js

  console.log(x); // LINE 1
  var x = 10; // LINE 2
  console.log(x); // LINE 3
  console.log(z);// LINE 4
  console.log('I WILL NEVER REACH HERE BECAUSE OF LINE NUMBER 4') // LINE 5

 Now as soon as run above program javascript will first print value undefined from line 1 as we have't assigned any value to x and then
 we are assigning value 10 to variable x at line 2 now because of that line 3 it will print 10 because now x has value 10. But as soon
 as we reach to line number 4 javascript tries to find z in it memory but it never finds because we never declared any variable with name
 z and this is when javascript thing that you are trying to use something that you don't even have in your program and it throws the error
 which is : "ReferenceError : z in not defined".

 Thats all about undefined and not defined now as we are talking about  variables so lets  learn about coercion because this is also
 important topic to understand.

 Javascript is loosing type language or we can also say weakly typed language. This means in javascript if initially you assigned string
 value to variable x then later in program you can assign any other type of values also like boolean , number or even object and array
 also and in most of other language it won't even allow you to compile the code where is javascript it handles lots of stuff in background
 for you and this type conversation process in javascript is also know as type coercion.

 There are two ways to perform type coercion in javascript.

 1. Implicit coercion : This where javascript automatically handles type conversation for you like you have taken one variable where you
    assigned value string but later in your program you want to assign it to number then you can directly assign number to that variable
    and javascript will handle everything else for you in background.(PROUD OF YOU JS)

 2.Explicit coercion: Explicit coercion: You can also explicitly convert data types using built-in functions such as Number(), String(), and Boolean(). 
   These functions take a value of one type and return a value of another type. This way javascript allow us to make type conversion by our self
   also. Let's see some of the example of Explicit coercion.
   
   index.js

   // Number to String
   let num = 10;
   let numToStr = String(num); // converted number to string now numToStr value is not 42 but its "42"

   // String to Number
   let str = "42";
   let strToNum = Number(stringNum); // converted string to number using Number() now value of strToNum not "42" but its 42

 That's all about undefined vs not-defined and coercion in javascript.And thanks to Akshay Saini for creating an incredible Namaste Javascript playlist 
 this blog is just whatever learning I had from there.  
*/
