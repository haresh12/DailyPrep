

function fibonacci(n,fibf,fibs,val){
 if(n > val ){
  return fibs;
 }
 let ans = fibf + fibs;
return fibonacci(n+1,fibs,ans,val); // HERE I MISSED RETURN AND WAS JUST CALLING FUNCTION 
}

// INCREDIBLE MISTAKE THAT WE ALWAYS MEANS ALWAYS DO WHICH IS UNDERSTAING RETURN ON VERY WRONG WHY
// NOW WHEN VALUE OF N WAS 6 IT WAS HIT WITH BASE CASE AND RETURNED OUR DESIRE OUTPUT
// NOW IMPORTENT THING IS THAT THIS OUTPUT WILL BE RETURN TO FUNCTION 5 NOW SO TO GET
// OUTPUT TILL END OR TILL MAIN FUNCTION FUNCTION 5 NEED TO SEND THIS RETURN VALUE TO 
// 4 AND FUNCTION 4 NEED TO SEND THIS VALUE TO 3 AND 3 .... 2..... 1 AND THATS THE
// ONLY WHY OUTPUT WILL BE REACHED TO END.

// JUST FOR CLEARITY TO UNDERSTAND IMPORTANCE OF RETURN 

// function function5(){
//   console.log(function6()) // now here function 6 is returning 6 but function 5 not using it or returning it
//                            // so if you print function5 then it will be output undefiend because it not returning anything
// }
// function function6(){
//   return 6;
// }
// function function7(){            
//   return function6(); // Here function7 is using return value from function6 and thats why if you print 
//                       // function7 value then it will output 6 what returned from funtion6.                       
// }
// console.log(function5())
console.log(fibonacci(2,0,1,3)) // WHY FROM TWO BECAUSE WE KNOW ANSWER OF 0 AND 1


// AT LAST SEE THIS PROBLEM IS NOT THAT HARD BUT IMPORTENT THING IS THAT WE NEED TO LEARN IMORTENT 
// OF BASE CASE AND UNDERSTENDING THE IMPORTANCE OF WHAT VALUE IS RETURNED AND HOW OTHER FUNCTIONS ARE
// GOING TO USE IT.