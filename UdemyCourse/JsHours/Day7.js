/*
                                       BLOCK SCOPE & Shadowing in JS 🔥

In this blog, we are going to learn about BLOCK SCOPE and SHADOWING
in javascript but before even going into this topic let's first understand
what is BLOCK in javascript?

BLOCK
In javascript, blocks are defined by these { } curly braces and it is used
to combine multiple javascript statements in a single group now here
the question comes like why do we need to group javascript statements?
And the answer is we need to group these statements so that we can use them in a place where javascript expects one statement. 
Let's understand it by example.    

index.js
// EXAMPLE ONE
if(true){
 console.log('FIRST STATEMENT');
 console.log('SECOND STATEMENT');
 console.log('THIRD STATEMENT');
}
// EXAMPLE TWO 
if(true) console.log('THIS IS FINE ALSO');

// EXAMPLE THREE DON'T DO THIS MISTAKE
 if(true)
  console.log("I AM PART OF IF CONDITION");
  console.log("SO DO I?");


 Now you see we have the first example where we have three different statements and now in the case of javascript it only expects one statement after if and that's
 the reason we have to group these three statements is so that javascript can take it as a single statement.

In the second example, you see we have one statement and javascript also expects
one statement so that's the reason we are not using a block here we need to understand that even if we use a block in the second example then also it will work fine but we often don't use a block if we have a single statement with if() conditions.

Now in the third example, we have three statements but we are not using a block in that case we won't get any error but javascript will consider only the first statement as part of the if condition and the second statement will be printed on the matter of whether your condition is true or false. Also, blocks are known as compound statements. At this time we have a good idea about blocks so let's now understand what is block scope.

BLOCK SCOPE

In simple words block scope means all variables and blocks we can use inside blocks. Let's understand it by example.



index.js

{
  var a = 10;  // line 1 
  let b = 20;  // line 2
  const c = 40; // line 3

  console.log(a);  // line 4
  console.log(b);  // line 5
  console.log(c);  // line 6
}

console.log(a);  // line 7
console.log(b);  // line 8
console.log(c);  // line 9


This is the best example to understand how different types of variables work with
block and will also understand why let and const are block scoped.

So in the above example till line number 6, no magical things are happening it will run as expected and it will output 10 for variable a 20 for variable b and 40 for variable c.
but as soon as the program reaches line number 7 then it sees that it needs to print variable a and it finds that variable to global space and gets the value 10. So understand here that in the case of var it doesn't matter if it is in block or in global because memory always gets stored in the global memory scope.

Now when the code reaches line 8 it sees that it needs to print variable b and but variable b is inside the block and we can not access it outer side of the program this is where javascript will throw the Runtime error and the same thing will happen with const variable you won't able to access it outside of the block.

To understand the last point in a better way need to understand only one thing like
what happens with variables when we run the program how and where they get stored as soon as we understand that internal working 
stuff then there are chances that we never forget this concept. So let's understand it by a simple example.


var x = 10; // line 1
let y = 20; // line 2
const z = 30; // line 3

{
   var x = 100; // line 4
   let y = 200; // line 5
   const z = 300; // line 6
}


Now in the above example, we have a total of six variables three in global space and three inside blocks. And in the last blog, we learned that let and const never get stored in global memory space javascript has a special memory for them which is known as script and inside all the variables which are assigned with let and const will be stored. But here we need to understand one thing when we say all the variables we mean all the variables that are assigned in global space, not inside the block.

For all the variables (let and const) that are inside the block javascript has one more type of memory space which is Block.

So basically we have three types of memory where javascript stores the variables.

1. Global: Where all var type of variables gets stored no matter inside a block or outside block.

2. Script: Where all let and const type of variables that we declared in global space will be stored.

3. Block: Where all let and const type of variables that we declared inside the block will be stored. One thing to note here is that for each different block, javascript will create new block memory and will store variables of that specific block.

For the above example, this is how the memory block will look.


global :{
  x : 100; //WHY NOT 10 BROTHER ANS IS BECAUSE OF SHADOWING WILL LEARN
},
script :{
  y : 20, // i will be there until eniter program done.
  z : 30
},
block :{ 
  y : 200,  // we are different even we have same name as some global
            // variables but we don't care about then we have own
            // memory space to live and we will die once this blocks
            // done with entire execution part so be smart and don't
            // us use outside of the block.
  z : 300 
}


And yes that's all about block scope one only thing to learn about is shadowing and this one is much simpler if we understood the above two topics.

You see the last example we had two variables with var one is in global space with
value 10 and another one is in block space with value 100 but in our memory diagram
we can see only one and this is also with a value of 100 so what is javascript doing here and why do we see the value 100 but not 10 the single-word answer is SHADOWING here in case of var types of variables when javascript executes first
line of code it put a: 10 into global memory space and as soon as it reaches line number 4 it sees the variable declaration with the same name that it already has in global space and in that case current variable at line number 4 will shadow the global
variable and javascript will update the current value as the new value of x in global memory rather than creating a new variable with the same name. And that's what shadowing means in javascript. Also, one note that all the stuff that we learned in this blog will work the same for normal functions or arrow functions.

That's all about BLOCK SCOPE & Shadowing in JS. And thanks to Akshay Saini for creating an incredible Namaste Javascript playlist this blog is just whatever learning I had from there.
*/
