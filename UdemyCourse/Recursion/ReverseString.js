function reverseString(str){
 if(str === ""){
   return ""
 }
 else {
  let output =  reverseString(str.substr(1)) + str.charAt(0)
  console.log(output);
  return output;
 }
}

// This problem is very simple if we understand what str.substr() and what str.chartAt(0) these two
// methods do internally and how actually recursion is going to work here

/*First 
   str.substr(1) : this method simply return entire string from index 1 to end
   So for sring haresh => str.substr(1) => will return => aresh => and this will be passed in next
   function call in recursion.
   haresh => str.substr(1) => aresh => reverseStrin(aresh)
   aresh => str.substr(1) => resh => reverString(resh)
   resh => str.substr(1) => esh => reverseString(esh)
   esh => str.substr(1) => sh => reverseString(sh)
   sh => str.substr(1) => h => reverString(h);
   h => str.substr(1) => "" => reverString("") ;; base case so from here function will be poped

  Now function will be poped from last to first (LIFO) and we are adding str.charAt(0) every time
  UNDERSTAND THIS POINT MAN THIS STR.CHATAT(0) WON'T BE EVEN USED UNTIL BASE CASE HIT. AND IF
  YOU UNDERSTAND THIS LINE THEN ONLY YOU UNDERSTAND THIS PROBLEM.
  let output = prevOut + str.chatAt(0);
             = "H"    +  SH => str.charAt(0) => S
             = HS => new Out put
  let output = prevOut + str.chatAt(0);
             = HS + "ESH" +> str.charAt(0) => E
             =>> HSE 
    CONTINUES GOES ON AND THIS IS HOW WE ARE GETTING FINAL OUTPUT SO MAKE SURE STR.CHARAT() ONLY
    USED AFTER WE HIT BASE CASE                    
 
*/
console.log(reverseString("HARESH"))

