/** 
 *  BIG NOTE RECURSION WITHOUT DP IS IMPOSSIBLE BECAUSE MOST OF PROBLEM OF RECURSION DOES NOT WORK
 *  FOR LARGE OUTPUT
 */

/*
  Recursion is simple word when function calls itself. It is very usefull when we have repetive task
  to do and one more thing about recursion is hard to image whats going go happen next because see
  one function calls it self again and again then at the end we don't have much idea which function
  currently we have in stack.

  WHICH FUNCTION CURRENTLY WE HAVE IN STACK THIS IS THE BIGGEST ISSUE I FOUND PREVIOUSLY WHEN I STARTED
  WITH RECURSION. NO JOB INTERVIEW ENDS WITHOUT THIS TOPIC

  Also one import thing when you work with recursion most of time if you need to have condition 
  which can tell function to stop calling it self and this is also importent because if in any case
  your condition is wrong then it will give you stack overflow error.

  The condtion that let function know when to stop is know as base case in recursion.

  Apart from base case there in one more intersting thing about recursion and this is also where we 
  have high chances that we make mistake and its return value from function lets learn it by example.

  let counter = 0;
  function superHero(){
   if(counter > 3){
    return 'Super hero';
   }
   counter++;
   superHero();
  }

  Now if look into above function then we may thing that function is going to execute 3 times and 
  then it is going to return Super hero and this is where we are making big mistake lets see 
  with example of callstack.

  superHero() 4 => 'Super hero';  // i am going to return super hero but nobody storing me my result
  superHero() 3 => // i won't store any result lets just get poped off return undefiend
  superHero() 2 => // i won't store any result lets just get poped off return undefiend
  superHero() 1 => // i won't store any result lets just get poped off return undefiend
  superHero() 0 => // i won't store any result lets just get poped off return undefiend

  and this is how you will end up with undefined value because we need stored the result when 
  value got returned from base case.

  solution : 

  let counter = 0;
  function superHero(){
   if(counter > 3){
    return 'Super hero';
   }
   counter++;
   let result = superHero(); // store result and give that to next call stack function easy pissy
   return resulu
  }

  And one last thing what happend if you first call the function and then increse the counter in that
  case again it will be in endless loop and we are never going to out of that loop. SO MAKE SURE 
  YOU DON'T WRITE THIS KIND OF CODE ANFTER FUNCTION CALL IN MOST CASES I DON'T THING WE SHOULD 
  WRITE ANY CODE AFTER FUNCTION CALL UNTIL WE NEED TO DO SOME OPERATION WITH RESULT OF FUNCTION.

  THERE IS ONE THING THE WE NEED TO ALWAYS REMEBER THAT ANYTHING THAT CAN BE DONE WITH RECURSION
  CAN ALSO DONE WITH ITERETIVE SOLUTION. 

  // https://stackoverflow.com/questions/310974/what-is-tail-call-optimization

  // Recursion to call without incresing size of stack REALLY ? read more for sure

  //https://stackoverflow.com/questions/105838/real-world-examples-of-recursion GOOD READ
*/