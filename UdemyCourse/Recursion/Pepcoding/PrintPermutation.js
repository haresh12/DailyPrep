/*

 In permutation only place of character get replaced but all must have to paricipate. ALL READY DONE
 PERMUTATION AND WE KNOW THAT WHAT IT IS.

 Permutation of n number could be n!

*/

/*
  EVERY LOGIC IN THIS QUESTION IS SIMPLE TO UNDERSTAND BUT ONLY THING IS HOW TO GET REST OF STRING 
  SEE EXAMPLE :
  =>> SUPPOSE OUR STRING IS : ABCDE 
  ==> IF WE SELECT A => THEN REST OF STRING SHOULD BE BCDE 
  ===> IF WE SELECT B => THEN REST OF STRING SHOULD BE ACDE
  ===> IF WE SELECT C => THEN REST OF STRING SHOULD BE ABDE
  ===> IF WE SELECT D => THEN REST OF STRING SHOULD BE ABCE
  ===> IF WE SELECT E => THEN REST OF STRING SHOULD BE ABCD

  >> NOW BIG QUESTION WAS LIKE HOW TO GET STRING ACDE FROM ABCDE HOW TO GET ABCE FROM ABCDE SO JUST
     UNDERSTAND THIS PART EVERYTHING ELSE IS SIMPLE
*/
function printAllPermutation(str,ans){
  if(!str){ // WHY STR.LENGTH === 0  NOW WORKING WHY CALL GOES TO UNDEFINED VALUE UNDERSTOOD
           // BECAUSE SEE AT LINE NUMBER 32  WHEN WE HAVE ONLY ONE CHAR AT THAT TIME restOfString is giving undefind value not the ''
    console.log(ans);
    return;
  }
  for(let i = 0  ; i < str.length ; i++){
    let ch = str[i];
    let restOfString = str.substring(0,i)+str.substring(i+1)// means string that does not include current char
    printAllPermutation(restOfString,ans+ch);
  }
}

printAllPermutation(printAllPermutation('abc',''))