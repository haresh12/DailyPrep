/*
  FIRST THING FIRST : WHAT IS PERMUTATION 
  In simple word if you have given one string them who make different possible way you 
  can re arrange them.

  example : 'abc' n factorial combination possible to re arrange
  [abc,acb,,bac,bca,cab,cba]
*/
/*
  CODE LOOKS SIMPLE BUT ITS HARD TO UNDERSTAND BECAUSE OF DEEP LEVEL RECURSTION MORE PRACTICE NEEDED
*/

/*
 line 23 24 understand why we are using nstr because made 3 time same mistake like adding
 str.substring() because we need to make decision on nstr not on str.
 ONLY CODE DONE DRY RUN MUST
*/

/*
 Returning Array or just printing console.log is not hard atleast that i understand now
*/
function getPermutation(processed, unprocessed,arr){
  if(unprocessed.length === 0){
    arr.push(processed)
    return;
  }
  let ch = unprocessed.charAt(0); // AT FIRST ∑ ENITER ABC WILL BE UNPROCESSED AND WILL TAKE A FROM THAT
  // FIRST PROCESSED WILL BE BLANK
  for(let i = 0 ; i <=processed.length;i++){
    let first = processed.substring(0,i); // UNDERSTAND INCLUSIVE AND EXCLUSIVE IN SUBSTRING
    let second = processed.substring(i,processed.length);
    getPermutation(first+ch+second,unprocessed.substring(1),arr)
  }
  return arr; // if question is like just count it then return arr.length
}

function getPermutationCount(processed, unprocessed,count){
 if(unprocessed.length === 0 ){
    count++;
  return count;
 }
 let ch = unprocessed.charAt(0);
 for(let i = 0 ; i <= processed.length ; i++){
   let first = processed.substring(0,i);
   let second = processed.substring(i,processed.length);
   count = getPermutationCount(first+ch+second,unprocessed.substring(1),count); // do not write return directly here
 }
 return count
}
console.log(getPermutationCount('','abcd',0))