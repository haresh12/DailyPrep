/*
  Now any subset problem is most asked problem in string and we need to understand the basic.

  let str = 'abc' try to find out all possible subset for given string
   ans = [a, b , c, ab , ac , bc, abc] => ONE OF THE MOST IMPORTENT THING TO LEARN HERE IS THE
   ORDER LIKE YOU MAKE THING THAT WHY CAN'T WE CREATE SUBSET LIKE CA , CB , BA AND ALL AND 
   ASNWER IS SIMPLE IF YOU HAVE SUBSET AB THEN REALLY BA CAN NOT BA CAN NOT BE ADDED AND REASON
   IS SEQUANCE IS ACUALLY STRING IF A IS BEFORE B THEN IN ALL SUBSET IS WILL BE BEFORE B.
*/

/*
  So basically in subset problem at each step either remove the elements or you are adding
  the elements and thats the approch know as subset pattern.

  To be subset solution is not something that will direcly comes in mind so if we talk about
  recursive solution for this problem that at each step what we are going to do is we 
  are going to take current char from string and we have only two option either add it 
  or don't add it so if we add it then we will have ans like current char + rest of the string
  and if we don't add it then answer will be rest of the string.
*/
/*
 HARESH INCREDIBLE JOB HERE ATLEAST YOU KNOW WHAT TO GET ANSWER OR WE CAN SAY HOW TO WRITE
 RECURSIVE CODE
 YOU CAN ALSO ADD THIRD PARAMETER ARR AND RETURN ARR THEN
*/
/*
because if we have some inbuild method then user is not goint to pass second parameter like ""
value
*/
// SUB SEQUENCE AND SUB SET BOTH ARE SAME THINK LIKE FOR STRING WE USE WORD  SUB SEQUENCE  AND FOR
// ARRAY WE USE LIKE SUBSET
function getSuBSequence(str){
   return sunSequence(str,"",[]);
}
// ALWAYS MEANS ALWAYS MEANS AGAIN ALWAYS UNDERSTAND THAT IF RECUSIVE CALL HAS RETURN TYPE
// THEN ALL THE TIME WE ARE CALLING THE METHOD INSIDE METHOD WILL HAVE SAME RETURN TYPE
function sunSequence(str,current,arr){ // IF THIS HAS RETURN TYPE ARR
 if(str.length === 0){
  arr.push(current)
  return arr;
 }
 let ch = str.charAt(0);
 sunSequence(str.substring(1),current+ch,arr); // THEN THIS SHOULD ALSO HAVE RETURN TYPE ARR
 sunSequence(str.substring(1),current,arr)  // THEN THIS SHOULD ALSO HAVE RETURN TYPE ARR
return arr; // BEACAUSE THIS THE ARRAY WHERE WE ARE ADDING CURRENT EACH TIME 
// HERE REFERANCE OF ARRAY AT EACH CALL THIS IS BASIC BUT IMPORTANT THING
}
// console.log(getSuBSequence('ABCD'));

function getSubset(arr){
  return subset(arr,[])
}

// oa : Orignal Array
// sa : Subset Array
// sa.push(current) THIS MISTAKE YOU MADE 3RD TIME MAN UNDERSTAND THIS WILL RETURN A NUMBER
// AND IN NEXT SO THAT MEANS YOU ARE NOT PASSING ARRAY ANYMORE YOU ARE PASSING NUMMER AND
// IN NEXT RECURSION CALL IT WILL BE NUMBER NOT ARR. SO NEVER MEANS NEVER DO ANY MISTAKE
//  subset(oa,sa.push(current)); (DON'T DO LIKE THIS)
//  FIRST PUST AND THEN DIRECTLY ADD 
// sa.push(current)
// subset(oa,sa) // DO ALWAYS LIKE THIS
// NOTE SUBSET WENT TOTALLY WRONG DO 10 TIMES                                                                       
function subset(oa,sa){

if(oa.length === 0){
  console.log(sa);
  return;
}
let current = oa.pop()
 subset(oa,[current,...sa]); // YES CALL 
 subset(oa,sa); // NO CALL MEANS PASS THE SAME SUBSET ARRAY;
}

// console.log(getSubset(['a','b']))

// Try iterative 
// NOTHING WORKED NEED TO LEARN AGAIN
function subSequenceItr(str){
 let output = [];
 for(let i = 0 ; i < str.length ; i++){
  output.push(str[i])
  let substr = str.substring(i+1)
  let round = 1
  let temp = 0;
  console.log("substr.length",substr.length)
  while(round < substr.length){
    console.log("substr[temp]",substr[temp])
    if(substr[temp]){
      let sub = substr.substring(temp,round)
      console.log("sub",sub)
      sub = str[i] + sub;
      output.push(sub)
      temp++
    }else{
      round++;
    }
  }
}
return output
}

console.log(subSequenceItr('abc'))