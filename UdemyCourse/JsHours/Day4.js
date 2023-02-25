/*
   SHORTEST JS Program 🔥window & this keyword :

   In this program we are going to learn about window object in javascript and how window object and this keywords are
   connected.

   So to understand this we need to write the shortest program in javascript and need to see what javascript does 
   with this program.

   Let's write shortest program.
   
   index.js
   // no single line of code

   And yes here we have our shortest javascript program which is blank page now as soon as we run any javascript program the global
   execution context is created this is something that learned in our previous blog but when we run javascript program apart from 
   Global execution context javascript also creates window object and we can use this window object anywhere in program.

   Now this window object contains many functions and variables that we can use also some of the javascript use internally but we
   really don't need to worry about it. Now let's see example of window object.


   index.js

   var x = "DO BEST";
   var y = "DO BETTER"
   
   function doSomething(){
    var z = "Do something"
    }


   Now in above example we defined two variables x and y in and declared one function doSomething() these are in global environment. What
   do we mean by global environment so in simple word whatever we defined outside of the function is know as global environment and if
   variables and function which are declared inside another functions is called local environment.So in above example we can say x y and
   doSomething() are on global environment whereas z is in local environment as its declared inside the function.

   As soon as you run above javascript program window  object will store all the variables and function which are on global environment.
   Let's see how window object will look like at this moment.

   // WINDOW OBJECT
   {
      x : "DO BEST",
      y : "DO BETTER"
      doSomething : function doSomething(){
        .... entire code of this function ...
      }
      .....  (THIS doted line is for default stuff that window object contains)
   }

   And now we can access above variables in 3 different ways
     
   First way where you access variables and functions directly with its name and in this case javascript assume that you
   are trying to access something at global level and it attach window with that so internal its like console.log(window.x).

     console.log(x); // internally for js this code will window.x
     console.log(y); // internally for js this code will window.y
     doSomething()  // internally for js this code will window.doSomething()

  Second way where you manually write as below. Mostly we don't add window manually or atleast i never done.

     console.log(window.x);  // You are just saving js time :)
     console.log(window.y);  
     window.doSomething()  

  Now third way is like you can use this keyword also to access any variables and functions in global space and reason behind
  that is at global level window object is equal to this. Now this keyword it self is big topic of discussion and we will
  have another blog specific to this keyword but for now we need to understand only one thing that at global space window
  object and this keyword are same and that's the reason if you do console.log(window === this) it will return you true.
  
  console.log(this.x);
  console.log(this.y);
  console.log(this.doSomething());


  So points that we need to learn here is how javascript create that window object even if we have
  single line of code in file also how global variables and functions are getting attached to window object and at last
  how at global space window object is equal to the this keyword. Hope you have learned this three points.

  That's all about SHORTEST JS Program 🔥window & this keyword. And thanks to Akshay Saini for creating an
  incredible Namaste Javascript playlist this blog is just whatever learning I had from there.
  
*/
