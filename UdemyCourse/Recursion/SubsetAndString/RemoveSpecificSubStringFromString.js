/*
  Now in previous question we removed specific char from string like a but what if we want
  to remove specific substring from string ex :
  You have One string haresha => and you want to remove ha from that then final answer should
  be like res => first and last ha will be removed
*/

// Here we are talking sub to just pass the value what you want to remove from string
// GOOD JOB HERE MAKE SURE WHEN TO DO INDEX+ SUB.LENGTH AND WHEN TO DO INDEX+1
// MADE MISTAKE IN BASE CONDITION LIKE STR.LENGTH ===  INDEX + SUB.LENGTH -1  BUT YOU DON'T NEED TO DO THIS
// BECAUSE WHENEVER YOU FIND MATCH YOU DON'T INCRESE ONLY ONE INDEX BUT YOU INCREASE LIKE CURRENT INDEX + SUB.LENGTH
// AT LAST MI UNDERSTAND  SUBSTRING. THIS IS THE REAL HELL
function removeSpecificSubStringFromString(str,nstr,index,sub){
  if(str.length === index){
    return nstr;
  }
  if(str.substring(index,index+sub.length) === sub){
    return removeSpecificSubStringFromString(str,nstr,index+sub.length,sub);
  }else{
     nstr+=str[index]
    return removeSpecificSubStringFromString(str,nstr,index+1,sub)
  }
}

console.log(removeSpecificSubStringFromString('DONEDONEDONA','',0,'DONE')) 
