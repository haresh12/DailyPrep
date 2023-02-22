/*
    Let's  learn hoisting 

    Hoisting is phenomena in javascript by which you can access variables and function before even initializing it. In simple term
    what it means like i have one variable initialized at line number 5 and we are trying to access at line number 1 and still program
    won't through any error.
    
    Let's understand it by example:

    getJobAt(){
        console.log('Google');
    }
    var a = 'Learn daily'

    console.log(a);
    getJobAt();

    Now in above example first we are declaring one function getJobAt() at list 1 then after we have initialize variable a and then simply we are 
    printing a and then invoking the function getJobAt(). So in this example nothing new is happening because we are initializing function and
    variables before even we use that. So program will give below output.
    
    Learn daily
    Google

    Now let's make some changes in above program to understand concept of hoisting.

    console.log(a); // Line 1
    getJobAt();  // Line 2

     getJobAt(){          // Line 3 Assume this entire function as line 3
        console.log('Google');
    }
    var a = 'Learn daily' // Line 4


    So now in above example we are using variable a at line number 1 and we are initializing at line number 4 and same with function getJobAt()
    we are using it line number 2 and initializing it at line number 3. So what will be the output of it and important thing is why.

    Output :
    undefined 
    Google

   If you guessed it above output then good but if not then lets understand together. 
   
   First lets understand for variable a so as we know as soon as you run your javascript program the execution context get created and it basically
   has two phases memory creation and code execution and before even single line of code executed in javascript memory is assigned to function
   and variables and in case of variables the default value undefined get assigned to them and yes that's why at the time of code execution 
   when first line of code get executed console.log(a) javascript  don't see any value assigned it yet in program and so it just print the default
   value undefined.(HOPE YOU REMEMBER THAT THIS UNDEFINED IS NOT COMING FROM AIR AT THE TIME OF MEMORY CREATION JAVASCRIPT ASSIGNED THAT VALUE
   UNDEFINED TO VARIABLE)

   No issue now we understood javascript is so smart and it can handle anything so why don't we do like console.log(z); and then see if it prints
   undefined or not. So answer here is no it won't print undefined rather it will give you below error.

   ReferenceError: "z" is not defined (NOW WHAT IS THIS NEW THING)

   Lets understand above error at the time of memory creation javascript assign memory to variables that are at-least declared in program no matter
   where but it should be declared in program but we never declared it so at the time of code execution when javascript see console.log(z) its
   like i really don't know what is this if i knew it then i would surely assigned it default value and thats where it decide to throw above
   error which that z is not defined in program anywhere.

   At this point we have have good understanding how hoisting is working for variables but what above function how we are getting the 
   answer for function and why we don't get undefined for function. So lets clear this doubts.

   In case of function also answers lies in memory creation face because in memory creation face when javascript see any function declaration
   it just copy that entire function and store it where in case of variables it was assigning default value undefined.

  // THIS IS HOW MEMORY CREATION FACE WILL LOOK
  x : undefined   (For variables)
  getJobAt : function getJobAt(){      
    console.log('Google');
 }

  And that's the reason when to try to run the function before or after declaration it don't matter because js stored entire function code 
  in memory at the time of memory creation. To get it more clear just print below line.

  console.log(getSomething); // line 1 (Understand that this is not function invocation we are just printing the function)
  function getSomething(){
    console.log('I have nothing')
  }
  console.log(getSomething); // line 3

  OutPut for line 1 and line 3 will be : 

  function getSomething(){
   console.log('I have nothing')
  }

  So till now we first covered for variables then for function but in case of function one important thing to learn here is WHAT IF DECLARE FUNCTION
  AS ARROW FUNCTION.

  Example of arrow function :

   getArrow(); // Line 1 invoking the arrow function
   var getArrow = () => {  // Line 2 declaring the arrow function
    console.log('i don't behave like normal function ):')
   }

   In above case program will throw the error called getArrow() is not an function. And thats because in case of arrow function at the time of 
   memory creation javascript does not copy entire function code and store in memory rather for arrow function it behaves like variables and 
   just assign the value undefined. 
  
  MEMORY CREATION FOR ARROW FUNCTION :
  {
    getArrow : undefined ; // real value will be assigned only at the time of code execution face 
  }
 
  At last one thing to remember here is that for variables and arrow function default value undefined will get set where in case
  of normal function entire function code will be stored. Also understand that entire game of hoisting is depend on memory creation
  face so if you understand that part you won't have issue with hoisting.

*/
