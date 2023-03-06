/*
                          The Scope Chain, 🔥Scope & Lexical Environment

In this blog, we'll cover three key topics: scope, lexical environments, and scope chains. Rather than focusing on definitions, we'll explore each topic through examples.
Scope refers to where you can access specific variables or functions in your program. Some variables may be accessible globally, while others are only accessible within specific 
functions. Let's take a look at an example:   

function a(){
  b();
  function b(){
    c();
    function c(){
      var y = 20;
      console.log("VALUE OF X IS : ",x)
      console.log("VALUE OF Y IS : ",y)
    }
  }
}
a();
var x = 10;


In this example, we have a function a() that is invoked in the global environment, and a variable x that is also declared globally.
We call function b() from within a(), then call the function c() from within b(). 
Finally, we initialize a variable y inside c(). If we focus only on the scope, we can determine the following:

The scope of the function a() and variable x is global since they are declared globally.

The scope of the function b() is within a(), since that is where b() is defined.

The scope of the function c() is within b(), since that is where c() is defined.

The scope of the variable y is within c(), since that is where y is declared.

Now let's examine the output of the program:


VALUE OF X IS : 10  // HOW WE GOT THIS 
VALUE OF Y IS : 20


From this output, we can see that we were able to access variable y because it was declared inside c(). But what about variable x? 
It wasn't declared inside c(), so how were we able to access it? The answer lies in the concept of lexical environments.

 function a(){
  b(); // Line 3
  function b(){
    c(); // Line 4
    function c(){
      var y = 20; // Line 5
      console.log("VALUE OF X IS : ",x); // Line 6
      console.log("VALUE OF Y IS : ",y); // Line 7
    }
  }
}
a(); // Line 1 
var x = 10; // Line 2

So as soon as we run the above program the global execution context is going to be created and inside that, we gone have variable x and function a().
On line 1, we call function a(), which creates a new execution context for a(). Inside a(), we invoke function b(), which in turn creates a new execution context for b().
 Within b(), we call function c(). In c(), we declare a new variable y with a value of 20. In line 6, we print the value of x, and in line 7, we print the value of y.

At line number 6 of the code, function c() looks for variable x within its own lexical environment but fails to find it. So it asks its parent function b() if it has the 
variable x in its local memory. Function b() also doesn't find the variable x in its own lexical environment, so it asks its parent function a() if it has the variable x in its local memory.
Function a() also doesn't have the variable x in its lexical environment, but it has a reference to the global environment. So, it asks the global environment 
if it has the variable x in its memory. Finally, the global environment has the variable x with a value of 10 in its memory.

This is the beauty of the lexical environment as it allows functions to access variables outside of their lexical environment. The function doesn't stop at its own lexical environment, but rather it looks up the scope chain until it finds the variable or reaches the global environment. Once the variable is found, the function can use it.

In summary, the lexical environment is a fundamental concept in JavaScript that allows functions to access variables outside of their scope by traversing the scope chain until it finds the variable or reaches the global environment.

The entire point of this explanation is to understand that when a function does not find a variable in its local memory, it will ask its parent function for it. This happens because whenever we invoke a function, not only an execution context is created but also a lexical environment.

When we call a function like c(), a new execution context is created with its lexical environment. The lexical environment includes references to variables and functions in its parent environment, which is the environment where the function was defined. In this case, c() was defined inside b(), so its lexical environment has a reference to b()'s environment. This allows c() to access variables and functions defined in b(). This chain of lexical environments that reference each other is what allows functions to access variables and functions in their parent environments.

Since the global environment is the top-level environment in the scope chain, it does not have a parent environment to reference. Therefore, if a variable or function is not found in the global environment or any of its parent environments, it is considered undefined and an error will be thrown if an attempt is made to access it.

If a variable is not defined in the global environment or any of its parent environments, an attempt to access it will result in an error that the variable is undefined. This will terminate the program if the error is not caught and handled properly.

Understanding the concept of lexical environment makes it easier to understand the concept of the scope chain. The scope chain is simply the chain of parent environments that a function can access. Each environment in the chain has a reference to its parent environment, and this allows functions to access variables and functions defined in their parent environments.

The scope chain is the chain of lexical environments that a function can access. For example, when function c() is called, it has access to its lexical environment, which includes references to variables and functions in its parent environment, which is the lexical environment of b(). b() in turn has access to the lexical environment of its parent, which is the environment of a(), and so on. The scope chain ends with the global environment, which has no parent environment to reference. So the entire chain of lexical environments, starting from the local environment of the current function and going up through its parent environments, all the way to the global environment, is known as the scope chain.

That's all about Scope Chain, 🔥Scope & Lexical Environment in javascript. And thanks to Akshay Saini for creating an incredible Namaste Javascript playlist. This blog is just whatever learning I had from there
*/
