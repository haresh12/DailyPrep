/*
    Plan of this js hours folder is to learn js fundamental from date 21 FEB TILL 1 APRIL 

    >> Need to complete two course 

    1. Namaste JS playlist : https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP
     Total length of playlist : 7 hours, 34 minutes, 23 seconds

    2. https://www.youtube.com/watch?v=78Homn79Qsk&t=4s  (Namaste JS part 2) 
    2.https://www.udemy.com/course/advanced-javascript-concepts/ (25.5 HOURS) 

    THIS BOTH MUST BE DONE BEFORE 2ND APRIL

    DAILY NOTE : NEED TO KEEP IN MIND THAT WE DON'T NEED TO JUST COMPLETE THE COURSE BUT IMPORTANT POINT
    HERE IS HOW MUCH WE GAINED FROM ABOVE RESOURCE AND HOW ARE USING IN OUR DAILY LIFE.
*/

/*
   Video Number : 1

   Points : 

   Everything in javascript happens in execution context you can thing it as black box which handles a lot of
   different things in background for us.

   Basically execution context has two part one is memory and another one in code.
   Memory (Also know as variable environment): in memory js store all the variables functions
   Code (Also know as thread of execution) : Where js runs code line by line

   JAVA SCRIPT IS SYNCHRONOUS SINGLE THREADED LANGUAGE (VMI)

   What do you mean by synchronous ?
   Short ans :  JS does not wait for anyone it just runs code line by line from top to bottom.

   What do you mean by single threaded ?
   Short Ans : it can execute one task at a time.
*/

/*
  Video number 2 :

  How JavaScript Code is executed? ❤️& Call Stack 

  Let us understand by code how code get executed by example.

  var n =2;

  function square(num){
    let ans = num*num;
    return ans;
  }

  var square2 = square(n);
  var square4 = square(4);

  Explanation : 

  So as soon as js program get executed the new execution context get created and and again it will have same two
  part VARIABLE ENVIRONMENT(Memory creation face) and THREAD OF EXECUTION (code execution face)

  Now first thing js will do is assign memory to variables and functions and this all will be happen in memory creation
  part.
  
  In above program first memory will be assigned to var n and then memory will be assigned to function

  IN CASE OF VARIABLES WHEN PROGRAM IS ON MEMORY CREATION FACE THEN IT WILL BE ASSIGNED WITH VALUE UNDEFINED
  IN CASE OF FUNCTION WHEN PROGRAM IS ON MEMORY CREATION FACE THEN IT STORE ENTIRE FUNCTION CODE (YES YOU HEARD IT RIGHT)

  // THIS IS HOW MEMORY CREATION FACE WILL LOOK
  n : undefined
  square : function square(num){
    let ans = num*num;
    return ans;
  }

  Now once memory creation part in done then js starts with code executions part where it will execute code line by line.
  
  So first it will see the first line of code where we have value of n = 2 then it will assign that value in this face
  i thing we don't need to be confuse here because its pretty simple in first face it gives memory to variable n 
  and assigned it with placeholder undefined and then at the time of code execution it assign actual value of 
  variable.

  Now in case of function we need to understand few things like function declaration and function invocation

  From line 48 to 51 this is called function declaration means we just declared one function thats it where
  at line 53 and 54 we are invoking the function or in simplest term we are calling the function.

  Why function invocation and declaration is matter. (JUST TO UNDERSTAND CODE EXECUTION PART)
  
  So we learned how variable get actual value at the time of code execution now in case of function look at line number 
  48 to 50 this line will be ignored because we have just declare the function. So nothing interesting happen when
  we have function declaration but next at line number  53 we are doing function invocation and now interesting 
  things will happen. SO LETS LEARN THAT

  Now as soon as function invocation happens a new EXECUTION CONTEXT get created same as above and again it
  will have to part memory creation and code execution same as above SO YOU HEARD IT RIGHT IN JAVA SCRIPT
  FOR EACH FUNCTION NEW EXECUTION CONTEXT GET CREATED.

  UNDERSTAND WHEN JS PROGRAM GET EXECUTED THAT TIME WHATEVER EXECUTION CONTEXT IS CREATED IT WILL BE KNOW 
  GLOBAL EXECUTION CONTEXT AND INSIDE AND FOR EACH FUNCTION INVOCATION EXECUTION CONTEXT IS CREATED. HERE
  ONLY THING WE NEED TO UNDERSTAND IS WE HAVE SOMETHING CALL GLOBAL EXECUTION CONTEXT AND WE HAVE SOMETHING
  CALL EXECUTION CONTEXT AND WHAT IS DIFFERENCE BETWEEN THEN HOPE TILL THIS POINT WE UNDERSTAND THAT.
  
  Lets now understand invocation of function :

  function square(num){
    let ans = num*num;
    return ans;
  }

  As soon as function square get invoked execution context for function square will be created and
  first memory creation part will be happen.

  Now important part to understand here is we have parameter in function which is num so not only ans
  but memory will be assigned to num also.

  Memory creation :
  {
    num : undefined,
    ans: undefined
  }

  Code execution :

   >> At the time of function invocation we are passing value 2 in function argument and that will be passed to
      function parameter. so value of num will be 2 now and in next line we have num*num which is 2*2  = 4 which
      will be assigned to ans variable.

      {
        num : 2
        ans : 4
      }

      Now at last we have return which tells us to end the function and we are returning ans so value so that value
      will be received at the line number 53 and this way previously in our global execution context we had value
      of undefined but now it will be 4.

      Global Execution Context at this time :
      {
        n : 2,
        square2 : 4,
        square4 : undefined
      }

     Now the same process will be happen for var square4 = square(4); it won't have single difference means same
     way execution context will be created memory creation face will happen then code execution face will happens
     all these things that we already have idea understand one thing here whether you pass value 4 directly as
     argument or you pass value from some variable it won't make any difference in code execution part. 
     
     Example : 
     var a = 1000;
     let sqrt1 =  getSqrt(a); 
     let sqrt2 =  getSqrt(1000);

     this both invocation are not going to make any difference so don't get confused here.

     Also as soon as function returns the value or done with its part then that execution context will be deleted.
     And js handles all this things with use of stack.

     Now what is stack here again ?

     So simply whenever any execution context get created it will push to stack and once it will be done executing
     entire function code then will be removed from the stack and control goes back again to that line from where
     we executed that function. At last once we are done with our entire program execution then Global Execution
     context will be removed from stack also.

     One last thing to understand here is call stack is also known as below few names :

     Execution context stack
     Program stack
     Control stack
     Runtime stack 
     Machine stack

    So don't get confused if you here any of then its still call stack


  That's all about execution context hope you have learned something from this.
*/
