/*
 SubSequence is one of the most important topic we need to understand so before we go into
 coding part lets understand what is subsequence.

 >> Given the example we have string : abc => So for this string if we are trying to 
 find subsequence that means that each char of string will have choice to be the part
 of the string or don't be part of the string SIMPLE AS IT IS. And for each string
 total number of subsequence are possible is like 2^n .

 >> For String ABC BELOW ARE THE OPTION

    _ _ _ (all three don't want to participate)
    A _ _ (Only A participate)
    _ B  _ (Only B participate)
    _ _ C (Only C participate)
    A B _ (A and B participate)
    _ B C (B and C participate)
    A _ C (A and C participate)
    A B C (all participate)

This is what subsequence (IN TERMS OF ARRAY) and subset in terms of string is.

Also there could be question releated sub-strings but we don't need to worry about it
now JUST DON'T FORGET TO DO SUB-STRINGS ALSO
*/
// https://leetcode.com/problems/letter-tile-possibilities/ (MUUSSSTT DO)
// DON'T KNOW WHY BUT CODE LOOKS VERY SIMPLE AFTER DRAWING RECURSION TREE.
// AND YES THAT'S IT
function getAllSubSequence(currentString,outputString){
  if(currentString.length === 0){
    console.log(outputString)
    return;
  }

  let ch = currentString[0];
  getAllSubSequence(currentString.substring(1),outputString+ch) // ch wants to be part of string means yes call
  getAllSubSequence(currentString.substring(1),outputString) // ch don't  wants to be part of string means no call
}

getAllSubSequence('ab','')









