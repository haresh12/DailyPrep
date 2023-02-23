/*
    How functions work in JS and Variable Environment :


    In this blog we will learn how functions works what is variable environment and how call stack handles this function invocation.

    Here we won't have any theory concept so we will directly take one example and understand how this peace of code will be executed.

    Let's go through the example :
    
    index.js

    var x = 10;  // Line 1
    a();  // Line 2
    b();  // Line 3

    function a(){  
      var x = 10;   // Line 4 
      console.log(x);  // Line 5
    }

    function b(){
        var x = 100;  // Line 6
        console.log(x);  // Line 7
    }

    console.log(x); // Line 8 

  So as soon as we run javascript program the Global Execution context will be created and as we know execution context has basically two phases Memory creation face and
  Code execution has and javascript won't execute single line of code before assigning memory to all variables and function. But here we need too understand one more thing
  which is call stack. So as soon as the global execution context created it will be pushed into call stack.
  
Picture of call stack till this moment  
          
|           |
|           |
|           |
|           |
|           |
|___________|
|           |
|           |
|___________|
|           |
|   GEC     |     // Global execution context pushed into call stack
|___________|

 
Memory creation picture till this moment

{
    x : undefined,      // For variable default undefined value is assigned
    a : function a(){  // For functions entire function code is copied and store in memory
         var x = 10;    
        console.log(x); 
    },
    b:function b(){  // For functions entire function code is copied and store in memory
         var x = 10;    
        console.log(x);  
    }
}   


Now we are done with memory creation part and and you see where these all variables are actually seating in memory creation phase is know as variable environment.
And as soon as memory creation part done then js will start code execution and at line one it sees that we have assigned value 1 to variable a so it will replace
the default undefined value of that variable and will assign this new value one . So for variables its simple like just assign new value whatever you found at 
the time of code execution. Now execution will be move to line number 2 and this is where the interesting things happen.


So in example code at line number 2  we are invoking the function a() and as soon as this function get invoked the execution context will be created and 
again it will have memory creation phase and code execution phase but one thing to understand that this execution context is specific to the current function
and it has nothing to do with global execution context.

Memory creation phase for function a()
{
    x : undefined
}


You see we have variable x in global execution context but still above x has nothing to do with is because we created new variable x inside function and assigned
new value to so it will get totally new memory. Also we invoked the function a() so it will be pushed to stack also. So at this time picture of stack will be
like.

|           |
|           |
|           |
|           |
|           |
|___________|
|           |
|    a()    |    // Function a() got invoked and pushed into call stack
|___________|
|           |
|   GEC     |     // Global execution context pushed into call stack
|___________|


 Now inside function a() on line number 4 we are assigning the value 10 to variable x so it will remove the default undefined value and will assign value 10 
 to x. So now at line 5 we are printing the value of x here we can learn one incredible thing like which value of x should be printed we have value of x 1
 in global execution context and we have value of x 10 in local execution context and ans is it will print 10 because a() has variable x inside that then why
 would it look for that outside it. And here we are done with function a() we executed all the line now what. As soon as function done with its work it will
 be popped out from Call Stack . So picture of call stack at this moment will be as below.


|           |
|           |
|           |
|           |
|           |
|___________|
|           |
|           |      // Function a() hai nhi function a() tha
|___________|
|           |
|   GEC     |     // Global execution context pushed into call stack
|___________|


And now code will be moved to next line which is line number 3 where we are invoking function b() so again execution context of this function will be created
and it will be pushed to Call Stack. So picture of call stack at this moment will be as below.

|           |
|           |
|           |
|           |
|           |
|___________|
|           |
|     b()   |      // Function b() got invoked and pushed into call stack
|___________|
|           |
|   GEC     |     // Global execution context pushed into call stack
|___________|


For function b() same memory creation phase and code execution phase will happen and at the time of code execution we are assigning value 100 to x so and
in next line we are printing it so it will print 100 and now function has no more code to execute so it will be popped out from stack.So picture of call stack at this
 moment will be as below.


|           |
|           |
|           |
|           |
|           |
|___________|
|           |
|           |      // Function b() hai nhi function b() tha
|___________|
|           |
|   GEC     |     // Global execution context pushed into call stack
|___________|


At last line number 8 from global execution context will be executed and we are doing like console.log(x) and value of x in global execution context is 1
so it will print 1 and thats it now Global execution context is also done with its work it will be also popped out from Call Stack. So final picture
of call stack will be.

|           |
|           |
|           |
|           |
|           |
|___________|
|           |
|           |      
|___________|
|           |
|           |     // Call stack be like i have nothing to lose now.
|___________|


And yes that's how the execution of code happens in javascript we seen that how control of code went fro GEC to function a() and as soon as function a() was
done with its work control went back to GEC and again GEC invoked function b() so control went to function b() and once b() function was done then again
control went back to GEC and finally once GEC is done that it also popped out from stack and thats how js runs entire code.

That's all about Hoisting in Functions and Variable environment. And thanks to Akshay Saini for creating an 
incredible Namaste Javascript playlist this blog is just whatever learning I had from there.

*/
