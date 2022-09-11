  /*
   So basically any programing problem can be solved with two ways iterative and recursive
   now most of the problem we were solving till now is iterative way and everything was 
   going incredible then why do we even something like recursion and what it is ?
   
   So in simple term recursion means function calling it self until we reach to desire output.
   The importent thing need to learn about recursion is visulization of call stack like 
   which function currently has command how many other function are waiting for this function
   to complete the task so the can be also free. ALSO THIS THINGS MUST BE VISULIZED AND THIS
   IS THE ONLY THING I WAS NOT DOING TILL NOW.

   SEE THIS IS NOT FIRST TIME I AM DOING RECURSION BUT EVERY TIME I FAILD WITH THIS TOPIC
   AND ONLY REASON THAT NOT VISULIZING THE FLOW OF RECURSION AND JUST WORIED ABOUT COMPLITING
   THE TASK.

   So this time we need to make sure thing.
   1. For each example of recursion it must be done on paper first and then on editor.
   2. While we are writing the code visulize the things in mind like call stack when
   and what function will currently excute. BECAUSE IT MATTERS.

   NOW THEN TO USE RECURSION :
   1. When you have bigger problem and it can be devided into smaller problem and come
      to the same output
    
   2. Also need to notice that in recursion function calling it self so that means each
      time new function getting into call stack and taking some space into memory.
      AND THATS WHY ALL THE RECURSIVE CODE TAKE UPTO O(N) SPACE INTO MEMORY AND WE WILL
      LEARN MORE ABOUT TIME AND SPACE FOR RECURSION SHORTLY. BUT FOR NOW UNDERSTAND SPACE
      COMPLEXITY FOR RECURSIVE CODE IS O(N)
      
  Three things that every recursive function has.
  1. Same body of the function with same parameter but different value.
  2. Base case yes if you forget this you will be in the hell.
  3. call of that function in it self.
  
  // Above three point are confusing lets see short example

  function print(n){
   if(n > 5){
    return;    // see this is base case  from where funtion will be returned to place from where it called
   } 
   console.log("print",n) // Some code execution that you need to do this can be 1 line of code or 100 upto us what problem we are solving
   print(n+1) // And last calling it self again with different parameter value
  }

  MOST THE TIME WHEN WE WRITE RECURSIVE CODE EITHER WE FORGET ABOVE BASE CASE OR WE DON'T
  PUT RIGHT BASE CASE IN ANY CASE THE FUNCTION WILL CALL ITSELF ENDLESS AND AT LAST ERROR
  OF STACKOVERFLOW WILL BE THROUGH ABOUT BECAUSE WE USED ALL THE MEMORY OF STACK AND FUNCTION
  NEVER STOP CALLING IT SELF

  Also all the function calling itself and creating chain of function and then after 
  reaching at base case returing back to place from where it called is know as Recursive
  Tree. (JUST THEORY)

  THERE ARE QUESTION IN RECURSION WHERE WITH EACH RECURTION CALL YOU ARE BUILDING ANSWER AND
  THERE ARE QUESTION IN RECURSION WHERE YOU REACH TO THE END AND FROM THERE YOU BUILD THE
  
  IN RECURSION ALWAYS DRAW THE TREE FOR SMALLER INPUT VALUE 
  DRAW THE CALLSTACK 
  UNDERSTAND THE FLOW OF LEFT AND RIGHT TREE LIKE WHICH ONE IS GOING TO CALLED FIRST HOW THE FLOW WILL BE
  (This point only if you have multiple function call inside function)
  THESE THREE POINT MUST NEED TO DONE FOR ALL QUESION OF RECURSION


  DO NOT OVERTHING ABOUT RECURSION PROBLEM

  NEVER USE N-- IN RECURSION CALL BECAUSE IT WILL PASS THE SAME VALUE FIRST AND THEN 
  SUBTRACT THE NUMBER EITHER USE N-1 OR --N BOTH WILL WORK FINE
  */

