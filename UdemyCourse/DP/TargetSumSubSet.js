/*
  In this question you have given one array and one target we need to find of that is
  any of that array subset addition has value === target

  Ex : [4,2,7,1,3] => 10 // So few possible answers here 73,4213,721 etc

  NOW HERE IMPORTANT THING TO UNDERSTAND IS WHAT IS SUBSET AND SUB ARRAY ? HOW THE ARE 
  DIFFERENT BECAUSE HERE WE NEED TO THING ABOUT SUBSET NOT SUB ARRAY.

  SUBSET : IN SUBSET EACH ELEMENT OF ARRAY HAS TWO OPTION EITHER IT CAN BE PART OF
  THAT SUBARRAY OR IT CAN NOT. AND IMPORTENT PART IS HERE CAN IN SUBARRAY SEQUENCE DOES
  NOT MATTER.
  
  EX : [A,B,C] SUBSETS = 2 RATITO N => 2 RATITO 3 => 8
  => [.,A,B,AB,C,AC,BC,ABC] THESE ARE THE POSSIBLE SUBSET WANT TO KNOW HOW ? LETS GO DEEP

  >> PROGRAM START FIRST OPPORUNITY GOES TO A SO A HAS TO OPTION EITHER IT CAN BE PART OR NOT 
    
    A => [,A] => SO BECAUSE OF A THIS ARRAY CREATED LIKE IF A DON'T BE THE PART THEN IT WILL BE BLANK IF IT BE THE PART THEN IT WILL BE A

    NOW WHO IS NEXT SO ITS B => SAME TWO OPTION BUT MAKE SURE NOW WE DON'T HAVE BLANK ARRAY
    RATHER WE HAVE [,A] => THIS ARRAY SO EITHER B CAN BE PART OF BOTH OF THIS OR IT WON'T

    [,A] => [,A,B,AB] => BOTH OPTION APPLIED FIRST WON'T BE THE PART THEN B THE PART 

    AT LAST C => SAME TWO OPTIONS

    [,A,B,AB] FOR C HAVE THIS ARRAY => [,A,B,AB,C,AC,BC,ABC] => FINALLY THESE ARE THE OPTIONS

    THIS IS WHAT SUBSET IS.

   SUBARRAY : ONLY ONE DIFFERENCE YOU CAN  NOT TO BACKWORD LIKE [A,B,C] SUB ARRAYS WILL BE
   => [A,AB,ABC,B,BC,C] => THIS ARE THE SUB ARRAY
*/

let arr = [4,2,7,1,3,99,98,96,93]
function findAllSubsets(arr,i,psf){
  if(i === arr.length) {
    console.log(psf); // WAS NOT ABLE TO FIGURE OUT THE BASE CASE BHAI ITNA TO SOCH KI HERE KE CALL KE LIYE BASE CASE CALL HOTA HE SO HER JGA SE USKA PSF RETURN HOGA
    return
  }

  findAllSubsets(arr,i+1,psf+arr[i]);
  findAllSubsets(arr,i+1,psf);

}
//  findAllSubsets(arr,0,'');
 function sumOfSubsets(arr,i,wsf,psf,target){
  if(i === arr.length){
    if(wsf === target){
      console.log(psf)
    }
    return;
  }
  // this small condition can also save some calls
  if(wsf > target){
    return
  }
  sumOfSubsets(arr,i+1,wsf+arr[i],psf+arr[i],target); // Yes option
  sumOfSubsets(arr,i+1,wsf,psf,target); // No option

 }
 sumOfSubsets(arr,0,0,'',100)