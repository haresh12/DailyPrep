/*
  In this example we have to remove a from given string 
  so suppose your string is haresh => then new string will be hresh
*/
// YOU NEED TO UNDERSTAND ONE THING HERE IS THAT STRING IN JS ARE IMUTABLE SO WE CAN NOT CHANGE
// IN SAME STRING 
function removeAFromString(str,nstr,index){
 if(str.length === index){
  return nstr
 }
 if(str[index] !== 'a'){
   nstr+=str[index];
   return removeAFromString(str,nstr,index+1); // never do index++ it will be infynite.
 }
 return removeAFromString(str,nstr,index+1); 
}

console.log(removeAFromString('Be kind everything else is secondary','',0));